<template>
    <div class="logo__wrapper">
        <h1 class="logo__title ">Taskhunter</h1>
        <p class="logo__subtitle "> Сервис поиска потенциальных клиентов в социальных сетях</p>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>


.logo {

    &__wrapper {
       @apply flex flex-col;
       gap: 0.1rem;
       max-width: 22rem;
    }

    &__title {
      @apply  text-medium font-semibold leading-large;
      
    }

    &__subtitle {
@apply text-extraSmall leading-small;
    }
}
</style>