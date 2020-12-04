const User = require('../models/user.model')
const bcrypt = require('bcryptjs')

// Create
exports.create = (req, res) => {
	const user = new User({
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 10),
		name: req.body.name,
		age: req.body.age,
		gender: req.body.gender,
		isActive: req.body.isActive,
		userType: req.body.userType,
	})

	user.save()
		.then((data) => {
			res.send({ message: 'User created successfully!', data })
		})
		.catch((err) => {
			res.status(500).send({ message: err.message })
		})
}

// Find all
exports.findAll = (req, res) => {
	User.find()
		.sort({ name: -1 })
		.then((users) => {
			res.status(200).send(users)
		})
		.catch((err) => {
			res.status(500).send({ message: err.message })
		})
}

// Find one
exports.findOne = (req, res) => {
	User.findById(req.params.id)
		.then((user) => {
			res.status(200).send(user)
		})
		.catch((err) => {
			res.status(500).send({ message: err.message })
		})
}

// Delete 
exports.delete = (req, res) => {
	User.findByIdAndRemove(req.params.id)
		.then((user) => {
			res.send({ message: 'User deleted successfully!', user })
		})
		.catch((err) => {
			res.status(500).send({ message: err.message })
		})
}

// Update
exports.updateUser = (req, res) => {
	User.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then((user) => {
			res.status(200).send(user)
		})
		.catch((err) => {
			res.status(404).send({ message: err.message })
		})
}