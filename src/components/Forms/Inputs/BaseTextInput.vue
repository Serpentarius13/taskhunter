<template>
  <div class="input__wrapper">
    <label for="input"> {{ label }}</label>
    <div class="input__inner">
      <input
        :type="localTypeRef"
        @input="handleChange"
        :placeholder="placeholder"
      />

      <button
        @click.capture.prevent.stop="handleInputType"
        v-if="props.type == 'password'"
      >
        <img
          src="/img/icons/eye.svg"
          alt="Иконка открытого глаза"
          v-if="isPasswordComputed"
        />
        <img
          src="/img/icons/eye-closed.svg"
          alt="Иконка закрытого глаза"
          v-else
        />
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
      @apply w-full h-full  outline-none border-[2px] border-mainBlue bg-white text-sm;

      padding: 1.1rem 1.6rem;

      &:placeholder-shown {
        @apply border-[1px];
      }

      &:focus {
        @apply border-[2px]
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
      max-width: 2.4rem;
    }
  }
}
</style>
