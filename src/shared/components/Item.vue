<template>
  <div class="list-item" :class="background ? 'bg' : 'non-bg'">
    <div class="list-item__icon">
      <slot name="icon"> </slot>
    </div>
    <div class="list-item__content" :style="underline">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // background: If the item should have a background
    background: {
      type: Boolean,
      required: false,
      default: false,
    },
    // underLine: If the item should have an underline
    underLine: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    underline() {
      const underline = {
        borderBottom: "2px solid #fffcf0",
        borderRadius: "0px",
      };

      const noUnderline = {
        borderBottom: "none",
        borderRadius: "0.5rem",
      };

      return this.underLine ? underline : noUnderline;
    },
  },
};
</script>

<style lang="scss">
.list-item {
  color: #fffcf0;
  padding: 1em 1em;
  display: flex;

  &.bg {
    border-radius: 0.5em;
    background-color: rgba($color: #0043bf, $alpha: 0.09);
  }

  &.non-bg {
    border-radius: 0.5em;
    background-color: transparent;
  }

  &__icon {
    margin: auto 0;
    padding-right: 1em;
  }

  &__content {
    font-size: 1.3em;
    font-weight: 500;
    width: -webkit-fill-available;
  }
}
</style>
