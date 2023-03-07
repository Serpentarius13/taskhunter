<template>
  <div class="w">
    <PageLogin/> 
  </div>
</template>

<script setup lang="ts">
import BaseLoginSkeleton from "@/components/BaseLoginSkeleton.vue";
import BaseTextInput from "@/components/Forms/Inputs/BaseTextInput.vue";
import TheLoginForm from "@/components/Forms/TheLoginForm.vue";
import { ref, watchEffect } from "vue";
import PageRegistration from "./PageRegistration.vue";
import PageLogin from "./PageLogin.vue";

const valueRef = ref("");

watchEffect(() => {
  console.log(valueRef.value);
});
</script>

<style scoped>
.w {
  background-color: lightblue;
  width: 100vw;
  height: 100vh;
}
</style>
