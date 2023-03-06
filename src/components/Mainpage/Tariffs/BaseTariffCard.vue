<template>
  <div class="tariff__wrapper">
    <div class="tariff__top">
      <span class="tariff__top-left"> Тарифный план</span>
      <span v-if="isPopular"> &checkmark; </span>
      <span class="tariff__top-right text-normal-blue"> Первый пробный </span>
    </div>
    <div class="tariff__bottom">
      <TheTariffStats />

      <p class="tariff__bottom-description">
        Фильтрация ленты по тексту, гео, соцсетям и дате Прямые ссылки на 3
        свежих сообщения и без ограничений на сообщения старше 3 суток
        Push-уведомления, лента RSS
      </p>
      <div class="tariff__bottom-footer"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheTariffStats from "./StatsList/TheTariffStats.vue";

const isPopular = true;
</script>

<style scoped lang="scss">
.tariff {
  &__wrapper {
    @apply w-full h-full rounded-3xl bg-red-200 p-4 m-5 overflow-hidden;
    max-width: 37rem;
    max-height: 32.7rem;
  }

  &__top {
    @apply flex justify-between items-center;
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
  }

  &__bottom {
    @apply flex flex-col;
    gap: 2.1rem;

    p {
      @apply text-xs;
    }
  }
}
</style>
