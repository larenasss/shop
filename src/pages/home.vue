<template>
  <div>{{ shopList }}</div>
</template>

<script>
  export default {
    data() {
      return {
        shopList: null,
      }
    },
    created() {
      this.shopList = this.$store.getters.getShopList;
    }
  }
</script>