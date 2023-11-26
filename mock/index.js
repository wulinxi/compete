const user = require('./user');

const modules = [...user];

module.exports = (app) => {
  modules.forEach(({ url, method, handler }) => {
    app[method](url, (req, res) => {
      console.log(`收到了 ${method} 请求
路径为 ${url}
数据为 ${JSON.stringify({ query: req.query, body: req.body })}
`);
      handler(req, res);
    })
  });
}
