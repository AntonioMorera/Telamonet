<script setup>
    import NavBar from '../components/NavBar.vue';
    import SearchBar from '../components/SearchBar.vue';
    import SideBar from '../components/SideBar.vue';
    import { onMounted, ref } from 'vue';

    import { useTranslations } from '../composables/useTranslations'

    const { t } = useTranslations() // Variable para llamar al archivo de traduccion
    
    const showNavBar = ref(false);
    const showSideBar = ref(false);

    const toggleNavBar = () => {
        showNavBar.value = !showNavBar.value;
        if (showNavBar.value) showSideBar.value = false;
    };

    const toggleSideBar = () => {
        showSideBar.value = !showSideBar.value;
        if (showSideBar.value) showNavBar.value = false;
    };

    onMounted(() => {
        function showCreatedPost(postObjectValues) {

            const postObjectDict = Object.entries(postObjectValues);

            const mainBody = document.getElementById("mainBody");

            const newPostContainer = document.createElement("div");
            const newPostTitle = document.createElement("p");
            const newPostDescription = document.createElement("p");

            newPostContainer.className = "border border-red-500 w-full max-w-[600px]";
            mainBody.append(newPostContainer);

            newPostTitle.innerHTML = postObjectDict[0][1];
            newPostTitle.className = "text-[30px]";

            newPostDescription.innerHTML = postObjectDict[2][1];
            newPostTitle.className = "text-[25px]";

            newPostContainer.append(newPostTitle);
            newPostContainer.append(newPostDescription);
        }

        const postObject = JSON.parse(sessionStorage.getItem("newPost"));

        if (postObject) {
            showCreatedPost(postObject);
        }

    });

</script>

<template>
    <main class="flex justify-center min-h-screen relative">
        <!-- Hamburger Menu Izquierdo (NavBar) - Solo visible en sm y md -->
        <button 
            @click="toggleNavBar"
            class="fixed top-4 left-4 z-50 p-2 bg-[#2a4a5a] rounded-lg md:hidden hover:bg-[#3a5a6a] transition-colors duration-200"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
        </button>

        <!-- Hamburger Menu Derecho (SideBar) - Solo visible en sm y md -->
        <button 
            @click="toggleSideBar"
            class="fixed top-4 right-4 z-50 p-2 bg-[#2a4a5a] rounded-lg md:hidden hover:bg-[#3a5a6a] transition-colors duration-200"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
        </button>

        <!-- Overlay oscuro cuando los menús están abiertos -->
        <div 
            v-if="showNavBar || showSideBar"
            @click="showNavBar = false; showSideBar = false"
            class="fixed inset-0 bg-black/50 z-30 md:hidden"
        ></div>

        <!-- NavBar - Desktop siempre visible, Mobile con menú hamburguesa -->
        <div 
            :class="[
                'fixed md:static top-0 left-0 h-full z-40 transition-transform duration-300 ease-in-out',
                showNavBar ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
            ]"
        >
            <NavBar></NavBar>
        </div>

        <!-- Sección Central -->
        <section class="bg-[#15202b] text-white w-full md:w-[600px] md:max-w-[600px]">
            <SearchBar></SearchBar>
            <div id="mainBody" class="flex justify-center items-center px-4 md:px-0">

            </div>
        </section>

        <!-- SideBar - Desktop siempre visible, Mobile con menú hamburguesa -->
        <div 
            :class="[
                'fixed md:static top-0 right-0 h-full z-40 transition-transform duration-300 ease-in-out',
                showSideBar ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
            ]"
        >
            <SideBar></SideBar>
        </div>
    </main>
</template>

<style scoped>

</style>