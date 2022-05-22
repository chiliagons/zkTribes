<script setup>
import { ref } from 'vue'

</script>

<template>
  <div :style="{
        'background-image': `url(${('/5312628.jpg')})`,
        'background-repeat': `no-repeat`,
        'background-position': `center center`,
        'width': `100%`,
        'height': `100%`,
      }">
      
    <header v-if="$route.meta.title">
        <div class="flex flex-row" >
        <div class="grow w-14 h-14"></div>
        <div class="grow h-14">
        <h1
          class="text-3xl font-bold leading-tight text-gray-900"
        >
          zkTribes - TRIBES TOGETHER STRONG
        </h1>
          
      </div>

      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
