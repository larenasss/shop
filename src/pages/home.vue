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

<style lang="scss">
  .wrapper-content {
    justify-content: center;
  }

  .item-wrap {
    display: flex;
    flex-wrap: wrap;
    margin: -1rem;
    height: 100%;
  }

  .item {
    max-width: 50%;
    text-align: center;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & p {
      font-size: 1.5rem;
    }
  }
</style>