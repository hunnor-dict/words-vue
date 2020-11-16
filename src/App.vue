<template>
  <div class="container">
    <Navigation/>
    <h1 class="mb-4">Norvég igeragozás</h1>
    <router-view :words="words"></router-view>
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'

import words from './words/nb-verb.json'

export default {
  name: 'App',
  components: {
    Navigation
  },
  data() {
    return {
      words: words
    }
  }
}

</script>

<style>
</style>
