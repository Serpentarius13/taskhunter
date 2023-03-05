<template>
  <div class="nav__buttons">
    <TheRegistrationButton />
    <TheLoginButton />
  </div>
</template>

<script setup lang="ts">
import TheRegistrationButton from "../Buttons/TheRegistrationButton.vue";
import TheLoginButton from "../Buttons/TheLoginButton.vue";
</script>

<style scoped lang="scss">
.nav {
  &__buttons {
    @apply flex items-center gap-medium;
  }
}
</style>
