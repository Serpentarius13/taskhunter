<template>
  <section class="container-wrapper">
    <h2 class="section-title">{{ title }}</h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
section {
  @apply flex flex-col items-center gap-medium;
  @include sectionPadding;
  h2 {
    @apply self-start;
  }
}
</style>
