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
    <main class="flex justify-center min-h-screen">
        <NavBar></NavBar>
        <section class="text-white w-[1200px]">
            <SearchBar></SearchBar>
            <div id="mainBody" class="flex justify-center items-center min-h-[92.9vh] bg-[#15202b80]">
                <h1 class="text-4xl font-bold">No hay publicaciones</h1>
            </div>

        </section>
    </main>
</template>

<style scoped>

</style>