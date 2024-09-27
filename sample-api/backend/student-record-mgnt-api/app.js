const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("", (req, res, next) => {
    res.json("hello");
   });
app.get("/status", (req, res, next) => {
    const status = {
        "Status": "Running"
     };
     
     res.json(status);
   });

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});