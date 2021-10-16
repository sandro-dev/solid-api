import { Schema, model, Document } from 'mongoose'
import { User } from '../../../../../entities/User'

const MongooseUser = new Schema(
  {
    name: {
      type: String,
      required: true
    },    
    email: {
      type: String,
      required: true,
      index: true
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export const UserSchema = model<User>('User', MongooseUser)
