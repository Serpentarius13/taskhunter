<template>
  <div class="nav__links">

    <BaseNavLink v-for="(link, ix) in links" :key="ix" :text="link.text" :to="link.to" />
  </div>
</template>

<script setup lang="ts">
import BaseNavLink from './BaseNavLink.vue';

const links = [
  { to: '/about', text: 'О сервисе' },
  { to: '/tariff', text: 'Тарифы' },
  { to: '/faq', text: 'Ответы на вопросы' },
  { to: '/help', text: 'Нужна помощь' },
];
</script>

<style lang="scss" scoped>

.nav {
    &__links {
        @apply flex items-center gap-medium text-mainBlue;

    }
}
</style>
