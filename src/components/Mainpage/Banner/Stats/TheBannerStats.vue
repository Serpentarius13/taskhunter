<template>
  <div class="stat__wrapper">
    <h2>Ежедневная статистика сервиса</h2>
    <ul class="stat__list">
      <BaseBannerStat v-for="(stat, ix) in stats" :key="ix" v-bind="stat" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import BaseBannerStat from "./BaseBannerStat.vue";

type Stat = { name: string; count: string | number };
const stats: Stat[] = [
  { name: "Новых предложений за сутки", count: "2,234" },
  { name: "Последнее обновление", count: "3:43:00" },
  { name: "Новых исполнителей", count: "178+" },
];
</script>

<style lang="scss" scoped>
.stat {
  &__list {
    @apply flex flex-col items-center justify-center;



    li {
      @apply border-b-mainBlueLight border-b-[1px];

      &:last-child {
        border-bottom: 0px;
      }
    }
  }

  &__wrapper {
    @apply flex flex-col;
    max-width: max(58rem, 60%);
    gap: 1.8rem;



    h2 {
      @apply text-2xl text-white font-normal;
      letter-spacing: 2.5px;
    }
  }
}
</style>
