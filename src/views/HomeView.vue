<script setup>
    import NavBar from '../components/NavBar.vue';
    import SearchBar from '../components/SearchBar.vue';
    import SideBar from '../components/SideBar.vue';
    import { onMounted } from 'vue';

    import { useTranslations } from '../composables/useTranslations'

    const { t } = useTranslations() // Variable para llamar al archivo de traduccion
    
    onMounted(() => {
        function showCreatedPost(postObjectValues) {

            const postObjectDict = Object.entries(postObjectValues);

            const mainBody = document.getElementById("mainBody");

            const newPostContainer = document.createElement("div");
            const newPostTitle = document.createElement("p");
            const newPostDescription = document.createElement("p");

            newPostContainer.className = "border border-red-500 w-[600px]";
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
    <main>
        <NavBar></NavBar>
        <section class="bg-[#15202b] text-white">
            <SearchBar></SearchBar>
            <div id="mainBody" class="flex justify-center items-center">

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