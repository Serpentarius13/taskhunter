<template>
  <form class="login__form">
    <BaseTextInput
      v-model="name"
      label="ФИО"
      placeholder="Иванов Иван Иванович"
    />
    <BaseTextInput
      v-model="phone"
      label="Номер телефона"
      placeholder="+7 (____) ___.__.__"
    />
    <BaseTextInput v-model="email" label="E-mail" placeholder="Info@email.ru" />
    <BaseTextInput v-model="password" label="Пароль" placeholder="______" />
  </form>
</template>

<script setup>
import { ref } from "vue";
import BaseTextInput from "./Inputs/BaseTextInput.vue";
const name = ref("");
const phone = ref("");
const email = ref("");

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
