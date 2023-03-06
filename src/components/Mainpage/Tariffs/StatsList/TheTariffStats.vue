<template>
  <ul class="tariff__stats">
    <BaseTariffStat v-for="(stat, ix) in stats" :key="ix" v-bind="stat" />
  </ul>
</template>

<script setup lang="ts">
import BaseTariffStat from "./BaseTariffStat.vue";

type Stat = { name: string; value: string | number };

const stats: Stat[] = [
  { name: "Период", value: "3 дня" },
  { name: "Стоимость", value: "Бесплатно" },
  { name: "Описание", value: "Выберите категорию" },
];
</script>

<style scoped lang="scss">
.tariff {
  &__stats {
    @apply flex flex-col items-center;
    gap: 1.8rem;

    li {
      @apply border-b-[1px] border-lightGray;

      &:last-child {
        border: 0;
      }
    }
  }
}
</style>
