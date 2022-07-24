import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		age: { type: Number, required: true },
		isFree: { type: Boolean },
	},
	{ timestamps: true },
);

export const UserModel = mongoose.model('User', UserSchema);
