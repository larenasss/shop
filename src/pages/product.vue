<template>
  <div v-if="product">
    <h1 class="title">{{ product.title }}</h1>
    <carousel :settings="settingsCarousel">
      <slide v-for="item in product.gallery" :key="item">
        <img :src="item">
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

  export default {
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation
    },
    data() {
      return {
        product: null,
        settingsCarousel: {
          itemsToShow: 1,
        },
      }
    },
    created() {
      const id = this.$route.params.id;
      const item = this.$store.getters.getProductById(id);
      if (!item) {
        this.$router.push({name: '404', hash: `${this.$route.fullPath}`});
      }
      this.product = item;
    }
  }
</script>