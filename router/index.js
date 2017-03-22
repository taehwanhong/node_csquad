/**
 * Created by davidhong on 22/03/2017.
 */
//importing needed items
var express = require('express')
var app = express()
var router = express.Router();//라우터 메소드 시행
var path = require('path')


//root routing
router.get('/', function (req,res) {
    res.sendFile(path.join(__dirname , "../public/main.html"))
});

module.exports = router;

//