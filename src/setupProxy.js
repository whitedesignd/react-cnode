const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/cnode',
    createProxyMiddleware({
      target: 'https://cnodejs.org',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        "^/cnode": ""
      },
    })
  ),
  app.use(
    '/v1',
    createProxyMiddleware({
      target: 'https://cnodejs.org/api/v1',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        "^/v1": ""
      },
    })
  );
};
