<template>
  <router-link class="nav__link" :to="toRoute">
    {{ text }}
  </router-link>
</template>

<script setup lang="ts">
interface IProps {
  toRoute: string;
  text: string;
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
.nav {
  &__link {
    @apply leading-medium text-lg font-bold;
  }
}
</style>
