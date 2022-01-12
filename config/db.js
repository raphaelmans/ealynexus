const mongoose = require('mongoose');

const connectDB = async () => {
  console.log('connecting...')
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB Connected`);
  }catch(e){
    console.log(e);
  }
  
};

module.exports = connectDB;
