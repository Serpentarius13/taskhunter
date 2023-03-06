<template>
  <div class="nav__buttons">
    <TheRegistrationLink />
    <TheLoginLink />
  </div>
</template>

<script setup lang="ts">
import TheRegistrationLink from "../Links/TheRegistrationLink.vue";
import TheLoginLink from "../Links/TheLoginLink.vue";
</script>

<style scoped lang="scss">
.nav {
  &__buttons {
    @apply flex items-center justify-between;
    width: clamp(27rem, 15vw, 31rem);
  }
}
</style>
