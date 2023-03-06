<template>
  <div class="qa__qa">
    <button class="qa__top" @click="handleClick" :style="borderComputed">
      <span> Вопрос часто задаваемый </span>
      <div class="qa__top-img">
        <span :style="plusStyleComputed"> &plus; </span>
      </div>

      <Transition>
        <p class="qa__answer" v-if="selected">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          inventore, accusamus cumque suscipit aut unde corrupti quod molestias
          quisquam ipsum facilis autem animi veritatis nihil, fuga eum molestiae
          consequatur vel.
        </p>
      </Transition>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

interface IProps {
  selected: boolean;
  ix: number;
}
const props = defineProps<IProps>();

const emit = defineEmits(["select"]);

const plusStyleComputed = computed(() => {
  if (props.selected) return { transform: "rotate(360deg)" };
  else return { transform: "rotate(0deg)" };
});
const borderComputed = computed(() => {
  if (props.selected) return { borderRadius: "1rem 1rem 0 0" };
  else return { borderRadius: "1rem" };
});

function handleClick(): void {
  emit("select", props.ix);
}
</script>

<style lang="scss" scoped>
.qa {
  &__qa {
    max-width: 36.1rem;

    @apply relative w-full;
  }

  &__top {
    @apply bg-white w-full grid items-center  text-base rounded-2xl;

    grid-template-columns: 3fr 0.1fr;

    padding: 2rem 1rem;

    @include shadowy;

    @include transition-fast;

    span {
      @apply text-start;
    }

    &-img {
      @apply w-12 h-12 border-mainBlue flex items-center justify-center text-2xl text-mainBlue font-bold;
      border: 3px solid;

      span {
        @include transition-fast;
      }

      @include ltPhoneSmall {
        @apply text-lg;
      }
    }
  }

  &__answer {
    @apply text-start absolute w-full bottom-0 left-0 translate-y-full bg-white rounded-2xl rounded-t-none p-2 z-10;
    @include shadowy;

    padding: 1rem;
  }
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(90%);
}

.v-enter-active,
.v-leave-active {
  @include transition-fast;
}
</style>
