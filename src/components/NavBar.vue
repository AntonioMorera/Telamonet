<!--Componente de barra de navegacion-->
<script setup>
    import { useTranslations } from '../composables/useTranslations'
    const { t } = useTranslations() //Variable para llamar al archivo de traduccion
</script> 

<template>
    <nav class="bg-gradient-to-b from-[#326465] to-[#1d2e3e]">
        <div class="flex flex-row items-center gap-3 mb-4">
            <img class="w-[70px] h-[70px]" src="/src/assets/logo/telamon_logo.png" alt="">
            <h1 class="font-bold text-[20px] text-white">{{ t.nav.title }}<span class="text-[#a0c4d4]">{{ t.nav.website }}</span></h1>
        </div>
        <router-link class="link" to="/home"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>{{ t.nav.home }}</router-link>
        <router-link class="link" to="/trending"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-flame"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.621 -2.333 5.588c0 3.704 3.134 6.706 7 6.706s7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235" /></svg>{{ t.nav.trending }}</router-link>
        <router-link class="link" to="/explore"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>{{ t.nav.explore }}</router-link>
        <router-link class="link" to="/notification"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-bell"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>{{ t.nav.notification }}</router-link>
        <router-link class="link" to="/chat"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-message-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8" /><path d="M8 13h6" /><path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z" /></svg>{{ t.nav.chat }}</router-link>
        <router-link class="link" id="post" to="/post"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>{{ t.nav.post }}</router-link>
        <router-link class="link" id="profile" to="/profile"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>{{ t.nav.profile }}<svg id="dots" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg></router-link>
        <!--<router-link class="link" to="/addAccount">{{ t.nav.addAccount }}</router-link>-->
        <!--<router-link class="link" to="/register">{{ t.nav.register }}</router-link>-->
        <!--<router-link class="link" to="/login">{{ t.nav.login }}</router-link>-->
        <!--<router-link class="link" to="/logout">{{ t.nav.logout }}</router-link>-->
    </nav>
</template>

<style scoped>
    nav {
        width: 300px;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        padding-left: 40px;
        min-height: 90vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }

    .link {
        display: flex;
        flex-direction: row;
        gap: 10px;
        margin-bottom: 20px;
        font-size: 17px;
        align-items: center;
        padding: 12px 16px;
        border-radius: 12px;
        margin-right: 16px;
        color: #a0c4d4;
        text-decoration: none;
        transition: all 0.2s ease;
        font-weight: 500;
    }

    .link:hover {
        background-color: #2a4a5a;
        color: white;
    }

    .link.router-link-active {
        background-color: #2a4a5a;
        color: white;
        font-weight: 600;
    }

    #post {
        display: flex;
        background-color: #2a4a5a;
        justify-content: center;
        padding: 14px 20px;
        border-radius: 30px;
        color: white;
        font-weight: 600;
        margin-top: 8px;
        margin-bottom: 24px;
    }

    #post:hover {
        background-color: #3a5a6a;
        color: white;
    }

    #profile {
        position: relative;
        margin-top: auto;
        margin-bottom: 20px;
    }

    #dots {
        position: absolute;
        right: 16px;
        width: 24px;
        height: 24px;
        stroke: currentColor;
    }
</style>