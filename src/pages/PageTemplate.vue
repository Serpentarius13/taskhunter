<template>
  <TheNavbar />
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">
import TheNavbar from "@/components/Navbar/TheNavbar.vue";
</script>

<style lang="scss" scoped>
main {
  @apply flex flex-col;
  gap: 5.6rem;
}
</style>
