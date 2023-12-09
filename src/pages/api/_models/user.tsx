import { models, model, Schema } from 'mongoose';

const userSchema = new Schema({
  did: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  }
}, {
  timestamps: true
})

export const UserModel = models.UserModel || model('UserModel', userSchema, 'UserModel');