//Loading Contents.
var express = require('express');
var app = express();
var router = express.Router(); //라우터 메소드 시행
var path = require('path'); //경로 조정하기 위한 메소드

var main = require('./main/main.js');
var email = require('./email/email.js');
var join = require('./join/index.js'); // .../join으로 들어오면 join/index.js라우팅

//root routing
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
}); //상대경로라서 join써야함

//route
router.use('/main', main); //다른모듈을 쓸때는 use쓰면 됌
router.use('/email', email);
router.use('/join', join);
router.use('/login', login);//login 연결

module.exports = router;