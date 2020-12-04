const { cyan } = require('chalk')
const app = require('./server')

app.listen(process.env.PORT, () => {
	console.log('App listening on port:', cyan.underline(process.env.PORT))
})