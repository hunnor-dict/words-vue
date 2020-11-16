<template>
    <nav class="bg-light mb-4 navbar navbar-expand-md navbar-light">
      <a class="navbar-brand" href="#">HunNor</a>
      <button aria-controls="navbar-content" aria-expanded="false" aria-label="" class="navbar-toggler" data-target="#navbar-content" data-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"> </span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-content">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/" active-class="active">Gyakorlás</router-link>
          <router-link class="nav-link" to="/list" active-class="active">Lista</router-link>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style scoped>

</style>
