<template>
  <div class="alert alert-primary mb-4" role="alert">{{correct}} / {{total}}</div>
</template>

<script>

export default {
  name: 'Score',
  props: {
    total: Number,
    correct: Number
  }
}

</script>

<style scoped>
</style>
