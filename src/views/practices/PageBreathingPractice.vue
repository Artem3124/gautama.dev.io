<template>
    <div class="content" :style="background">
        <SphereAndInstructions :practice="practice" />
    </div>
</template>

<script>
import { breathingPractices } from "@/components/Practices/Breathing/PracticesList";
import SphereAndInstructions from "@/components/Practices/Breathing/SphereAndInstructions.vue";
import { appearance, bgStyleBuilder } from "@/shared/services/Computed";

export default {
    components: {
        SphereAndInstructions,
    },
    // We will pass props through the router
    // So we could start the right practice by it's id
    props: {
        id: {
            type: String,
            required: true,
        },
    },

    data() {
        return {
            practice: breathingPractices[this.id],
        };
    },

    computed: {
        background() {
            console.log(this.practice.theme);
            return appearance.bgByEnumTheme({
                theme: this.practice.theme,
                styleBuilder: bgStyleBuilder,
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>
