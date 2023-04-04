const express= require('express')
const app = express();

app.get('/home', (req,res) =>{
    const userId = req.query.id + req.query.name;
    res.send('User with id ' + userId + ' retrieved successfully');
});

app.listen(3000, () => console.log('Server running on port 3000'));