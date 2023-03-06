<template>
  <TheNavbar />
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">
import TheNavbar from "@/components/Navbar/TheNavbar.vue";
</script>

<style lang="scss" scoped></style>
