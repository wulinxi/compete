const { defineConfig } = require('@vue/cli-service')
const express = require('express')

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    onBeforeSetupMiddleware({ app }) {
      app.use(express.urlencoded({ extended: false }));
      app.use(express.json());

      const mock = require('./mock');
      mock(app);
    },
    proxy: {
      '/api': {
        // 后端的地址
        target: 'localhost:10086',
      }
    }
  }
})
