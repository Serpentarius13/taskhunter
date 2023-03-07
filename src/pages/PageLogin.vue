<template>
  <BaseLoginSkeleton title="Войти">
    <TheLoginForm />
  </BaseLoginSkeleton>
</template>

<script setup lang="ts">
import TheLoginForm from "@/components/Forms/TheLoginForm.vue";
import PageTemplate from "./PageTemplate.vue";
import BaseLoginSkeleton from "@/components/BaseLoginSkeleton.vue";
</script>

<style lang="scss" scoped></style>
