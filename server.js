// importing packages 
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

// firebase admin setup
let serviceAccount = require("./jece-dcad6-firebase-adminsdk-9xgu5-9e3d0da98a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

// declare static path
let staticPath = path.join(__dirname, 'public');

// initializing express,js

const app = express();

// middlewares
app.use(express.static(staticPath));
app.use(express.json());

// routes
// home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

// signup page
app.get("/signup", (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})

app.post("/signup", (req, res) => {
    let {
        name,
        email,
        password,
        number,
        tac
    } = req.body;

    // form validation
    if (name.length < 3) {
        return res.json({'alert': 'name must be 3 letters long'});
    } else if (!email.length) {
        return res.json({'alert': 'enter your email address'});
    } else if (password.length < 8) {
        return res.json({'alert': 'password must be at least 8 characters long'});
    } else if (!number.length) {
        return res.json({'alert': 'enter your phone number'});
    } else if (!Number(number) || number.length < 10) {
        return res.json({'alert': 'invalid phone number'});
    } else if (!tac) {
        return res.json({'alert': 'you must agree to our terms and conditions'});
    }

    // store user in db
    db.collection('user').doc(email).get()
    .then(user => {
        if(user.exists){
            return res.json({'alert': 'email already exists'});
        } else{
            // encrypt the password before storing it
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    req.body.password = hash;
                    db.collection('user').doc(email).set(req.body)
                    .then(data => {
                        res.json({
                            name: req.body.name,
                            email: req.body.email
                        })
                    })
                })
            })
        }
    })
})

// log in 
app.get('/login', (req, res) => {
    res.sendFile(path.join(staticPath, "login.html"));
})

app.post('/login', (req, res) => {
    let { email, password } = req.body

    if(!email.length || !password.length) {
        return res.json({ 'alert' : 'fill all the inputs'})
    }

    db.collection('users').doc(email).get()
    .then(user => {
        if(!user.exists) { // if email does not exist
            return res.json({ 'alert' : 'email does not exist' })
        } else{
            bcrypt.compare(password, user.data().password, (err, result) => {
                if(result) {
                    let data = user.data();
                    return res.json({
                        name: data.name,
                        email: data.email
                    })
                } else {
                    return res.json({ 'alert' : 'password is incorrect'})
                }
            })
        }
    })
})

app.listen(3000, () => {
    console.log('listening on port 3000......');
})
