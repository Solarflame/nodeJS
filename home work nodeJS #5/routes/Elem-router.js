const express = require(`express`);
const router = express.Router();
const fs = require('fs/promises');

router.get(`/el`, async (req,res)=>{
    console.log(`parsing`)
    let data = await fs.readFile(`./db/elements.json`)
    res.send(data)
})

module.exports = router;