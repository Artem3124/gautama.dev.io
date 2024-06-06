<template>
    <div class="main-bg practice-index-container">
        <GradientSphere
            class="gradient-sphere"
            :blur="20"
            :size="computedSize"
            :theme="practiceTheme.base"
            :step-duration="step"
        >
            <transition name="fade" mode="out-in">
                <div :key="instruction">
                    {{ instruction }}
                </div>
            </transition>
        </GradientSphere>

        <transition name="show-breath-progress">
            <progress
                v-if="showProgress"
                class="breathe-progress"
                :value="timer"
                :max="duration"
            />
        </transition>
    </div>
</template>

<script>
import GradientSphere from "@/shared/components/GradientSphere.vue";
import { practiceTheme } from "@/shared/models/practiceTheme";
import { wait } from "@/shared/services/Core";
import { enumProcessor } from "@/shared/services/Core";

const instructions = {
    0: "Inhale",
    1: "Hold",
    2: "Exhale",
    3: "Hold",
    255: "Get ready",
};

export default {
    props: {
        practice: {
            type: Object,
            required: true,
        },
    },
    components: {
        GradientSphere,
    },

    data() {
        return {
            instructionId: 255,
            instruction: instructions[255],
            progressSeconds: 0,
            repetition: 0,
            timer: 0,
            duration: 0,
            showProgress: false,
            practiceTheme,
            sphereSize: 20,
            sizeMultiplier: 1,
            step: 0,
        };
    },

    computed: {
        // Get theme for practice
        computedSize() {
            return `${this.sphereSize * this.sizeMultiplier}rem`;
        },
    },

    watch: {
        instructionId(newId) {
            switch (newId) {
                case 0:
                case 1:
                    this.sizeMultiplier = 1.3;
                    break;
                default:
                    this.sizeMultiplier = 1;
            }
        },
    },

    mounted() {
        this.duration =
            this.practice.pattern.reduce((acc, curr) => acc + curr, 0) *
            this.practice.reps;

        this.changeInstruction(instructions[255], 255);

        setTimeout(async () => {
            await this.startPractice();
        }, 3000);
    },

    // TODO: Add beforeLeave hook and show confirm

    methods: {
        async startPractice() {
            this.startTimer();

            let totalSteps = this.practice.pattern.length; // Amount of inhales/holds/exhales
            let totalRepetitions = this.practice.reps; // How many times restart

            while (this.repetition < totalRepetitions) {
                for (let i = 0; i < totalSteps; i++) {
                    this.step = this.practice.pattern[i];
                    this.progressSeconds += this.step;
                    this.changeInstruction(instructions[i], i);

                    await wait(this.step * 1000);
                }

                this.repetition++;
            }

            this.showProgress = false;
            this.$router.push({
                name: "practice-end",
                params: {
                    theme: enumProcessor.keyByValueToString(
                        practiceTheme,
                        practiceTheme.base,
                    ),
                },
            });

        },

        // Timer for progressbar
        startTimer() {
            this.showProgress = true;
            setInterval(() => {
                this.timer++;
            }, 1000);
        },

        changeInstruction(instruction, id) {
            this.instruction = instruction;
            this.instructionId = id;
        },
    },
};
</script>

<style lang="scss">
.practice-index-container {
    display: flex;
    justify-content: center;
    height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.breathe-progress {
    width: 80%;
    position: absolute;
    bottom: 40px;
    left: 10%;
    height: 5px;
    //-webkit-appearence: none;
    border-radius: 4px;
}
.breathe-progress::-webkit-progress-bar {
    background-color: #ffffff3a;
    border-radius: 4px;
}
.breathe-progress::-webkit-progress-value {
    background-color: #ffffff;
    border-radius: 4px;
    transition: 1s linear;
}
.breathe-progress::-moz-progress-bar {
    background-color: #ffffff21;
    border-radius: 4px;
}

.show-breath-progress-enter-active,
.show-breath-progress-leave-active {
    transition: 1.5s ease;
}

.show-breath-progress-enter-from,
.show-breath-progress-leave-to {
    opacity: 0;
    transform: translateY(12px);
}
</style>
