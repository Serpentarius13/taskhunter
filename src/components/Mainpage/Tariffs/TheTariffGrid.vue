<template>
  <BaseSection title="Наши цены и тарифы на использование сервиса">
    <div class="tariff__grid">
      <BaseTariffCard v-for="(item, ix) in Array.from(Array(4))" :key="ix" />
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from "../BaseSection.vue";
import BaseTariffCard from "./BaseTariffCard.vue";
</script>

<style scoped lang="scss">
.tariff {
  &__grid {
    @apply grid w-[115%]  place-items-center gap-4;

    max-width: 98vw;

    grid-template-columns: repeat(4, 1fr);

    @include ltMediumDesktop {
      max-width: 70vw;
      column-gap: 4rem;
      grid-template-columns: repeat(2, 1fr);
    }

    @include ltSmallDesktop {
      max-width: 75vw;
    }

    @include ltTabletBig {
      grid-template-columns: 1fr;
      max-width: 45vw;
    }

    @include ltTablet {
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
