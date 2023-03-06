<template>
  <nav class="container-wrapper big nav__container">
    <div class="nav__left">
      <BaseNavLogo />

      <TheNavLinks class="nav__links" />
    </div>

    <TheNavButtons />
  </nav>

  <TheMobileNav class="small" />
</template>

<script setup>
import BaseNavLogo from "./BaseNavLogo.vue";
import TheMobileNav from "./TheMobileNav.vue";
import TheNavButtons from "./TheNavButtons.vue";
import TheNavLinks from "./Links/TheNavLinks.vue";
</script>

<style lang="scss" scoped>
.nav {
  &__container {
    @apply flex justify-between py-[0.5rem] px-1;
    min-height: 3.6rem;
    
  }

  &__left {
    @apply flex items-center justify-start gap-[3%] flex-1;
  }
}

.small {
  @include ltSmallDesktop {
    display: flex;
  }
}

.big {
  @include ltSmallDesktop {
    display: none;
  }
}
</style>
