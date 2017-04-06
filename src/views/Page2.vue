<template>
  <div>
    <h1>Page 2 List</h1>
    <p v-for="d in list">{{d}}</p>
  </div>
</template>

<script>
  function getList(store) {
    return store.dispatch('FETCH_PAGE2_LIST')
  }

  export default {
    computed: {
      list () {
        return this.$store.state.page2List;
      }
    },
    preFetch: getList,
    beforeMount () {
      getList(this.$store)
    }
  }
</script>
