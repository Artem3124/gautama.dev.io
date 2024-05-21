<template>
  <div class="items-list" :style="background">
    <Item
      class="items-list__item"
      :background="!itemsTransparent"
      :underLine="true"
      v-for="item in items"
    >
      <template #icon>
        <div class="items-list__body--item-icon">
          <TaskIcon v-if="item.icon === 'task'" />
          <GiftIcon v-if="item.icon === 'gift'" />
          <InitialsIcon
            :name="item.content"
            v-if="!item.icon || item.icon === icon.Initials"
          />
        </div>
      </template>
      <template #content>
        <div class="items-list__body--item-content">
          <div>{{ item.content }}</div>
          <KarmaCounter
            :content="item.karma"
            :formerIcon="true"
            :height="'40px'"
            :distance="'0.2em'"
            :fontSize="'20px'"
            class="items-list__body--item-karma-counter"
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
import GiftIcon from "@/assets/svg/icons/Gift.svg";
import InitialsIcon from "@/shared/components/InitialsIcon.vue";
import { icon } from "@/shared/models/iconEnum";

export default {
  props: {
    // items: The items that will be displayed
    items: {
      type: Array,
      required: true,
      default: [],
    },
    // transparent: If the background should be transparent
    transparent: {
      type: Boolean,
      default: false,
    },
    // itemsTransparent: If the items should have a transparent background
    itemsTransparent: {
      type: Boolean,
      default: true,
    },
  },

  components: {
    KarmaCounter,
    Item,
    GiftIcon,
    TaskIcon,
    InitialsIcon,
  },

  data() {
    return {
      icon: icon,
    };
  },

  computed: {
    background() {
      const bg = {
        backgroundColor: "rgba(0, 67, 191, 0.09)",
        borderRadius: "0.5em",
      };

      const noBg = {
        backgroundColor: "none",
        borderRadius: "0em",
      };

      return this.transparent ? noBg : bg;
    },
  },
};
</script>

<style lang="scss">
.items-list {
  &__body {
    padding: 0.5em 2em 0;

    &--item-icon {
      margin: auto 0;
      svg {
        width: 4em;
        height: 3em;
      }
    }

    &--list-heading {
      padding-top: 1em;
      font-weight: 600;
      font-size: 1.5em;
    }

    &--daily-tasks {
      padding-top: 0.7em;
    }

    &--item-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &--item-karma-counter {
      margin: 0.2em 0;
    }
  }
}
</style>
