<template>
    <nav class="container nav__container">

        <div class="nav__left">
            <BaseNavLogo />

            <TheNavLinks/>
        </div>

        <div class="nav__right">
            <TheRegistrationButton/>
            <TheLoginButton/>
         
        
            
        </div>
      
    </nav>
</template>

<script setup>

import TheLoginButton from '../Buttons/TheLoginButton.vue';
import TheRegistrationButton from '../Buttons/TheRegistrationButton.vue';
import BaseNavLogo from './BaseNavLogo.vue';
import TheNavLinks from './TheNavLinks.vue';



</script>

<style lang="scss" scoped>


.nav {
    &__container {
        @apply flex justify-between py-[0.5rem];
        min-height: 3.6rem;
        
    }

    &__left {
        @apply flex items-center gap-veryBig;
    }

    &__right {
        @apply flex items-center gap-medium;
    }
}

</style>