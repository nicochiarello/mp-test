import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("welcome to the api");
});
app.post("/test", (req,res)=>{
    res.status(200).json("Success");
})


const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log("app running")
})