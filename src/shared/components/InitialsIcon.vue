<template>
  <div class="initials-icon">
    <div class="initials-icon__cred">{{ initials }}</div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    initials() {
      return this.name
        .split(" ")
        .map((word) => word[0])
        .join("");
    },
  },
};
</script>

<style lang="scss">
.initials-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5em;
  height: 2.5em;
  background-color: #fffcf0;
  border-radius: 0.5em;
  color: #94b4f1;
  font-size: 1.5em;

  &__cred {
    font-weight: bold;
  }
}
</style>
