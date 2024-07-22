const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true}));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try{
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {"Private-Key": "081b09f1-87bd-4918-91bd-f69a2f80f8d4"} }
        )
        return res.status(r.status).json(r.data)
    }catch(e){
        return res.status(e.response.status).json(e.response.data)
    }});

app.listen(3001);