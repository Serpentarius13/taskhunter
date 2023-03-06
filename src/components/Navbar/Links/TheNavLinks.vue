<template>
  <ul class="nav__links">
    <li v-for="(link, ix) in links" :key="ix">
      <BaseNavLink :text="link.text" :toRoute="link.to" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import BaseNavLink from "./BaseNavLink.vue";

type TLink = { to: string; text: string };

const links: TLink[] = [
  { to: "/about", text: "О сервисе" },
  { to: "/tariff", text: "Тарифы" },
  { to: "/faq", text: "Ответы на вопросы" },
  { to: "/help", text: "Нужна помощь" },
];
</script>

<style lang="scss" scoped>
.nav {
  &__links {
    @apply flex items-center gap-medium text-mainBlue;
  }
}
</style>
