<template>
  <form class="login__form" @submit.prevent="handleSubmit">
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
    <BaseTextInput
      v-model="email"
      label="Е-емейл"
      placeholder="example@mail.ru"
    />
    <BaseTextInput
      v-model="password"
      label="Пароль"
      placeholder="_____"
      type="password"
    />

    <button type="submit" class="formBtn-blue">Зарегестрироваться</button>
  </form>
</template>

<script setup lang="ts">
import BaseTextInput from "./Inputs/BaseTextInput.vue";
import { useField } from "vee-validate";
import useToastedForm from "@/features/composables/useToastedForm";
import registerZod from "@/constants/types/zod/registerZod";
import useUserStore from "@/store/useUserStore";

const initialValues = { name: "", password: "", email: "", phone: "" };

const validate = useToastedForm(registerZod, initialValues);

const { value: name } = useField<string>("name");
const { value: phone } = useField<string>("phone");
const { value: email } = useField<string>("email");
const { value: password } = useField<string>("password");

const userStore = useUserStore();

async function handleSubmit(): Promise<void> {
  try {
    const isValid = await validate();

    if (!isValid) return;
    userStore.register({
      name: name.value,
      password: password.value,
      email: email.value,
      phone: phone.value,
    });
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
}

.formBtn-blue {
  margin-top: 2rem;
}
</style>
