/**
 * Created by davidhong on 23/03/2017.
 */
// USER CREATE (DATA BASE .
var express = require('express')
var app = express()
var router = express.Router(); //라우터 메소드 시행
var path = require('path')
var mysql = require('mysql')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;


//database setting
//DB연동은 여기 참고https://expressjs.com/en/guide/database-integration.html
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234qwer',
    database: 'jsman'
});

connection.connect();
//이함수를 써야 커넥션관련된 객체를 받는데 이걸 써야 함.

//join으로 들어오면 index로 routing.여기서 public의 join.html실행
router.get('/', function(req, res) {
    // console.log("get join url");
    // res.sendFile(path.join(__dirname, "../../public/join.html"))
    var msg;
    var errMsg = req.flash('error');
    if (errMsg) msg = errMsg;
    res.render('login.ejs', { 'message': msg });
});

//serialize
passport.serializeUser(function(user, done) {
    console.log('passport save ', user.id);
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    console.log('passport session get_id', id);
    done(null, id);
})


//passport사용관련 설정. parameters 참고
passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    // userField : 'name',
    passwordField: 'password',
    passReqToCallback: true //콜백사용
}, function(req, email, password, done) {
    //
    //db값이 있나 봐야함
    var query = connection.query('select * from user where email=?', [email], function(err, rows) {
        if (err) return done(err);

        if (rows.length) {
            console.log('already exist user email');
            return done(null, false, { message: 'your email is already exist' })
        } else {
            var sql = { email: email, name: 'name', pw: password };
            var query = connection.query('insert into user set ?', sql, function(err, rows) {
                if (err) throw err;
                return done(null, { 'email': email, 'id': rows.insertId })
            })
        }
    })
}));

//passport에서 route 처리하는법
router.post('/', passport.authenticate('local-join', {
    successRedirect: '/main', //가입완료ㅋ
    failureRedirect: '/join', //사용자가 있다 등
    failureFlash: true
}));

//데이터post관련 작업.
/*--------------passport사용하면서 미사용-----------------
function signUp (req,res,next){
    var body = req.body;
    var email = body.email;
    var name = body.name;
    var password = body.password;

    console.log(email);//테스트
    var sql = {email : email, name : name, pw : password};
    var query = connection.query('insert into user set ? ', sql,
        function(err, rows){
            if (err) {throw err;}
            // console.log("ok db inserted : ", rows.insertId, name);
            req.name = name;
            // req.ido = rows.insertId;
            // console.log(rows.insertId);
            return next();
    });
}

function signCheck (req, res){
    // console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    res.render('welcome.ejs', {'name' : name, 'id' : email } );
    // res.redirect('/');
}


router.get('/', signCheck);
router.post('/', signUp, signCheck);

--------------------------*/

module.exports = router;