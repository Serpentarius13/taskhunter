<template>
  <PageTemplate>
    <TheBanner />
    <TheFeatureGrid />
    <TheTariffGrid />
  </PageTemplate>
</template>

<script setup lang="ts">
import TheBanner from "@/components/Mainpage/Banner/TheBanner.vue";
import PageTemplate from "./PageTemplate.vue";
import TheFeatureGrid from "@/components/Mainpage/FeatureGrid/TheFeatureGrid.vue";
import TheTariffGrid from "@/components/Mainpage/Tariffs/TheTariffGrid.vue";
</script>

<style scoped></style>
