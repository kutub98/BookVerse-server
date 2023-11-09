/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction } from 'express'
import { Server } from 'http'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import app from './App'
const port = 5000
dotenv.config({ path: path.join(process.cwd(), '.env') })

let server: Server

const DbConnecting = async () => {
  try {
    await mongoose.connect(process.env.DatabaseUrl as string)
    console.log('Database Connected Successfully')

    server = app.listen(port, () => {
      console.log(`Server is running on ${port}`)
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log('Something went wrong:', error.message)
  }
}

DbConnecting()

// Make sure the app.get() route is defined before the error handling middleware
