var express = require('express')
var app = express()
// body parser 가져오기
var bodyParser = require('body-parser')

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


//url routing
//root url
app.get('/', function (req,res) {
	console.log("test");
	res.sendFile(__dirname + "/public/main.html")
});
// /main url
app.get('/main', function (req,res) {
    res.sendFile(__dirname + "/public/main.html")
});
	// get : req.param('email')
	//
app.post('/email_post', function (req,res) {
	console.log(req.body.email);
	// res.send("<h1>welcome! "+ req.body.email+"</h1>" )
	res.render('email.ejs', {'email' : req.body.email})
	//ejs에서 email이라는 name을 찾아서 치환 응답함// object로 받음
});

//ejs는 express와 결합하는 template임

app.post('/ajax_send_email', function(req, res){
	console.log(req.body.email);
	//check validataion about input value.....
	// ==> select db or insert db
	// 이게 사이클임 AJAX까지 해서 노드에서 어찌 처리하는지
	var responseData = {'result':'ok', 'email' : req.body.email};
	res.json(responseData);
});