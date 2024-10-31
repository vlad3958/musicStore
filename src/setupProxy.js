const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://musicshop-api-0d4beebd49be.herokuapp.com',
            changeOrigin: true,
            pathRewrite: { '^/api': '' },
        })
    );
};
