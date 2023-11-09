/* eslint-disable @typescript-eslint/no-unused-vars */
import cors from 'cors'
import express, { Application, Request, Response, NextFunction } from 'express'
import httpStatus from 'http-status'
import { userRoutes } from './App/Module/User/User.route'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1', userRoutes)
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!');
// });

// Error handling middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'Api Not Found',
      },
    ],
  })
})

export default app
