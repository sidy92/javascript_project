const mongoose = require ("mongoose");

const studentSchema= new mongoose.Schema({
    name: String,
    age: Number,
    mail:String,
  },{
    capped: { size: 1024 },
})

module.exports = mongoose.model("Student",studentSchema);