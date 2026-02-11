<script setup>
    import { onMounted } from 'vue';

    import { useTranslations } from '../composables/useTranslations'

    const { t } = useTranslations()

    onMounted(() => {
        
    });

    const emit = defineEmits(['close'])

    const closeModal = () => {
        emit('close')
    }
</script>

<template>
    <div id="mainPost" class="bg-[#0b111680] text-white rounded-2xl">
        <form class="flex flex-col m-10 gap-3">
            <label for="post-title" id="post-title" class="text-3xl font-bold">{{ t.post.title }}</label>
            <input type="text" id="post-title-input" autocomplete="off" class="input-text" maxlength="30">

            <label for="post-description" id="post-description" class="text-3xl font-bold">{{ t.post.question }}</label>
            <textarea id="post-description-input" class="input-text h-[150px] resize-none" maxlength="200"></textarea>

            <div class="flex justify-end">
                <!--ENVIAR DATOS A /HomeView.vue-->
                <input type="submit" id="submit-button" class="mr-12 rounded-xl w-fit p-2 bg-blue-500 font-bold hover:cursor-pointer hover:bg-blue-600" value="Publicar">
            </div>
        </form>
        <button @click="closeModal">Cerrar</button>
    </div>
</template>

<style scoped>
    #mainPost {
        position: absolute;
        left: 490px;
        top: 200px;
        max-width: 600px;
        min-height: 100px;
    }

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
</style>