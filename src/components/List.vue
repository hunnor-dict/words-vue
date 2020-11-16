<template>
  <h2>Lista</h2>
  <table class="table">
    <thead>
      <tr>
        <td>Infinitiv</td>
        <td>Presens</td>
        <td>Preteritum</td>
        <td>Perfektum</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="word in words" :key="word.id">
        <td>{{ word[0].join(', ') }}</td>
        <td>{{ word[1].join(', ') }}</td>
        <td>{{ word[2].join(', ') }}</td>
        <td>{{ word[3].join(', ') }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'List',
  props: {
    words: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
