const path = require('path');
const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors')

require('dotenv').config({ path: path.join(__dirname, './config/config.env') });


connectDB();


// Route files
const users = require('./routes/user.route');
const auth = require('./routes/auth.route');
const scholarship = require('./routes/scholarship.route');
const scholar = require('./routes/scholar.route');

const app = express();


app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/users',users)
app.use('/api/v1/auth',auth)
app.use('/api/v1/scholarships',scholarship)
app.use('/api/v1/scholars',scholar)


app.use(errorHandler)


const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

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