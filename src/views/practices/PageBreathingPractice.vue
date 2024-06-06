<template>
    <div class="content">
        <SphereAndInstructions :practice="getPractice" />
    </div>
</template>

<script>
import { breathingPractices } from '@/components/Practices/Breathing/PracticesList';
import SphereAndInstructions from '@/components/Practices/Breathing/SphereAndInstructions.vue';

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

    computed: {
        getPractice() {
            return breathingPractices[3];
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
