import { Model } from 'mongoose'

export type IUSER = {
  id: string
  FirstName: string
  MiddleName: string
  lastName: string
  email: string
  password: string
  role: 'OnlyReader' | 'Seller and Reader' | 'Admin'
}

export type UserModel = Model<IUSER, Record<string, unknown>>
