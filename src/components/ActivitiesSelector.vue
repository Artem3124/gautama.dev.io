<template>
    <div class="activities-selector--container">
        <div
            v-for="activity in activities"
            :key="activity.id" 
            class="activities-selector__block" 
            :class="`activities-selector__block_${activity.name}`"
        >
            <div class="activities-selector__block--title">
                {{ activity.title }}
            </div>
            <div class="activities-selector__block--emoji">
                {{ activity.emoji }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activities: [
                {
                    id: 1,
                    name: 'breathing',
                    title: 'Breathing practices',
                    emoji: '💨'
                },
                {
                    id: 2,
                    name: 'meditation',
                    title: 'Start meditation',
                    emoji: '🧘'
                },
                {
                    id: 3,
                    name: 'sleeping',
                    title: 'Sleeping cycle',
                    emoji: '🔮'
                },
                {
                    id: 4,
                    name: 'referrals',
                    title: 'Referral program',
                    emoji: '📣'
                },
            ]
        }
    }
}
</script>

<style lang="scss">
.activities-selector {
    &--container {
        width: calc(100% + 24px);
        margin-left: -12px;
        height: auto;
        padding-left: 12px;
        padding-right: 12px;
        overflow-y: hidden;
        overflow-x: scroll;
        box-sizing: border-box;
        display: inline-flex;
        gap: 12px;
    }

    &__block {
        border-radius: 10px;
        padding: 10px;
        width: 180px;
        box-sizing: border-box;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &--title {
            color: var(--bg-color);
            font-size: 18px;
            font-weight: 500;
        }

        &--emoji {
            font-size: 28px;
            text-align: right;
            margin-right: 4px;
        }

        &_breathing {
            background: rgb(144,179,255);
            background: linear-gradient(345deg, rgb(145, 178, 250) 0%, rgba(89,136,219,1) 100%);
        }

        &_meditation {
            background: rgb(178,255,144);
            background: linear-gradient(345deg, rgba(178,255,144,1) 0%, rgba(135,219,89,1) 100%);
        }

        &_sleeping {
            background: rgb(243,144,255);
            background: linear-gradient(345deg, rgba(243,144,255,1) 0%, rgba(204,89,219,1) 100%);
        }

        &_referrals{
            background: rgb(255,235,144);
            background: linear-gradient(345deg, rgba(255,235,144,1) 0%, rgba(219,202,89,1) 100%);
        }
    }
}
</style>