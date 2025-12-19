<script setup>
    import NavBar from '../components/NavBar.vue';
    import { useTranslations } from '../composables/useTranslations'
    //const { t } = useTranslations() // Variable para llamar al archivo de traduccion
    
</script>

<template>
    <main>
        <NavBar></NavBar>
        <section>
            <div id="searchBar">
                <p>hola</p>
            </div>
            <div id="mainBody">
                <p>hola</p>
            </div>

        </section>
        <section>
            <p>hola</p>

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
        border: 1px solid black;
        width: 600px;
    }

    section:last-child {
        width: 300px;
    }
</style>