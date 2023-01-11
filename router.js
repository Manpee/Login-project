var express = require ("express");
var router = express.Router();
const credential = {
    email: "chinedu@gmail.com",
    password: "manpee111",
    email1: "obed@gmail.com",
    password1: "Diamond123"
}
// login user
router.post('/login',(req,res)=>{
if ((req.body.email==credential.email&&req.body.password==credential.password)||(req.body.email==credential.email1&&req.body.password==credential.password1)){
req.session.user = req.body.email;
//res.redirect('/dashboard');
res.end("Login Successful....!");
} else{
    res.end("Invalid Username")
}
});

module.exports = router;