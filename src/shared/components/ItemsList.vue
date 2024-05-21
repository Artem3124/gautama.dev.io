<template>
  <div class="items-list">
    <Item
      class="items-list__item"
      :background="false"
      :underLine="true"
      v-for="item in items"
    >
      <template #icon>
        <div class="activities-page__body--item-icon">
          <TaskIcon />
        </div>
      </template>
      <template #content>
        <div class="activities-page__body--item-content">
          <div>{{ item.content }}</div>
          <KarmaCounter
            :content="'34'"
            :formerIcon="true"
            :height="'40px'"
            :distance="'0.2em'"
            :fontSize="'20px'"
            class="activities-page__body--item-karma-counter"
          />
        </div>
      </template>
    </Item>
  </div>
</template>

<script>
import KarmaCounter from "@/shared/components/KarmaCounter.vue";
import Item from "@/shared/components/Item.vue";
import TaskIcon from "@/assets/svg/icons/Task.svg";

export default {
  props: {
    // items: The items that will be displayed
    items: {
      type: Array,
      required: true,
      default: [],
    },
    // itemHeight: The height of the items
    itemHeight: {
      type: String,
      required: false,
      default: "55px",
    },
    // itemWidth: The width of the items
    itemWidth: {
      type: String,
      required: false,
      default: "55px",
    },
  },

  components: {
    KarmaCounter,
    Item,
    TaskIcon,
  },
};
</script>

<style lang="scss">
.items-list {
  padding: 1em 1em;
  border-radius: 0.5em;
  background-color: rgba($color: #0043bf, $alpha: 0.09);
}
</style>
