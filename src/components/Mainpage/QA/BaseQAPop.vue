<template>
  <div class="qa__wrapper">
    <button class="qa__top" @click="handleClick">
      <span> Вопрос часто задаваемый </span>
      <div class="qa__top-img">
        <span :style="plusStyleComputed"> &plus; </span>
      </div>

      <Transition>
        <p class="qa__answer" v-if="isShowingAnswer">
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

const isShowingAnswer = ref<boolean>(false);

const plusStyleComputed = computed(() => {
  if (isShowingAnswer.value) return { transform: "rotate(360deg)" };
  else return { transform: "rotate(0deg)" };
});

function handleClick(): void {
  isShowingAnswer.value = !isShowingAnswer.value;
}
</script>

<style lang="scss" scoped>
.qa {
  &__wrapper {
    max-width: 36.1rem;
  }

  &__top {
    @apply bg-white w-full grid items-center  text-base rounded-2xl;

    grid-template-columns: 3fr 0.1fr;

    @include shadowy;

    padding: 2rem 1rem;

    span {
      text-align: start;
    }

    &-img {
      @apply w-12 h-12 border-mainBlue flex items-center justify-center text-2xl text-mainBlue font-bold;
      border: 3px solid;

      span {
        @include transition-fast;
      }
    }
  }

  &__answer {
    text-align: start;
    padding-top: 1.4rem;
  }
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.v-enter-active,
.v-leave-active {
  @include transition-fast;
}
</style>
