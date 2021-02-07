<template>
  <Header />
  <Posts />
</template>

<script>
  import Header from './components/Header'
  import Posts from './components/Posts'

  export default {
    name: 'App',
    components: {
      Header,
      Posts
    }
  }
</script>

<style scoped>
  
</style>
