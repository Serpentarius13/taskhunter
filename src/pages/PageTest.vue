<template>
  <div class="w">
    <BaseTariffCard />
  </div>
</template>

<script setup lang="ts">
import TheBanner from "@/components/Mainpage/Banner/TheBanner.vue";
import BaseFeatureGridCard from "@/components/Mainpage/FeatureGrid/BaseFeatureGridCard.vue";
import TheFeatureGrid from "@/components/Mainpage/FeatureGrid/TheFeatureGrid.vue";
import BaseTariffCard from "@/components/Mainpage/Tariffs/BaseTariffCard.vue";
</script>

<style scoped>
.w {
  background-color: lightblue;
  width: 100vw;
  height: 100vh;
}
</style>
