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

 */
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

app.set("view engine", "ejs");
app.get("", (req, res) => {
  res.render("index");
});

app.listen(5000,()=>{
 console.log("listening to port 5000");
})
