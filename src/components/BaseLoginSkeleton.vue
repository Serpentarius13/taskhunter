<template>
  <div class="login__wrapper">
    <main class="login__skeleton">
      <div class="login__skeleton-left"></div>

      <div class="login__skeleton-right">
        <TheNavbar class="navbar" />

        <div class="login__skeleton-right__inner">
          <h1 class="section-title">{{ title }}</h1>
          <slot />

          <p>
            Нажимая кнопку «Регистрация», вы принимаете условия публичной
            оферты, политику обработки персональных данных, правила пользования
            услугами, а также подтверждаете согласие на обработку персональных
            данных.
          </p>
        </div>
      </div>
    </main>
    <TheFooter class="footer" />
  </div>
</template>

<script setup lang="ts">
import TheFooter from "./Footer/TheFooter.vue";
import TheNavbar from "./Navbar/TheNavbar.vue";

interface IProps {
  title: string;
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 0;
}
.login {
  &__wrapper {
    @apply flex flex-col;
    min-width: 100vw;
    min-height: 100vh;
  }
  &__skeleton {
    @apply w-full  h-full  flex flex-1 justify-start;

    &-left {
      width: 30rem;
   
      background: linear-gradient(
          180deg,
          #0569ff 0%,
          rgba(5, 105, 255, 0.2) 80%
        ),
        url("/img/banner-bg.jpg") 60% 0% / cover no-repeat;
    }

    &-right {
      @apply flex-1;

      padding: 2.7rem 3.3rem;

      &__inner {
        @apply flex-1 h-full flex flex-col justify-center;

        gap: 4rem;
        p {
          max-width: 40rem;
        }
      }
    }
  }
}
</style>
