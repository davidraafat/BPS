module.exports = {
  publicPath: './', // Use relative paths for static deployment
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
