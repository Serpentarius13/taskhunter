<template>
  <TheNavbar />
  <main>
    <slot />
  </main>
  <TheFooter />
</template>

<script setup lang="ts">
import TheNavbar from "@/components/Navbar/TheNavbar.vue";
import TheFooter from "@/components/Footer/TheFooter.vue";
</script>

<style lang="scss" scoped>
main {
  @apply flex flex-col;
  gap: 5.6rem;
}
</style>
