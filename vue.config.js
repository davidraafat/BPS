module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/BPS/'  // Replace <REPO-NAME> with your GitHub repository name
    : '/',
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
