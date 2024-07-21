// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/facebook',
    createProxyMiddleware({
      target: 'https://www.facebook.com',
      changeOrigin: true,
      pathRewrite: {
        '^/facebook': '',
      },
    })
  );
};
