<template>
    <div>
        <SphereAndInstructions :intervals="getIntervals" />
    </div>
</template>

<script>
import { getPracticeById } from '../../components/Breathing/PracticesList';
import SphereAndInstructions from '../../components/Breathing/SphereAndInstructions.vue';

export default {

    // We will pass props through the router
    // So we could start the right practice
    // By it's id
    props: {
        id: {
            type: Number,
            required: true,
        },
    },

    computed: {
        getIntervals() {
            return getPracticeById(this.id);
        }
    },

    components: {
        SphereAndInstructions,
    }
}
</script>

<style lang="scss" scoped>

</style>
