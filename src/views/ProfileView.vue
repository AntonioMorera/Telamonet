<script setup>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import ButtonTemplate from '../components/buttons/ButtonTemplate.vue';
import { useTranslations } from '../composables/useTranslations'

const { t } = useTranslations()

// Datos de ejemplo
const usuario = {
   nombre: 'Yugi Kiyugi',
   usuarioNombre: '@luikiyugi',
   seguidores: 120,
   siguiendo: 75,
   bannerUrl: 'https://www.retrones.net/sites/default/files/cabeceras/cabeceras_36.jpg',
   iconoUrl: 'https://www.pro-bems.com/IMAGES/images_1/FIGDC95442/m/FIGDC95442_1.jpg'
}
</script>

<template>
  <main class="flex flex-row justify-center min-h-screen">
    <NavBar />

    <!-- Sección central: Perfil -->
    <section class="border border-black w-[600px]">
      <!-- Banner y logo flotante -->
      <div class="relative">
        <!-- Banner -->
        <div class="banner">
          <img :src="usuario.bannerUrl" alt="banner" class="w-full h-[200px] object-cover" />
        </div>
        
        <!-- Icono flotante -->
        <img :src="usuario.iconoUrl" alt="icono" class="icono absolute w-[100px] h-[100px] rounded-full border-4 border-white bg-white object-cover bottom-[-50px] left-5"/>
      </div>

      <!-- Botón de editar perfil -->
      <div class="flex justify-end items-center p-2.5">
        <ButtonTemplate 
          :texto="t.profile?.editprofile"
          :accion="() => console.log('editar perfil')" 
        />
      </div>

      <!-- Información del perfil -->
      <div class="px-5 py-2.5 mt-[50px]">
        <h2 class="nombre text-2xl font-bold m-0">
          {{ usuario.nombre }}
        </h2>
        <p class="nombre-usuario text-gray-500 text-base my-0.5 mx-0">
          {{ usuario.usuarioNombre }}
        </p>
        <p class="seguidores text-gray-500 text-sm">
          <span class="numero font-bold text-black">
            {{ usuario.seguidores }}
          </span> 
          {{ t.profile?.followers }} · 
          <span class="numero font-bold text-black">
            {{ usuario.siguiendo }}
          </span> 
          {{ t.profile?.following }}
        </p>
      </div>

      <!-- Pestañas -->
      <div class="pestanas flex justify-around border-t border-b border-gray-300 py-2.5">
        <span class="cursor-pointer px-3 py-2 rounded transition-colors hover:bg-gray-100">
          {{ t.profile?.posts }}
        </span>
        <span class="cursor-pointer px-3 py-2 rounded transition-colors hover:bg-gray-100">
          {{ t.profile?.photos }}
        </span>
        <span class="cursor-pointer px-3 py-2 rounded transition-colors hover:bg-gray-100">
          {{ t.profile?.likes }}
        </span>
      </div>

      <!-- Contenido de publicaciones -->
      <div class="publicaciones px-5 py-2.5">
        <p>{{ t.profile?.userContent }}</p>
      </div>
    </section>

    <SideBar />
  </main>
</template>

<style scoped>

.pestanas span:hover {
  background-color: #f0f0f0;
}

.icono {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pestanas span.activa {
  font-weight: bold;
  color: #1da1f2;
  border-bottom: 3px solid #1da1f2;
}
</style>