<template>
  <div class="item-wrap">
    <ShopItem v-for="product in shopList" :key="product.id" :product="product" />
  </div>
</template>

<script>
  import ShopItem from '@/components/ShopItem.vue';

  export default {
    components: {
      ShopItem
    },
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

<style lang="scss" scoped>
  .item-wrap {
    display: flex;
    flex-wrap: wrap;
  }

  .item {
    max-width: 48%;
    text-align: center;

    & p {
      font-size: 1.5rem;
    }
  }
</style>