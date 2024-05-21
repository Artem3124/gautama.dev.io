<template>
  <div class="content activities-page main-bg">
    <div class="activities-page--header">Earn Karma</div>
    <KarmaCounter
      :content="'374'"
      :formerIcon="true"
      :height="'70px'"
      :distance="'0.5em'"
      class="activities-page--counter"
    />
    <div class="activities-page__body">
      <div class="activities-page__body--list-heading">Daily Tasks</div>
      <div class="activities-page__body--daily-tasks">
        <Item :background="true" :underLine="true">
          <template #icon>
            <div class="activities-page__body--item-icon">
              <TaskIcon />
            </div>
          </template>
          <template #content>
            <div class="activities-page__body--item-content">
              <div>Long valueable content</div>
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
      <div class="activities-page__body--list-heading">Tasks List</div>
      <div class="activities-page__body--daily-tasks">
        <ItemsList :items="this.items" />
      </div>
    </div>
  </div>
</template>

<script>
import KarmaCounter from "@/shared/components/KarmaCounter.vue";
import Item from "@/shared/components/Item.vue";
import ItemsList from "@/shared/components/ItemsList.vue";
import TaskIcon from "@/assets/svg/icons/Task.svg";
import { icon } from "@/shared/models/iconEnum";

const items = [
  { content: "Long important shit 3", karma: "34", icon: icon.Task },
  { content: "Long important shit 3", karma: "34", icon: icon.Task },
  { content: "Long important shit 3", karma: "34", icon: icon.Task },
  { content: "Long important shit 3", karma: "34", icon: icon.Initials },
  { content: "Long important shit 3", karma: "34", icon: icon.Gift },
];

export default {
  components: {
    Item,
    KarmaCounter,
    ItemsList,
    TaskIcon,
  },

  data() {
    return {
      items: items,
    };
  },
};
</script>

<style lang="scss">
.activities-page {
  height: 300vh;
  color: #fffcf0;
  margin: 0 auto;

  &--header {
    padding-top: 1em;
    font-weight: 600;
    text-align: center;
    font-size: 2em;
  }

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

  &--counter {
    color: white;
    padding-top: 1.5em;
  }
}
</style>
