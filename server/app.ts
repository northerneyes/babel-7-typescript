import express from 'express'
import Root from './root'
import WebpackServer from '../webpack/server'
import path from 'path'
// Create Express server
const app = express()

app.use('/static', express.static(path.join(__dirname, '../dist')))

// Express configuration
app.set('port', process.env.PORT || 3004)
if (process.env.NODE_ENV === 'development') {
  app.use(WebpackServer)
}

app.use(Root)

export default app
