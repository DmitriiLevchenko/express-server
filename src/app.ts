import express from 'express'
import { responseMiddleware } from './middleware'

import { init as ApiInit } from './router'


const app = express()
app.use(express.json())
app.get('/', (req: express.Request, res: express.Response) => {
  return res.json("server working...")
})

app.use('/api', ApiInit())


export default app