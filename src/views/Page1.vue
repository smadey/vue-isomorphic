<template>
  <div>
    <h1>Page 1 List</h1>
    <p v-for="d in list">{{d}}</p>
  </div>
</template>

<script>
  function getList(store) {
    return store.dispatch('FETCH_PAGE1_LIST')
  }

  export default {
    computed: {
      list () {
        return this.$store.state.page1List;
      }
    },
    preFetch: getList,
    beforeMount () {
      getList(this.$store)
    }
  }
</script>
