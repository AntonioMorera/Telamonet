<!--Componente de barra de navegacion-->
<script setup>
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const changeLanguage = (lang) => {
    locale.value = lang
}
</script>

<template>
    <nav>
        <router-link to="/home">{{ t('nav.home') }}</router-link>
        <router-link to="/feed">{{ t('nav.feed') }}</router-link>
        <router-link to="/profile">{{ t('nav.profile') }}</router-link>
        
        <div class="language-selector">
            <button @click="changeLanguage('es')">ES</button>
            <button @click="changeLanguage('en')">EN</button>
        </div>
    </nav>
</template>