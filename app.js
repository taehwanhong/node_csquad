var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var router = require('./router/index.js')

var main = require('./router/main.js')
var email = require('./router/email.js')



app.listen(3000,function(){
	console.log("start on port 3000");
});


//public url을 static으로 지정
app.use(express.static('public'));
app.use(bodyParser.json());
//json으로 오는을 받고 처리함
app.use(bodyParser.urlencoded({extended:true}));
//클라이언트 서버는 아스키만 대화 가능.
app.set('view engine', 'ejs');
//view engine은 ejs야 라고 정리해주는

app.use(router);
app.use('/main', main);
app.use('/email', email);
//main으로 들어모면 main으로 감

