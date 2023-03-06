<template>
  <li class="tariff__stat text-normal-blue">
    <span> {{ name }} </span>
    <span v-if="value"> {{ value }}</span>
    <slot v-else />
  </li>
</template>

<script setup lang="ts">
interface IProps {
  name: string;
  value?: string | number;
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
.tariff {
  &__stat {
    @apply flex justify-between items-center w-full;
  }
}
</style>
