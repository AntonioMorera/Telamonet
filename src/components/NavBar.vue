<!--Componente de barra de navegacion-->
<script setup>
 import { useTranslations } from '../composables/useTranslations'
    const { t } = useTranslations() //Variable para llamar al archivo de traduccion
</script>

<template>
    <nav>
        <router-link to="/home">{{ t.nav.home }}</router-link>
        <router-link to="/feed">{{ t.nav.feed }}</router-link>
        <router-link to="/profile">{{ t.nav.profile }}</router-link>
        
        <div class="language-selector">
            <button @click="changeLanguage('es')">ES</button>
            <button @click="changeLanguage('en')">EN</button>
        </div>
    </nav>
</template>