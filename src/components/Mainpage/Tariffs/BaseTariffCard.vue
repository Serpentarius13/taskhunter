<template>
  <div class="tariff__card">
    <div class="tariff__top">
      <span class="tariff__top-left"> Тарифный план</span>
      <span class="tariff__top-popular" v-if="isPopular"> &checkmark; </span>
      <span class="tariff__top-right text-normal-blue"> Первый пробный </span>
    </div>
    <div class="tariff__bottom">
      <TheTariffStats />

      <p class="tariff__bottom-description">
        Фильтрация ленты по тексту, гео, соцсетям и дате Прямые ссылки на 3
        свежих сообщения и без ограничений на сообщения старше 3 суток
        Push-уведомления, лента RSS
      </p>
      <div class="tariff__bottom-footer">Оформить подписку</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheTariffStats from "./StatsList/TheTariffStats.vue";

const isPopular = true;
</script>

<style scoped lang="scss">
.tariff {
  &__card {
    @apply rounded-3xl w-full bg-white  p-4 m-5 pb-0 overflow-hidden;

    min-height: 32.7rem;

    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.2);
  }

  &__top {
    @apply flex w-full justify-between  items-center;
    padding-bottom: 4.9rem;
    padding-top: 0.3rem;

    &-left {
      @apply relative z-10 text-white text-sm p-1;

      &::after {
        content: "";
        @apply absolute inset-0  bg-mainBlue -z-[1]  rounded-r-2xl;
        width: 130%;
        transform: translateX(-17%);
      }
    }

    &-popular {
        padding: 0 1rem;
    }
  }

  &__bottom {
    @apply flex flex-col;
    gap: 2.1rem;
    padding-right: 2.9rem;

    &-description {
      @apply text-xs;
    }

    &-footer {
      @apply w-screen self-center font-bold text-sm  text-white uppercase flex justify-center items-center;
      height: 5rem;

      background: linear-gradient(90deg, $mainBlue, $mainGreen 75%);
    }
  }
}
</style>
