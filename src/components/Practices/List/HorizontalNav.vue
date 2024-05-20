<template>
  <div class="horizontal-nav">
    <div
      v-for="button in buttons"
      :key="button"
      class="horizontal-nav__button"
      :class="{ 'horizontal-nav__button--active': button === selected }"
      @click="scrollTo(button)"
    >
      {{ button }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: ["Breathing", "Meditation"],
      selected: "Breathing",
    };
  },

  methods: {
    scrollTo(el) {
      this.selected = el;
      try {
        document.getElementById(el).scrollIntoView({
          behavior: "smooth",
        });
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss">
.horizontal-nav {
  position: relative;
  display: inline-flex;
  width: calc(100% + 48px);
  height: auto;
  margin: 0 0 0 -24px;
  padding: 6px 24px 0 24px;
  box-sizing: border-box;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-color: transparent transparent;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
  scroll-padding-inline-start: 24px;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
    width: 0;
    height: 0;
  }

  &__button {
    display: block;
    padding: 8px 20px;
    white-space: pre;
    background: transparent;
    border: 1px solid rgb(255, 255, 255, 0.6);
    color: white;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.2s;
    scroll-snap-align: start;
    margin-right: 12px;
    font-size: 16px;
    user-select: none;
    backdrop-filter: blur(10px);
    // font-family: 'Cabin';

    &:last-child {
      margin-right: 0;
    }

    &--active {
      background-color: white;
      color: #7ba4fc;
    }
  }
}
</style>
