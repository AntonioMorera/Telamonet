
<script setup>
    import { useTranslations } from '../composables/useTranslations'
    const { t } = useTranslations() // Variable para llamar al archivo de traduccion

</script>

<template>
    <div id="searchBar">
        <div id="Bar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
            <input type="text"></input>
        </div>
    </div>
    
</template>

<style scope>
    #Bar {
        display: flex;
        flex-direction: row;
        background-color: white;
        border-radius: 20px;
        padding: 10px;
        width: 400px;
        align-items: center;
    }

    #Bar:hover {
        outline: 3px solid black;
        border-color: black;
    }

    #searchBar {
        display: flex;
        background-color: blue;
        border: 1px solid black;
        justify-content: center;
        padding: 20px;
    }

    input {
        margin-left: 10px;
        width: 340px;
        outline: none;
        font-size: 18px;
    }

</style>