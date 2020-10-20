const mongoose = require('mongoose')

// const mongoURI = ('mongodb://localhost/cookbooks_db')
const { MONGODBURI } = process.env;

mongoose.Promise = Promise

const config = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
};

mongoose.connect(MONGODBURI, config);

const db = mongoose.connection;

db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

module.exports = mongoose;
