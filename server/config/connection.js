const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
// MongoDB connection
mongoose.connect(`${process.env.Mongo_url}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log('MongoDB connected.....'))
    .catch(err => console.log(err));
  