<template>
  <div class="footer__payments">
    <h5 class="footer__payments-title"></h5>
    <div class="footer__payments-bottom">
      <img
        v-for="({ img, alt }, ix) in icons"
        :key="ix"
        :src="img"
        :alt="alt"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
type Icon = { img: string; alt: string };
interface IProps {
  icons: Icon[];
  title: string;
}
defineProps<IProps>();
</script>

<style lang="scss" scoped>
.footer {
  &__payments {
    @apply flex flex-col items-center justify-center;
    gap: 1.3rem;

    &-title {
      @apply text-sm text-white font-bold;
    }

    &-bottom {
      @apply flex items-center justify-center;
      gap: 1.6rem;
    }
  }
}
</style>
