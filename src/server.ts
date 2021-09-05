import 'reflect-metadata'

import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import './database'
import { router } from './routes'

const PORT = 3000
const app = express()

app.use(express.json())
app.use(router)
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    res.status(400).json({
      error: error.message,
    })
  } else {
    res.status(500).json({
      error: 'Internal Server Error',
    })
  }
})

app.listen(3000, () => {
  console.log(`Running on PORT ${PORT}`)
})
