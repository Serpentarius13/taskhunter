<template>
  <section class="banner__wrapper">
    <div class="banner__inner container">
      <div class="banner__inner-left">
        <h2 class="section-title">
          TASKHUNTER - это сервис поиска потенциальных клиентов по определенным
          тематикам
        </h2>
        <p class="banner__inner-left-subtitle">
          Все, что вам нужно – просто описать задачу, выбрать исполнителя из
          откликнувшихся фрилансеров и принять результат работы. Остальное мы
          берем на себя.
        </p>

        <TheBannerStats class="small" />
        <div class="banner__inner-left__bottom">
          <p class="banner__inner-left__bottom-text">
            для начала пользования сервисом, пройдите бесплатную регистрацию.
            <br />
            это займет не более одной минуты!
          </p>

          <TheRegistrationLink />
        </div>
      </div>

      <TheBannerStats class="big" />
    </div>
  </section>
</template>

<script setup lang="ts">
import TheRegistrationLink from "@/components/Links/TheRegistrationLink.vue";
import TheBannerStats from "./Stats/TheBannerStats.vue";
</script>

<style lang="scss" scoped>
.banner {
  &__wrapper {
    @apply w-full flex items-center justify-center;
    min-height: 50rem;

    background: linear-gradient(90deg, $mainBlue, $mainBlueOpacited);
  }

  &__inner {
    @apply flex w-full items-center justify-between text-white gap-mediumSmall;

    @include ltTabletBig {
      @apply flex-col p-8 items-start;
    }

    &-left {
      @apply flex flex-col gap-mediumSmall;
      max-width: 73.7rem;

      h2 {
        @apply text-white;
      }

      &-subtitle {
        @apply text-lg;
      }
      &__bottom {
        @apply flex justify-between;

        &-text {
          @apply font-bold uppercase;
          max-width: min(54rem, 50%);
        }
      }
    }
  }
}

.big {
  @include ltTabletBig {
    display: none;
  }
}

.small {
  display: none;
  @include ltTabletBig {
    display: flex;
  }
}
</style>
