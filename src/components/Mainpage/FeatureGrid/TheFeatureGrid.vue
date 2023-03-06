<template>
  <section class="feature__wrapper container-wrapper">
    <h2 class="section-title">Перехватываем следующие ниши и решения</h2>
    <div class="feature__grid">
      <BaseFeatureGridCard
        v-for="(e, ix) in Array.from(Array(8))"
        :key="ix"
        img="/img/grid-icons/design.svg"
        text="UI/UX Дизайн / Полиграфический дизайн"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseFeatureGridCard from "./BaseFeatureGridCard.vue";
</script>

<style scoped lang="scss">
.feature {
  &__wrapper {
    @apply flex flex-col gap-medium;
    @include sectionPadding;
  }
  &__grid {
    @apply w-full grid gap-2.5;

    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
</style>
