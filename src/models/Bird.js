import mongoose from 'mongoose';

export const Bird = mongoose.model('Bird ', { name: String });