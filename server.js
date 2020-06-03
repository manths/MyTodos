const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const userSchema = require('./model/model');

app.listen(3001)
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello')
})

app.post('/login/reg', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = new userSchema({
        username: username,
        password: password
    })

    try {
        const userData = await user.save();
        res.json(userData)
    } catch (e) {
        res.json({ message: e })
    }
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log(username, password)

    userSchema.findOne({username:username},(err,user)=>{ 
        if(!user) res.json({message:'auth failed.'})
        bcrypt.compare(password, user.password, (err, isMatch) => {
            console.log('third step', isMatch)
            if (isMatch == true) {
                res.send('success')
            } else {
                res.send('fail')
            }
        })
    })

    
})

mongoose.connect('mongodb://localhost/user', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection
    .on('error', (error) => console.log(error))
    .once('open', () => console.log('connected'))
