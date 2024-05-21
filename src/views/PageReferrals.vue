<template>
  <div class="content referrals-page main-bg">
    <div class="referrals-page__header">
      <div class="referrals-page__header--frens">{{ frensNumber }} Frens</div>
      <KarmaCounter
        :content="'374'"
        :formerIcon="true"
        :height="'70px'"
        :distance="'0.5em'"
        class="referrals-page__header--counter"
      />
    </div>
    <div class="referrals-page__content">
      <div class="referrals-page__content--gift">
        <Item :background="true" :underLine="false">
          <template #icon>
            <div class="referrals-page__content--item-icon">
              <GiftIcon />
            </div>
          </template>
          <template #content>
            <div class="referrals-page__content--item-content">
              <div>Invite frens with telegram premium</div>
            </div>
          </template>
        </Item>
      </div>
      <div class="referrals-page__content--gift">
        <Item :background="true" :underLine="false">
          <template #icon>
            <div class="referrals-page__content--item-icon">
              <GiftIcon />
            </div>
          </template>
          <template #content>
            <div class="referrals-page__content--item-content">
              <div>Invite frens with telegram premium</div>
            </div>
          </template>
        </Item>
      </div>
      <div class="referrals-page__content--heading">Frens</div>
      <div class="referrals-page__content--frens">
        <ItemsList :items="this.items" />
      </div>
    </div>
  </div>
  <div class="referrals-page__fixed-row">
    <button class="referrals-page__fixed-row--button base-btn">
      Invite frens
    </button>
  </div>
</template>
<script>
import ItemsList from "@/shared/components/ItemsList.vue";
import Item from "@/shared/components/Item.vue";
import KarmaCounter from "@/shared/components/KarmaCounter.vue";
import GiftIcon from "@/assets/svg/icons/Gift.svg";
import { icon } from "@/shared/models/iconEnum.js";

const items = [
  { content: "Fren 1", karma: "100", icon: icon.Gift },
  { content: "Fren 2", karma: "100", icon: icon.Task },
  { content: "Fren 3", karma: "100", icon: icon.Initials },
];

export default {
  components: {
    Item,
    ItemsList,
    KarmaCounter,
    GiftIcon,
  },

  data() {
    return {
      items: items,
      frensNumber: 3,
    };
  },
};
</script>

<style lang="scss">
.referrals-page {
  height: 300vh;
  color: #fffcf0;

  &__header {
    padding-top: 1em;
    font-weight: 600;
    text-align: center;
    font-size: 2em;
  }

  &__content {
    padding: 2em 2em 0;

    &--heading {
      padding-top: 1em;
      font-weight: 600;
      font-size: 1.5em;
    }

    &--item-icon {
      margin: auto 0;

      svg {
        width: 4em;
        height: 3em;
      }
    }

    &--frens {
      padding-top: 1em;
    }

    &--item-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: center;
    }

    &--item-karma-counter {
      margin: 0.2em 0;
    }

    &--gift {
      margin-bottom: 1em;
    }
  }

  &__fixed-row {
    position: fixed;
    bottom: 7em;
    display: flex;
    width: -webkit-fill-available;
    justify-content: center;

    &--button {
      padding: 0.5em 2em;
      border-radius: 1em;
    }
  }
}
</style>
