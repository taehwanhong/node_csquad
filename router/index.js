/**
 * Created by davidhong on 22/03/2017.
 */
//importing needed items
var express = require('express')
var app = express()
var router = express.Router();//라우터 메소드 시행
var path = require('path')

var main = require('./main/main.js')
var email = require('./email/email.js')
var join = require('./join/index.js') // .../join으로 들어오면 join/index.js라우팅
//root routing
router.get('/', function (req,res) {
    res.sendFile(path.join(__dirname , "../public/main.html"))
});//상대경로라서 join써야함

router.use('/main', main);//다른모듈을 쓸때는 use쓰면 됌
router.use('/email', email);
router.use('/join', join);

module.exports = router;
