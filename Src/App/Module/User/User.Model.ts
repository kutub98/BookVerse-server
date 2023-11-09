import { Schema, model } from 'mongoose'
import { IUSER, UserModel } from './User.interface'

const UserSchema = new Schema<IUSER>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    FirstName: {
      type: String,
      required: true,
    },
    MiddleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ['OnlyReader', 'Seller and Reader', 'Admin'],
    },
  },
  {
    timestamps: true,
  },
)

export const Users = model<IUSER, UserModel>('users', UserSchema)
