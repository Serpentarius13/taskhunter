<template>
  <BaseSection title="Наши цены и тарифы на использование сервиса">
    <div class="tariff__wrap">
      <div class="tariff__grid container-wrapper">
        <BaseTariffCard v-for="(item, ix) in Array.from(Array(4))" :key="ix" />
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from "../BaseSection.vue";
import BaseTariffCard from "./BaseTariffCard.vue";
</script>

<style scoped lang="scss">
.tariff {
  &__wrap {
    width: 100vw;
    padding: 4.7rem;

    background: url("/img/tariff-bg.jpg") 0 0 / cover no-repeat;
  }
  &__grid {
    @apply grid   place-items-center gap-4;

    grid-template-columns: repeat(4, 1fr);

    @include ltMediumDesktop {
      max-width: 70vw;
      column-gap: 4rem;
      grid-template-columns: repeat(2, 1fr);
    }

    @include ltSmallDesktop {
      max-width: 95vw;
    }

    @include ltTablet {
      grid-template-columns: 1fr;
      max-width: 75vw;
    }

    @include ltPhone {
      max-width: 85vw;
    }

    @include ltPhoneSmall {
      max-width: 95vw;
    }
  }
}
</style>
