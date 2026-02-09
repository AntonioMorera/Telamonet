<script setup>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import SearchBar from '../components/SearchBar.vue';
import ButtonTemplate from '../components/buttons/ButtonTemplate.vue';
import { useTranslations } from '../composables/useTranslations'

const { t } = useTranslations()

// Datos de ejemplo
const usuario = {
   nombre: 'Jugi Quijugi',
   usuarioNombre: '@jugiquijugi',
   seguidores: 100,
   siguiendo: 75,
   bannerUrl: 'https://www.retrones.net/sites/default/files/cabeceras/cabeceras_36.jpg',
   iconoUrl: 'https://www.pro-bems.com/IMAGES/images_1/FIGDC95442/m/FIGDC95442_1.jpg'
}
</script>

<template>
    <main class="flex flex-row justify-center min-h-screen">
    <NavBar />

    <!-- Sección central: Perfil -->
    <div class="w-[1200px] flex flex-col">

        <div class="sticky top-0 z-10">
        <SearchBar />
            </div>

            <section class="text-white flex-1">

            <div class="relative">
        
                <div class="banner">
                <img :src="usuario.bannerUrl" alt="banner" class="w-full h-[300px] object-cover" />
                </div>
                

                <img :src="usuario.iconoUrl" alt="icono" class="icono absolute w-[100px] h-[100px] rounded-full border-4 border-[#15202b] bg-[#15202b] object-cover bottom-[-50px] left-5 shadow-lg"/>
            </div>

            <!-- Botón de editar perfil -->
            <div class="flex justify-end items-center p-4 mt-0">
                <ButtonTemplate 
                :texto="t.profile.editprofile"
                :accion="() => console.log('editar perfil')" 
                />
            </div>

            <!-- Información del perfil -->
            <div class="px-5 pb-2.5 -mt-2">
                <h2 class="nombre text-2xl font-bold m-0 text-[#e7e9ea]">
                {{ usuario.nombre }}
                </h2>
                <p class="nombre-usuario text-[#8b98a5] text-base my-0.5 mx-0">
                {{ usuario.usuarioNombre }}
                </p>
                <p class="seguidores text-[#8b98a5] text-sm mt-2">
                <span class="numero font-bold text-[#e7e9ea]">
                    {{ usuario.seguidores }}
                </span> 
                {{ t.profile.followers }} · 
                <span class="numero font-bold text-[#e7e9ea]">
                    {{ usuario.siguiendo }}
                </span> 
                {{ t.profile.following }}
                </p>
            </div>

            <!-- Pestañas -->
            <div class="pestanas flex justify-around border-t border-b border-[#2a4a5a] py-2.5 mt-2">
                <span class="cursor-pointer px-3 py-2 rounded transition-colors hover:bg-[#1e2936] text-[#8b98a5]">
                {{ t.profile.posts }}
                </span>
                <span class="cursor-pointer px-3 py-2 rounded transition-colors hover:bg-[#1e2936] text-[#8b98a5]">
                {{ t.profile.photos }}
                </span>
                <span class="cursor-pointer px-3 py-2 rounded transition-colors hover:bg-[#1e2936] text-[#8b98a5]">
                {{ t.profile.likes }}
                </span>
            </div>

            <!-- Contenido de publicaciones -->
            <div class="publicaciones px-5 py-2.5">
                <p class="text-[#8b98a5]">{{ t.profile.userContent }}</p>
            </div>
            </section>
        </div>
    </main>
</template>

<style scoped>
.pestanas span:hover {
  background-color: #1e2936;
}

.icono {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.pestanas span.activa {
  font-weight: bold;
  color: #1da1f2;
  border-bottom: 3px solid #1da1f2;
}
</style>