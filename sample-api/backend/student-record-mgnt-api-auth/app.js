const express = require('express');
const path = require('path')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.use(cors(
    {
        origin: "http://localhost:3000",
        methods: ["GET","POST", "OPTION"]
    }
))
app.use(express.static(path.join(__dirname, 'public')))

app.post('/api/auth', async(req, res) => {
    if(req.body.username == req.body.password) {
        res.status(200).json({message: "Successfull"})
    } else {
        res.status(401).json({error: "Unauthorized"})
    }
})


app.get("/api/status", (req, res, next) => {
    const status = {
        "Status": "Running"
     };
     
     res.json(status);
   });

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});