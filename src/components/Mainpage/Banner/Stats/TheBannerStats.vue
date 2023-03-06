<template>
  <ul class="stat__list">
    <BaseBannerStat v-for="(stat, ix) in stats" :key="ix" v-bind="stat" />
  </ul>
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
    @apply w-full flex flex-col items-center justify-center;
    max-width: 58rem;
  }
}
</style>
