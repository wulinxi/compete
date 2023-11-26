module.exports = [
  {
    url: '/api/login',
    method: 'post',
    handler(req, res) {
      res.json({
        code: 1,
      });
    }
  }
]
