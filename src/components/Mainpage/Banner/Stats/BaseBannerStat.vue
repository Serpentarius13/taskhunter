<template>
  <li class="stat__item">
    <p class="stat__text">{{ name }}</p>
    <p class="stat__count">{{ count }}</p>
  </li>
</template>

<script setup lang="ts">
interface IProps {
  name: string;
  count: string | number;
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
.stat {
  &__item {
    
    min-height: 6rem;
    @apply flex gap-medium items-center justify-between text-white text-2xl w-full;
  }

  &__text {
    @apply font-bold;
  }

  &__count {
    @apply font-semibold text-5xl;
  }
}
</style>
