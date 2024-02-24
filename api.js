const dbConnect = require("./mongodb");
const mongodb = require('mongodb')
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data);
});

app.post("/", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  resp.send(result);
});

app.put("/",async (req, res)=>{
  let data = await dbConnect();
  let result = data.updateOne(
    {name:req.params.name},//parameter passed else{name:req.body.name}
    {$set:req.body}
    )
  res.send({result:"update"})
})

app.delete("/:id",async (req,res)=>{
  const data = await dbConnect();
  const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
  res.send(result)
})

app.listen(5000);
