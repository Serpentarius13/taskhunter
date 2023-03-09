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
      type="password"
    />

    <div class="login__buttons">
      <button class="formBtn-blue btn" type="submit">Войти</button>
      <button class="formBtn-green" type="button">Забыли пароль?</button>
      <router-link class="formBtn-green" to="/registration">
        Зарегестрироваться
      </router-link>
    </div>
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

  &__buttons {
    @apply grid grid-cols-2;

    padding-top: 2rem;

    row-gap: 1.7rem;
    column-gap: 1rem;
  }
}

.btn {
  grid-column: 1/3;
}
</style>
