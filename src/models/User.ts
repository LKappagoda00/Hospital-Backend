// src/models/User.ts
import { Document, Schema, model, models } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Prevent OverwriteModelError by checking if model already exists
export default models.User || model<IUser>('User', UserSchema);