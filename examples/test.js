const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const entry = fs.readdirSync(__dirname).reduce((entries, dir) => {
  const fullDir = path.join(__dirname, dir)
  const entry = path.join(fullDir, 'app.ts')
  if (fs.existsSync(entry) && fs.lstatSync(fullDir).isDirectory()) {
    entries[dir] = ['webpack-hot-middleware/client', entry]
  }
  return entries
}, {})

console.log(entry)
