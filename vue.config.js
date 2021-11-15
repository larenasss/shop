module.exports = {
  productionSourceMap: false,
  assetsDir: 'assets',
  publicPath: '/shop/dist/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Shop',
    },
  },
};
