const { magenta } = require('chalk')
const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, { 
	useNewUrlParser: true, 
	useUnifiedTopology: true, 
	useCreateIndex: true,
	useFindAndModify: false 
})
	.then((db) => console.log('Mongodb is connected to:', magenta.underline(db.connection.host)))
	.catch((err) => console.error(err))

module.exports = mongoose