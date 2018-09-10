const path = require('path')

const ABSOLUTE_BASE = path.normalize(__dirname)
const constants = {
  BUILD_DIR: path.join(ABSOLUTE_BASE, 'dist'),
  SRC_DIR: path.join(ABSOLUTE_BASE, 'src'),
  HOT_RELOAD_PORT: process.env.HOT_RELOAD_PORT || process.env.PORT || 3004
}

module.exports = constants
