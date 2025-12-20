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
        <section class="bg-[#15202b] text-white">
            <SearchBar></SearchBar>
            <div id="mainTrending">
                <p>TRENDING</p>
            </div>

        </section>
        <SideBar></SideBar>
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
        border: 1px solid black;
        width: 600px;
    }

    section:last-child {
        width: 300px;
    }
</style>