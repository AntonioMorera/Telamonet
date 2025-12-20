<script setup>
import ButtonTemplate from '../components/buttons/ButtonTemplate.vue';
import { useTranslations } from '../composables/useTranslations'

const { t } = useTranslations()

// Datos de ejemplo para sugerencias
const sugerencias = [
  { 
    id: 1, 
    nombre: 'Lelouch Lamperouge', 
    usuario: '@nosoyzero', 
    avatar: 'https://i.pinimg.com/1200x/09/49/3c/09493cbb6b43cfd826df35f9a62a27d0.jpg' 
  },
  { 
    id: 2, 
    nombre: 'Ayanokoji', 
    usuario: '@Ayanokoji', 
    avatar: 'https://i.pinimg.com/1200x/60/01/8c/60018ce13a38e6715f7ae873837bb05b.jpg' 
  },
    { 
    id: 3, 
    nombre: 'Mikaela', 
    usuario: '@Mamaluigi',
    avatar: 'https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png'
  }
]

// Datos de ejemplo para tendencias
const tendencias = [
  { hashtag: '¿Luigi es homo?'                         , tweets: '252K Tweets' },
  { hashtag: '¿Se tiene que venir llorado de casa?'    , tweets: '142K Tweets' },
  { hashtag: '¿Como se imprime un certificado digital?', tweets: '52K Tweets' },
  { hashtag: 'CodeGeass'                               , tweets: '22K Tweets' },
  { hashtag: 'Zero, ¿Heroe o villano?'                 , tweets: '12K Tweets' },
  { hashtag: 'Forager'                                 , tweets: '8K Tweets' }
]
</script>

<template>
  <aside class="w-80 h-screen sticky top-0 overflow-y-auto border-l border-gray-200 bg-gray-50 p-5 font-sans">
    
    <!-- Sugerencias de cuentas -->
    <div class="mb-5">
      <h3 class="font-extrabold text-lg text-black mb-4">
        {{ t.sidebar.accountSuggestions }}
      </h3>
      
      <div 
        v-for="sugerencia in sugerencias" 
        :key="sugerencia.id" 
        class="flex items-center py-2 px-2 mr-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <!-- Avatar -->
        <div class="mr-3">
          <img 
            :src="sugerencia.avatar" 
            :alt="sugerencia.nombre" 
            class="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
          >
        </div>
        
        <!-- Información -->
        <div class="flex-1 flex flex-col min-w-0">
          <span class="font-bold text-sm truncate">
            {{ sugerencia.nombre }}
          </span>
          <span class="text-xs text-gray-500 truncate">
            {{ sugerencia.usuario }}
          </span>
        </div>

        
        
        <!-- Botón Seguir -->
        <ButtonTemplate :texto="t.sidebar.follow"></ButtonTemplate>
      </div>
    </div>

    <!-- Separador -->
    <hr class="border-none h-px bg-gray-200 my-5">

    <!-- Tendencias -->
    <div class="mb-5">
      <h3 class="font-extrabold text-lg text-black mb-4">
        {{ t.sidebar.trending }}
      </h3>
      
      <div 
        v-for="(tendencia, index) in tendencias" 
        :key="index" 
        class="py-2 px-2 mr-2 border-b border-gray-200 last:border-none rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
      >
        <span class="block font-bold text-sm text-black mb-0.5">
          {{ tendencia.hashtag }}
        </span>
        <span class="text-xs text-gray-500">
          {{ tendencia.tweets }}
        </span>
      </div>
      
      <a href="#" class="block mt-2.5 text-blue-400 text-sm px-2 hover:underline">
        Ver más
      </a>
    </div>

    <!-- Separador -->
    <hr class="border-none h-px bg-gray-200 my-5">

    <!-- Videos -->
    <div class="mb-5">
      <!-- Videos que te gustaron -->
      <div class="flex items-center py-3 px-2.5 mr-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
        <!-- Icono a la izquierda -->
        <div class="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-heart">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/>
          </svg>
        </div>
        <span class="text-sm text-black font-medium">
          {{ t.sidebar.likedVideos }}
        </span>
      </div>
      
      <!-- Videos guardados -->
      <div class="flex items-center py-3 px-2.5 mr-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
        <!-- Icono a la izquierda -->
        <div class="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"/>
            <circle cx="12" cy="14" r="2"/>
            <path d="M14 4v4h-8v-4"/>
          </svg>
        </div>
        <span class="text-sm text-black font-medium">
          {{ t.sidebar.savedVideos }}
        </span>
      </div>
    </div>
  </aside>
</template>

<style scoped>
/* Scrollbar personalizado para Tailwind */
.aside::-webkit-scrollbar {
  width: 6px;
}

.aside::-webkit-scrollbar-track {
  background: transparent;
}

.aside::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}

.aside::-webkit-scrollbar-thumb:hover {
  background: #999;
}
</style>