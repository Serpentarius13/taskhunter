<template>
  <router-link :to="toElement" class="btn-contents__wrapper">
    <img :src="img" :alt="`Иконка кнопки ${text}`" />
    <span> {{ text }}</span>
  </router-link>
</template>

<script setup lang="ts">
interface IProps {
  img: string;
  text: string;
  toElement: string;
}
defineProps<IProps>();
</script>

<style lang="scss" scoped>
.btn-contents {
  &__wrapper {
    @apply flex gap-verySmall items-center;

    img {
      width: 1.8rem;
      height: 1.8rem;
    }

    span {
      @apply text-small text-white;
    }
  }
}
</style>
