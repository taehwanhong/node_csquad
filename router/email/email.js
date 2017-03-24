/**
 * Created by davidhong on 22/03/2017.
 */
var express = require('express')
var app = express()
var router = express.Router(); //라우터 메소드 시행
var path = require('path')
var mysql = require('mysql')


//database setting
//DB연동은 여기 참고https://expressjs.com/en/guide/database-integration.html
var connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : '1234qwer',
    database : 'jsman'
});

connection.connect();
//이함수를 써야 커넥션관련된 객체를 받는데 이걸 써야 함.



//router !!
router.post('/form', function (req,res) {
    console.log(req.body.email);
    // res.send("<h1>welcome! "+ req.body.email+"</h1>" )
    res.render('email.ejs', {'email' : req.body.email})
    //ejs에서 email이라는 name을 찾아서 치환 응답함// object로 받음
});

//ejs는 express와 결합하는 template임

router.post('/ajax', function(req, res){
    // console.log(req.body.email);
    //check validataion about input value.....
    // ==> select db or insert db
    // 이게 사이클임 AJAX까지 해서 노드에서 어찌 처리하는지
    var email = req.body.email;
    var responseData = {};

    var query = connection.query('select name from user where email="'+ email +'"',function (err, rows) {
        if(err) throw err;
        if(rows[0]) {
            // console.log(rows[0].name);
            responseData.result = "ok";
            responseData.name = rows[0].name;
        }else{
            responseData.result = "none";
            responseData.name = "";
        }
        res.json(responseData)
    });
});

module.exports = router;