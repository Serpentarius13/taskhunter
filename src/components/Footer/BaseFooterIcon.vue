<template>
  <figure class="footer__icon">
    <img
      src="/img/grid-icons/db.svg"
      alt="Иконка футера"
      class="footer__icon-img"
    />
  </figure>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  &__icon {
    @apply rounded-full bg-white flex items-center justify-center;

    width: 5.1rem;
    height: 5.1rem;

    &-img {
      @apply object-cover;
      max-width: 2.7rem;
      max-height: 2.7rem;
    }
  }
}
</style>
