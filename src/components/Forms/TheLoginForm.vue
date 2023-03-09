<template>
  <form class="login__form" @submit.prevent="handleSubmit">
    <BaseTextInput
      v-model="username"
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
      <button
        class="formBtn-blue btn"
        type="submit"
        :disabled="userStore.isLoadingGetter"
      >
        Войти
      </button>
      <button class="formBtn-green" type="button">Забыли пароль?</button>
      <router-link class="formBtn-green" to="/registration">
        Зарегестрироваться
      </router-link>
    </div>
  </form>
</template>

<script setup lang="ts">
import BaseTextInput from "./Inputs/BaseTextInput.vue";
import { useField } from "vee-validate";
import useToastedForm from "@/features/composables/useToastedForm";
import loginZod from "@/constants/types/zod/loginZod";
import useUserStore from "@/store/useUserStore";

const initialValues = { username: "", password: "" };

const {validate} = useToastedForm(loginZod, initialValues);

const { value: username } = useField<string>("username");
const { value: password } = useField<string>("password");

const userStore = useUserStore();

async function handleSubmit(): Promise<void> {
  try {
    const isValid = await validate();

    if (!isValid) return;
    await userStore.login({ username: username.value, password: password.value });


  } catch (error) {
    console.error(error);
  }
}
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
