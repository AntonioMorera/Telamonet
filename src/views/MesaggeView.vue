<script setup>
    import NavBar from '../components/NavBar.vue';
    import SearchBar from '../components/SearchBar.vue';
    import SideBar from '../components/SideBar.vue';
    
    import { useTranslations } from '../composables/useTranslations'
    const { t } = useTranslations() // Variable para llamar al archivo de traduccion
</script>

<template>
    <main>
        <NavBar></NavBar>
        <section class="text-white">
            <SearchBar></SearchBar>
            <div id="mainMesagge" class="flex justify-center items-center min-h-[80vh]">
                <h1 class="text-4xl font-bold">No hay ningun mensaje</h1>
            </div>
        </section>
    </main>
</template>

<style scoped>
    main {
        display: flex;
        flex-direction: row;
        justify-content: center;
        min-height: 100vh;
    }

    section {
        width: 1200px;
    }
</style>