const mongoose = require('../db')

const schema = new mongoose.Schema(
	{
		email: {
			desc: 'Email Address',
			trim: true,
			type: String,
			index: true,
			unique: true,
			required: true,
		},
		password: {
			desc: 'Password',
			trim: true,
			type: String,
			required: true,
			select: false,
		},
		name: {
			desc: 'Name',
			trim: true,
			type: String,
			required: true,
		},
		age: {
			desc: 'Age',
			type: Number,
		},
		gender: {
			desc: 'Gender',
			trim: true,
			type: String,
			enum: ['Male', 'Female', 'Others'],
			default: 'Others',
			required: true,
		},
		isActive: {
			desc: 'Active',
			type: Boolean,
			default: true,
			required: true,
		},
		userType: {
			desc: 'Roles',
			trim: true,
			type: String,
			enum: ['Admin', 'User'],
			default: 'Admin',
			required: true,
		},
	},
	{
		strict: true,
		versionKey: false,
		timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
	}
)

module.exports = mongoose.model('Users', schema)