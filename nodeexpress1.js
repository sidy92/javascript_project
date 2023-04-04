const dbc= require('./nodemongoose2');



const { json } = require('express');
const express = require('express');
const cors = require('cors')
const app = express();



app.use(express.json());
app.use(cors());



app.get('/home', (req, res) => {
const studentId = req.query.id;
res.send('Student with id ' + studentId + ' retrieved successfully');
});



app.post('/addstudents', (req, res) => {
const studentData = req.body;
let x = dbc.dbconnect(req.body,"create",res);
res.send(x);
});



app.post('/updatestudents', (req, res) => {
const studentData = req.body;
dbc.dbconnect(req.body,"update",res);
res.send('Student Object sent successfully to node js' + req.body.name);
});



app.get('/getallstudents', (req, res) => {
let x = dbc.dbconnect("0","getall",res);
res.send(x);
});



app.listen(3005, () => console.log('Server running on port 3005'));