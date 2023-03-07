<template>
  <div class="input__wrapper">
    <label for="input"> {{ label }}</label>
    <div class="input__inner">
      <input
        :type="localTypeRef"
        @input="handleChange"
        :placeholder="placeholder"
      />

      <button @click="handleInputType" v-if="props.type == 'password'">
        <img
          src="/img/tariff-bg.jpg"
          alt="Иконка открытого глаза"
          v-if="isPasswordComputed"
        />
        <img src="/img/banner-bg.jpg" alt="Иконка закрытого глаза" v-else />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

interface IProps {
  type?: string;
  placeholder?: string;
  modelValue: unknown;
  label: string;
}
const props = defineProps<IProps>();

const emit = defineEmits(["update:modelValue"]);

const localTypeRef = ref(props?.type || "text");

const isPasswordComputed = computed(() => {
  return localTypeRef.value == "password";
});

function handleChange(ev: Event) {
  emit("update:modelValue", (ev.target as HTMLInputElement).value);
}

function handleInputType() {
  if (props?.type != "password") return;

  if (localTypeRef.value == "password") localTypeRef.value = "text";
  else localTypeRef.value = "password";
}
</script>

<style scoped lang="scss">
.input {
  &__wrapper {
    @apply flex flex-col mt-6;

    gap: 0.6rem;
    max-height: 5rem;

    input {
      @apply w-full h-full  outline-none border-[1px] border-mainBlue bg-white text-sm;

      padding: 1.1rem 1.6rem;

      &:focus {
        @apply border-[2px];
      }
    }
    label {
      @apply text-sm font-normal;
    }
  }

  &__inner {
    @apply relative;

    img {
      @apply absolute object-cover right-5 bottom-1/2 translate-y-1/2;
      max-width: 2rem;
      height: 2rem;
    }
  }
}
</style>
