<template>
  <div>{{ message }}</div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed: {
      message() {
        return this.$store.getters.getMessage
      }
    }
  }
</script>