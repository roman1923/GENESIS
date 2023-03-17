const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://api.wisey.app',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api/v1/preview-courses'
      },
    })
  );
  app.use(
    '/video',
    createProxyMiddleware({
      target: 'https://wisey.app',
      changeOrigin: true,
      pathRewrite: {
        '^/videos': '/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8'
      },
    })
  );
};