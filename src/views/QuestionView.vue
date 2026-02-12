<script setup>
    import NavBar from '../components/NavBar.vue';
    import SearchBar from '../components/SearchBar.vue';
    import SideBar from '../components/SideBar.vue';
    
    import { useTranslations } from '../composables/useTranslations'
    const { t } = useTranslations() // Variable para llamar al archivo de traduccion
</script>

<template>
    <main class="flex justify-center min-h-[100vh]">
        <NavBar></NavBar>
        <section class="text-white w-[1200px]">
            <SearchBar></SearchBar>
            <div id="mainTrending" class="flex justify-center items-center min-h-[92.9vh] bg-[#15202b80]">
                <h1 class="text-4xl font-bold">No hay ninguna pregunta</h1>
            </div>
        </section>
    </main>
</template>

<style scoped>
    /*
    main {
        display: flex;
        flex-direction: row;
        justify-content: center;
        min-height: 100vh;
    }
    
    section {
        width: 1200px;
    }
    */
</style>