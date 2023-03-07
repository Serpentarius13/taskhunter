<template>
  <footer class="footer__wrapper">
    <div class="footer__inner container-wrapper">
      <div class="footer__left">
        <div class="footer__left-top">
          <p>Все права защищены ТаскХантер.ру</p>

          <p>© 2015-2023, TaskHunter.ru</p>
        </div>
        <p class="footer__left-bottom">
          Политика обработки персональных данных
        </p>
      </div>

      <div class="footer__middle"></div>

      <div class="footer__right">
        <p>
          непростую экономическую ситуацию, в равной степени предоставлены сами
          себе. степени предоставлены сами себе. своевременно верифицированы.
          Банальные, но неопровержимые выводы, а также но неопровержимые выводы,
          а также
        </p>
        <p>Пользовательское соглашение</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
type Icon = { img: string; alt: string };
</script>

<style lang="scss" scoped>
.footer {
  &__wrapper {
    @apply w-screen bg-blue-600;
    background: url("/img/footer-bg.jpg") 100% 100% / cover;
    margin-top: 5.5rem;
  }

  &__inner {
    @apply flex items-center justify-center font-light text-white;
    padding: 2.6rem 0;
  }

  &__left {
    @apply flex flex-col;
    gap: 1.1rem;
    &-top {
      @apply text-base flex flex-col;
      gap: 0.3rem;
      padding-bottom: 1.1rem;
      border-bottom: 1px solid white;
    }

    &-bottom {
      @apply text-sm;
    }
  }

  &__middle {
    @apply flex justify-between items-center flex-1;
  }

  &__right {
    @apply flex flex-col justify-between;
    gap: 1.3rem;
    max-width: 45rem;
    p {
      @apply text-xs font-normal;
    }
  }
}
</style>
