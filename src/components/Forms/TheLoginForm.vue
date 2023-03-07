<template>
  <form class="login__form">
    <BaseTextInput
      v-model="phoneOrEmail"
      label="Телефон или почта"
      placeholder="+79006008080"
    />
    <BaseTextInput
      v-model="password"
      label="Введите ваш пароль"
      placeholder="______"
    />
  </form>
</template>

<script setup>
import { ref } from "vue";
import BaseTextInput from "./Inputs/BaseTextInput.vue";

const phoneOrEmail = ref("");
const password = ref("");
</script>

<style lang="scss" scoped>
.login {
  &__form {
    @apply flex  flex-col justify-center;
    gap: 1.7rem;
    max-width: 43.6rem;
  }
}
</style>
