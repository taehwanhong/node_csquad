/**
 * Created by davidhong on 22/03/2017.
 */
var express = require('express')
var app = express()
var router = express.Router();//라우터 메소드 시행
var path = require('path')

//root url  routing
router.get('/', function (req,res) {
    console.log('main.js loading',req.user);
    var id = req.user;
    // res.sendFile(path.join(__dirname, "../public/main.html"))
    res.render('main.ejs',{'id':id});
});

module.exports = router;
//익스포트 해놓으면 다른데서 쓸수 있음ㅋ exports임!!