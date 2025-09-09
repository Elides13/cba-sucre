
<script setup lang="ts">
import { RouterView } from 'vue-router'  
import './assets/js/main.js'
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template>
  <main>
    <MainHeader />
    <RouterView />
    <MainFooter />
  </main>
</template>

<style>
@import '@/assets/css/bootstrap.min.css';
@import '@/assets/css/style.css';
</style>
*