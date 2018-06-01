const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')
let config = {}

try {
  const yamlContent = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, 'default.yml'), 'utf8'))
  config = JSON.stringify(yamlContent, null, 2)
} catch (e) {
  console.log(e)
}

module.exports = {
  mode: process.env.MODE || 'prod',
  host: process.env.HOST || config.hosts.host,
  port: process.env.PORT || config.ports.port
}
