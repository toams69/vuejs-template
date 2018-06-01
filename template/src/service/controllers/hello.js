module.exports = function (app) {
  app.get('/api/hello', async function (req, res) {
    res.json({hello: 'world'})
  })
}