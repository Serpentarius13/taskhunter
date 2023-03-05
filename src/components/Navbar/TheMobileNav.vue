<template>
  <div class="nav__mobile-links" :style="menuStyle" @click.self="handleClose">
    <div class="nav__mobile-links__link">
      <TheNavLinks class="nav__mobile-links__link-link" />
      <div>
        <TheRegistrationButton />
        <TheLoginButton />
      </div>
    </div>
  </div>
  <nav class="nav__mobile">
    <div class="nav__mobile-left">
      <BaseNavLogo />
    </div>

    <label for="burger-menu" class="nav__burger">
      <input type="checkbox" id="burger-menu" @change="handleMenu" />
      <span />
      <span />
      <span />
    </label>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import BaseNavLogo from "./BaseNavLogo.vue";
import TheNavLinks from "./TheNavLinks.vue";
import TheLoginButton from "../Buttons/TheLoginButton.vue";
import TheRegistrationButton from "../Buttons/TheRegistrationButton.vue";

const isMenuShowing = ref<boolean>(false);

const menuStyle = computed<{ transform: string }>(() => {
  if (isMenuShowing.value) return { transform: "translateX(0)" };
  else return { transform: "translateX(-100vw)" };
});

function handleMenu(): void {
  isMenuShowing.value = !isMenuShowing.value;
}

function handleClose(): void {
  isMenuShowing.value = false;
}
</script>

<style lang="scss" scoped>
.nav {
  &__mobile {
    padding: 1rem 2rem;

    @include ltSmallDesktop {
      @apply flex justify-between items-center w-full;
    }

    display: none;

    &-left {
      @apply flex flex-col gap-veryBig;
    }
    &-links {
      @apply bg-gray-500 bg-opacity-40 fixed top-0 w-full h-full overflow-hidden z-20;
      @include transition-fast;

      &__link {
        @apply flex flex-col p-8 bg-mainBlueLight items-center justify-between absolute  top-48 z-30;

        min-height: 35rem;
        min-width: 20rem;

        &-link {
          @apply text-white  flex-col;
        }

        div button {
          width: 100%;
          font-weight: 600;
        }

        div {
            @apply flex flex-col;
            gap: 0.5rem;
        }
      }
    }
  }

  &__burger {
    @apply flex flex-col mr-12 cursor-pointer z-30;

    gap: 0.5rem;
    width: 3rem;
    height: 3rem;

    position: relative;

    input {
      display: none;
    }

    span {
      width: 100%;
      border-bottom: 3px solid black;

      transition: 0.2s all;
    }

    input:checked ~ span {
      position: absolute;

      &:nth-child(2) {
        transform: rotate(45deg);

        top: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
      }
      &:last-child {
        opacity: 0;
        transform: translateX(50%);
      }
    }
  }
}
</style>
