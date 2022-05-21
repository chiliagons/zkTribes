<script setup>
import { ref } from 'vue'

</script>

<template>
  <div>
    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1
          class="text-3xl text-center font-bold leading-tight text-gray-900"
        >
          zkTribes - TRIBES TOGETHER STRONG
        </h1>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
