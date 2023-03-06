<template>
  <figure class="feature__card">
    <img :src="img" :alt="`Картинка с текстом ${text}`" class="feature__icon" />
    <span class="feature__text"> {{ text }}</span>
  </figure>
</template>

<script setup lang="ts">
interface IProps {
  img: string;
  text: string;
}
defineProps<IProps>();
</script>

<style lang="scss" scoped>
.feature {
  &__card {
    @apply p-4 m-4 flex justify-center items-center gap-veryBig;

    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);

    max-width: 36rem;

    @include ltPhoneMedium {
      max-width: 100%;
      @apply justify-between p-8;
    }
  }

  &__icon {
    @apply w-8 h-8 object-cover;

    @include ltPhoneMedium {
        @apply w-12 h-12;
    }
  }

  &__text {
    @apply text-lg;
    max-width: 60%;

    @include ltPhoneMedium {
        @apply text-2xl font-semibold;
    }
  }
}
</style>
