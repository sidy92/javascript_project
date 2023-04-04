exports.dbconnect =async function(param){
const mongoose = require('mongoose');
mongoose.set('bufferCommands', false);

 const contactSchema= new mongoose.Schema({
  name: String,
  age: Number,
},{
  capped: { size: 1024 },
  bufferCommands: false,
  autoCreate: false
})
 
 await mongoose.connect('mongodb://127.0.0.1:27017/mydb', { useNewUrlParser: true ,

 })
  .then(() =>  console.log('Connected to database!'))
  .catch(err => console.error('Connection error:', err));
  const User = mongoose.model("user", contactSchema);

const user = new User({ name: param.name, age: param.age });
user.save()
  .then(() => console.log('User record created in mongodb created!'))
 .catch(err => console.error('Error creating user:', err));
}

