<template>
    <div class="navbar">
        <RouterLink :to="{ name: 'index' }">
            <div class="navbar__icon">
                <NavbarHome />
                <div>
                    Home
                </div>
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'practices' }">
            <div class="navbar__icon">
                <NavbarYoga />
                <div>
                    Practices
                </div>
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'activites' }">
            <div class="navbar__icon">
                <NavbarActivities />
                <div>
                    Activities
                </div>
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'referrals' }">
            <div class="navbar__icon">
                <NavbarReferrals />
                <div>
                    Referrals
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<script>
import NavbarHome from '@/assets/img/icons/NavbarHome.svg';
import NavbarYoga from '@/assets/img/icons/NavbarYoga.svg';
import NavbarActivities from '@/assets/img/icons/NavbarActivities.svg';
import NavbarReferrals from '@/assets/img/icons/NavbarReferrals.svg';

export default {
    components: {
        NavbarHome,
        NavbarYoga,
        NavbarActivities,
        NavbarReferrals,
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    width: 100dvw;
    height: 70px;
    background-color: var(--bg-color);
    border-radius: 15px 15px 0 0;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-around;
    // backdrop-filter: blur(16px) saturate(180%);
    // -webkit-backdrop-filter: blur(16px) saturate(180%);
    box-shadow: 0 0 7px 5px rgba(49, 60, 90, 0.1);
    background-color: rgb(255, 255, 255);
    box-sizing: border-box;
    // border: 1px solid rgba(0, 0, 0, 0.125);

    &__icon {
        height: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: var(--navbar-color);

        svg {
            width: 30px;
            height: 30px;
            color: var(--navbar-color);
            padding-bottom: 3px;
        }
    }
}
</style>
