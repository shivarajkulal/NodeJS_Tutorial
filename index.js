const express = require("express");
const path = require("path");
const app = express();

/*
//tutorial #18 express
//******************* 
app.get("", (req, resp) => {
 // console.log(req.query.name);
  resp.send("Welcome," + req.query.name);
});

app.get("/about", (req, resp) => {
  resp.send("Welcome, This is a About Page");
});

app.get("/help", (req, resp) => {
  resp.send("Welcome, This is a Help Page");
});

app.listen(5000);
*/

/*
tutorial 21
************
const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

app.use(express.static(publicPath));

app.listen(5000);
*/

/*
tutorial 22: Remove extension from URL

const publicPath = path.join(__dirname,'public');
app.get('/',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/help", (req, res) => {
  res.sendFile(`${publicPath}/help.html`);
});

app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/error.html`);
});

app.listen(5000);
*/

/*
tutorial 23: template engine
************

 
app.set("view engine", "ejs");
app.get("/profile", (req, res) => {
  const user ={
     name:'shivaraj',
     email:'shivaraj@gmail.com',
     skills:{
      programming: ['java','javascript','python']
     }

  };
  res.render("profile",{user});

});

app.get("", (req, res) => {
  res.render("index");
});


app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(5000,()=>{
 console.log("listening to port 5000");
})
*/

/*
tutorial 25: expressJS Middleware
**********************************
const express = require('express');
const app = express();
const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please provide your age")
    }
    else if (req.query.age<18) {
        resp.send("You are under aged")
    }
    else {
        next();
    }
}

app.use(reqFilter);

app.get('/', (res, resp) => {
    resp.send('Welcome to Home page')
});

app.get('/users', (res, resp) => {
    resp.send('Welcome to Users page')
});
app.listen(5000)
*/
/*
tutorial 26:Middlewre level
****************************
const express = require('express');
const reqFilter= require('./middleware');
const app = express();
const route= express.Router();


// app.use(reqFilter);
route.use(reqFilter)
app.get('/', (res, resp) => {
    resp.send('Welcome to Home page')
});

app.get('/users', (res, resp) => {
    resp.send('Welcome to Users page')
});

route.get('/about', (res, resp) => {
    resp.send('Welcome to About page')
});
route.get('/contact', (res, resp) => {
    resp.send('Welcome to contact page')
});

app.use('/',route);

app.listen(5000)
*/