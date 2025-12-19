<script setup>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import ButtonFollow from '../components/buttons/ButtonFollow.vue';
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
  <main>
    <NavBar />

    <!-- Sección central: Perfil -->
    <section>
      <!-- Banner y logo flotante -->
      <div class="contenedor-banner">
        <div class="banner">
          <img :src="usuario.bannerUrl" alt="banner" />
        </div>
        <img class="icono" :src="usuario.iconoUrl" alt="icono" />
      </div>

      <!-- Botón de editar perfil -->
      <div class="encabezado-perfil">
        <div></div> <!-- Espacio vacío para separación -->
        <ButtonFollow 
          texto="Editar perfil" 
          :accion="() => console.log('editar perfil')" 
        />
      </div>

      <!-- Información del perfil -->
      <div class="informacion-perfil">
        <h2 class="nombre">{{ usuario.nombre }}</h2>
        <p class="nombre-usuario">{{ usuario.usuarioNombre }}</p>
        <p class="seguidores">
          <span class="numero">{{ usuario.seguidores }}</span> {{ t.profile.followers }} · 
          <span class="numero">{{ usuario.siguiendo }}</span> {{ t.profile.following }}
        </p>
      </div>

      <!-- Pestañas -->
      <div class="pestanas">
        <span>{{ t.profile.posts }}</span>
        <span>{{ t.profile.photos }}</span>
        <span>{{ t.profile.likes }}</span>
      </div>

      <!-- Contenido de publicaciones -->
      <div class="publicaciones">
        <p>{{ t.profile.userContent }}</p>
      </div>
    </section>

    <SideBar />
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

section:first-child,
section:last-child {
  width: 300px;
}

/* Banner y logo flotante */
.contenedor-banner {
  position: relative;
}

.banner img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.icono {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid white;
  position: absolute;
  bottom: -50px;
  left: 20px;
  background-color: white;
  object-fit: cover;
}

/* Botón editar perfil */
.encabezado-perfil {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
}

/* Información del perfil */
.informacion-perfil {
  padding: 10px 20px;
  margin-top: 50px;
}

.nombre {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.nombre-usuario {
  color: gray;
  font-size: 16px;
  margin: 2px 0 10px 0;
}

.seguidores {
  font-size: 14px;
  color: gray;
}

.seguidores .numero {
  font-weight: bold;
  color: black;
}

/* Pestañas */
.pestanas {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.pestanas span {
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.pestanas span:hover {
  background-color: #f0f0f0;
}

/* Publicaciones */
.publicaciones {
  padding: 10px 20px;
}
</style>