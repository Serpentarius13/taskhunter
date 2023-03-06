<template>
  <div class="w">
    <BaseQAPop />
  </div>
</template>

<script setup lang="ts">
import TheBanner from "@/components/Mainpage/Banner/TheBanner.vue";
import BaseFeatureGridCard from "@/components/Mainpage/FeatureGrid/BaseFeatureGridCard.vue";
import TheFeatureGrid from "@/components/Mainpage/FeatureGrid/TheFeatureGrid.vue";
import BaseQAPop from "@/components/Mainpage/QA/BaseQAPop.vue";
import BaseTariffCard from "@/components/Mainpage/Tariffs/BaseTariffCard.vue";
import TheTariffGrid from "@/components/Mainpage/Tariffs/TheTariffGrid.vue";
</script>

<style scoped>
.w {
  background-color: lightblue;
  width: 100vw;
  height: 100vh;
}
</style>
