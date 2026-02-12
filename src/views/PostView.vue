<script setup>
    import NavBar from '../components/NavBar.vue';
    import SearchBar from '../components/SearchBar.vue';
    import SideBar from '../components/SideBar.vue';
    import { onMounted } from 'vue';

    import { useTranslations } from '../composables/useTranslations'

    const { t } = useTranslations()

    onMounted(() => {
        const fileUpload = document.getElementById("file-upload");
        const labelUpload = document.getElementById("label-upload");
        const imagePreview = document.getElementById("image-preview");
        const plusIcon = document.getElementById("plus-icon");

        let postTitleInput = document.getElementById("post-title-input");
        let postDescriptionInput = document.getElementById("post-description-input");
        let submitButton = document.getElementById("submit-button");

        const newPost = { //Lista para hacer un JSON
            postTitle: "",
            postImage: "",
            postDescription: ""
        };

        const newPostDict = Object.entries(newPost);

        submitButton.addEventListener("click", function (event) {
            event.preventDefault();

            //Con esto guardo los valores en las posiciones que quiera del JSON
            newPostDict[0][1] = postTitleInput.value;
            newPostDict[2][1] = postDescriptionInput.value;

            const postObject = Object.fromEntries(newPostDict);
            
            //Guardamos el JSON
            sessionStorage.setItem("newPost", JSON.stringify(postObject));

            window.location.href = "/home";
        });

        fileUpload.addEventListener("change", function() {
            //Hago esto para obtener el archivo que el usuario ha seleccionado
            const file = this.files[0];
            if (!file) return;

            //Hago esto para asegurarme de que el archivo es una imagen
            if (!file.type.startsWith("image/")) {
                alert("Solo imágenes");
                return;
            }

            labelUpload.style.height = "299px";
            labelUpload.style.width = "500px";

            //Con esto puedo generar un src temporal para mostrar la imagen sin subirla al servidor
            imagePreview.src = URL.createObjectURL(file); //Saco el src de la imagen
            newPostDict[1][1] = imagePreview.src; //Lo agrego al JSON
            
            imagePreview.style.display = "block"; //Y le quito la clase hidden
            plusIcon.style.display = "none";

            //Esto sirve para liberar memoria cuando la imagen ya ha cargado
            imagePreview.onload = () => URL.revokeObjectURL(imagePreview.src);
        })
    });
    
</script>

<template>
    <main class="flex justify-center min-h-[100vh]">
        <NavBar></NavBar>
        <section class="text-white w-[1200px]">
            <SearchBar></SearchBar>
            <div id="mainPost" class="min-h-[92.9vh] bg-[#15202b80]">
                <form class="flex flex-col mt-5 ml-10 gap-3">
                    <label for="post-title" id="post-title" class="text-3xl font-bold">{{ t.post.title }}</label>
                    <input type="text" id="post-title-input" autocomplete="off" class="bg-[#1d2c3b] text-[25px] w-[510px] rounded-[8px] pl-[10px] hover:bg-[#223446] focus-within:outline-[1px] focus-within:outline-[#1da1f2]" maxlength="30">

                    <label for="post-image" id="post-image" class="text-3xl font-bold">{{ t.post.image }}</label>

                    <label for="file-upload" id="label-upload" class="relative flex justify-center items-center rounded-lg bg-[#1d2c3b] w-[510px] h-[90px] hover:cursor-pointer hover:bg-[#223446]">
                        <span id="plus-icon" class="rounded-lg bg-white/30"><svg class="text-gray-300 | icon icon-tabler icons-tabler-outline icon-tabler-plus" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg></span>
                        <input type="file" accept="image/*" id="file-upload" class="hidden">
                        <img id="image-preview" class="block max-w-[510px] max-h-[300px] rounded-lg">
                    </label>

                    <label for="post-description" id="post-description" class="text-3xl font-bold">{{ t.post.description }}</label>
                    <textarea id="post-description-input" class="bg-[#1d2c3b] text-[25px] w-[510px] rounded-[8px] pl-[10px] hover:bg-[#223446] focus-within:outline-[1px] focus-within:outline-[#1da1f2] h-[150px] resize-none" maxlength="200"></textarea>

                    <div class="flex justify-end">
                        <!--ENVIAR DATOS A /HomeView.vue-->
                        <input type="submit" id="submit-button" class="mr-12 rounded-xl w-fit p-2 bg-blue-500 font-bold hover:cursor-pointer hover:bg-blue-600" value="Publicar">
                    </div>
                </form>
            </div>
        </section>
    </main>
</template>

<style scoped>
/*
    #image-preview {
        display: none;
    }

    .input-text {
        background-color: #1d2c3b;
        font-size: 25px;
        width: 510px;
        border-radius: 8px;
        padding-left: 10px;
    }

    .input-text:hover {
        background-color: #223446;
    }

    .input-text:focus-within {
        outline: 1px solid #1da1f2;
    }

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