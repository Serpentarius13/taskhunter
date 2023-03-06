<template>
  <BaseSection title="Перехватываем следующие ниши и решения">
    <div class="feature__grid">
      <BaseFeatureGridCard
        v-for="(e, ix) in Array.from(Array(8))"
        :key="ix"
        img="/img/grid-icons/design.svg"
        text="UI/UX Дизайн / Полиграфический дизайн"
      />
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from "../BaseSection.vue";
import BaseFeatureGridCard from "./BaseFeatureGridCard.vue";
</script>

<style scoped lang="scss">
.feature {
  &__wrapper {
    @apply flex flex-col items-center gap-medium pr-2 pl-2;

    h2 {
      @apply self-start;
    }
  }
  &__grid {
    @apply w-full mx-auto grid gap-2.5;

    max-width: 95vw;

    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
}
</style>
