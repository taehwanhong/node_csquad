//Loading Contents.
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./router/index.js'); //라우터 index실행

//passport 구성
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//express session 구성
var session = require('express-session');
var flash = require('connect-flash');

//server start
app.listen(3000, function() {
    console.log("start on port 3000");
});

//Middle-ware
app.use(express.static('public')); //public url을 static으로 지정
app.use(bodyParser.json()); //json으로 오는을 받고 처리함
app.use(bodyParser.urlencoded({ extended: true })); //클라이언트 서버는 아스키만 대화 가능.
app.set('view engine', 'ejs'); //view engine은 ejs야 라고 정리해주는
//Session start
app.use(session({
    secret: 'keyboard cat', //세션을 암호화 하기위한 키캆
    resave: false, // default 필수값
    saveUninitialized: true, //default 필수값
    // cookie: { secure: true } // 미사용
}));
//passport session구성 passportjs.org middleware검색 참고

app.use(passport.initialize());
app.use(passport.session());
//express connect flash
app.use(flash());


//라우터에서도 설정이 필요하니깐 미들웨어에서 먼저 설정함
app.use(router); //router 실행