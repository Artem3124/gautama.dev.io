<template>
    <div>
        <transition
            name="instructions"
            mode="out-in"
        >
            <!-- Created div on every instruction so transition will work -->
            <div
                v-if="instruction === 'relax'"
                class="gradient-sphere--text"
            >
                {{ instruction }}
            </div>
            <div
                v-else-if="instruction === 'inhale'"
                class="gradient-sphere--text"
            >
                {{ instruction }}
            </div>
            <div
                v-else-if="instruction === 'hold'"
                class="gradient-sphere--text"
            >
                {{ instruction }}
            </div>
            <div
                v-else-if="instruction === 'exhale'"
                class="gradient-sphere--text"
            >
                {{ instruction }}
            </div>
        </transition>

        <div
            class="gradient-sphere"
            :class="animationClass"
        >
            <div class="gradient-sphere--bg" />
            <!-- <div class="gradient-sphere--new-lines"></div> -->
        </div>
        <!-- <div class="gradient-sphere-second"></div> -->
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
export default {
    props: {
        intervals: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            instruction: '',
            step: 0,
            reps_count: 0,
            animationClass: '',
            timer: 0,
            duation: 0,
            showProgress: false,
        };
    },

    mounted() {
        this.instruction = 'relax';
        this.duration = this.intervals.pattern.reduce((acc, curr) => acc + curr, 0) * this.intervals.reps;
        // SLow delay to show 'relax' before practice start
        setTimeout(async () => {
            await this.startPractice();
            await this.startTimer();
        }, 3000);
    },

    // TODO: Add beforeLeave hook and show confirm

    methods: {
        async startPractice() {
            const steps_amount = this.intervals.pattern.length; // Amount of inhales/holds/exhales
            const reps_amount = this.intervals.reps; // How many times restart
            if (this.step > steps_amount) {
                // Rerun breath pattern
                this.step = 0;
                this.reps_count++;
            }
            if (this.reps_count >= reps_amount) {
                // End practice
                this.instruction = "";
                this.showProgress = false;
                return
            }
            await this.makeStep(this.step);
        },
        async makeStep(id) {
            const seconds = this.intervals.pattern[id]
            switch(id) {
                // inhale
                case 0:
                    this.animationClass = `inhale-${seconds}`;
                    this.instruction = 'inhale';
                    break;
                // hold inhaled
                case 1:
                    this.animationClass = 'hold-inhaled';
                    this.instruction = 'hold';
                    break;
                // exhale
                case 2:
                    this.animationClass = `exhale-${seconds}`;
                    this.instruction = 'exhale';
                    break;
                // hold before inhale
                case 3:
                    this.animationClass = 'hold-exhaled';
                    this.instruction = 'hold';
                    break;
            };

            // Make next step in the end of current step
            setTimeout(async () => {
                this.step++;
                this.startPractice();
            }, seconds * 1000);
        },
        // Timer for progressbar
        async startTimer() {
            this.showProgress = true;
            setInterval(() => {
                this.timer++;
            }, 1000);
        }
    },
}
</script>

<style lang="scss" scoped>
// Inhale classes and animation
.inhale-1 {
    .gradient-sphere--bg {
        animation: inhale 1s ease;
    }
}

.inhale-4 {
    .gradient-sphere--bg {
        animation: inhale 4s ease;
    }
}

.inhale-5 {
    .gradient-sphere--bg {
        animation: inhale 5s ease;
    }
}

@keyframes inhale {
    from {
        width: 55vw;
        height: 55vw;
    }
    to {
        width: 75vw;
        height: 75vw;
    }
}

// Inhaled/exhaled hold classes and animation
.hold-inhaled {
    .gradient-sphere--bg {
        width: 75vw;
        height: 75vw;
    }
}

.hold-exhaled {
    .gradient-sphere--bg {
        width: 55vw;
        height: 55vw;
    }
}

// Exhale classes and animation
.exhale-2 {
    .gradient-sphere--bg {
        animation: exhale 2s ease;
    }
}

.exhale-4 {
    .gradient-sphere--bg {
        animation: exhale 4s ease;
    }
}

.exhale-6 {
    .gradient-sphere--bg {
        animation: exhale 6s ease;
    }
}

.exhale-8 {
    .gradient-sphere--bg {
        animation: exhale 8s ease;
    }
}

@keyframes exhale {
    from {
        width: 75vw;
        height: 75vw;
    }
    to {
        width: 55vw;
        height: 55vw;
    }
}

.instructions-enter-active,
.instructions-leave-active {
    transition: opacity 0.5s ease;
}

.instructions-enter-from,
.instructions-leave-to {
    opacity: 0;
}

.breathe-progress {
    width: 80%;
    position: absolute;
    bottom: 40px;
    left: 10%;
    height: 5px;
    -webkit-appearence: none;
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