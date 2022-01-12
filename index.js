const path = require('path');
const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');


require('dotenv').config({ path: path.join(__dirname, './config/config.env') });


connectDB();


// Route files
const users = require('./routes/user.route');
const auth = require('./routes/auth.route');

const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/users',users)
app.use('/api/v1/auth',auth)


app.use(errorHandler)


const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green
    )
);

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    // server.close(() => process.exit(1));
});