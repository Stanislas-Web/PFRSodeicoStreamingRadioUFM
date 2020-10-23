const express = require("express");
const PORT = (process.env.PORT || 5000);
const app = express();
app.listen(PORT,()=>{
    console.log(`le serveur tourne sur le port ${PORT}`);
})