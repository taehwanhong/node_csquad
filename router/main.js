/**
 * Created by davidhong on 22/03/2017.
 */
var express = require('express')
var app = express()
var router = express.Router();
//라우터 메소드 시행
var path = require('path')

router.get('/', function (req,res) {
    console.log('main.js loading')
    res.sendFile(path.join(__dirname,"../public/main.html"))
});

module.exports = router;
//익스포트 해놓으면 다른데서 쓸수 있음ㅋ exports임!!