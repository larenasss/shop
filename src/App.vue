<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
          <router-view :key="$route.fullPath"/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/UI/Header.vue';
  import Footer from '@/components/UI/Footer.vue';

  export default {
    components: {
      Header,
      Footer
    }
  };
</script>

<style>
</style>
