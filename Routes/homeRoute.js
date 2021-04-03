const router = require('express').Router()
const path =  require('path')

const handleHome = (req,res)=>{
    const options = {
        root: path.join(__dirname,'../'),
        dotfiles: 'deny'
    }
    res.sendFile('index.html'
    ,
    options
    ,()=>{console.log("file has been sent")})
}

router.get("/",handleHome)








module.exports = router