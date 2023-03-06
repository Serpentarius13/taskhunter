<template>
  <BaseSection title="Ответы на часто задаваемые вопросы">
    <div class="qa__wrapper">
      <div class="qa__left">
        <BaseQAPop
          v-for="(item, ix) in Array.from(Array(6))"
          :key="ix"
          @select="handleSelect"
          :ix="ix"
          :selected="checkSelected(ix)"
        />
        <p>
          Выберите одну или несколько категорий бизнеса, в которой вы оказываете
          услуги или продаете товары, чтобы получить сообщения из соцсетей, в
          которых нуждаются именно в вас!
        </p>

        <p>
          Выберите одну или несколько категорий бизнеса, в которой вы оказываете
          услуги или продаете товары, чтобы получить сообщения из соцсетей, в
          которых нуждаются именно в вас!
        </p>
      </div>

      <p class="qa__right">
        С другой стороны, курс на социально-ориентированный национальный проект
        однозначно определяет каждого участника как способного принимать
        собственные решения касаемо модели развития. В своём стремлении улучшить
        пользовательский опыт мы упускаем, что диаграммы связей, вне зависимости
        от их уровня, должны быть своевременно верифицированы. Банальные, но
        неопровержимые выводы, а также непосредственные участники технического
        прогресса, превозмогая сложившуюся непростую экономическую ситуацию, в
        равной степени предоставлены сами себе. своевременно верифицированы.
        Банальные, но неопровержимые выводы, а также
      </p>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import BaseSection from "../BaseSection.vue";
import BaseQAPop from "./BaseQAPop.vue";

const selectedOne = ref<number>(-1);

function checkSelected(ix) {
  return ix == selectedOne.value;
}

function handleSelect(ix: number) {
  if (selectedOne.value == ix) selectedOne.value = -1;
  else selectedOne.value = ix;
}
</script>

<style scoped lang="scss">
.qa {
  &__wrapper {
    @apply flex justify-between gap-medium;

    @include ltDesktop {
      @apply gap-small;
    }

    @include ltTablet {
      @apply flex-col gap-small;
      max-width: 95vw;
      margin-right: auto;
    }
  }
  &__left {
    @apply grid grid-cols-2;
    gap: 3rem;
    min-width: 77rem;

    @include ltDesktop {
      min-width: 50rem;
    }

    @include ltPhone {
      min-width: 20rem;
    }

    p {
      @apply text-sm;
    }
  }

  &__right {
    @apply w-full text-sm;
    line-height: 193%;
  }
}
</style>
