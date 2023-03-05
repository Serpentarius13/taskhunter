<template>
    <router-link class="nav__link" >

        {{ text }}

    </router-link>
</template>

<script setup>
defineProps(['text'])

</script>

<style lang="scss" scoped>

.nav {
    &__link {

        @apply leading-medium text-lg font-bold;
    }
}
</style>