<template>
  <div class="item">
    <img :src="product.img" :alt="product.title">
    <p>{{ product.title }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      }
    }
  }
</script>