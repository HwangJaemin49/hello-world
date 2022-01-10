var express = require('express'); //node.js에서 기본적으로 주어지는 함수. modules 폴더 안에 설치된 모듈을 불러오는 함수임.
//express 모듈을 express 변수에 담고, express()로 app object를 초기화 하는 것이 Express framework에서 항상 가장 처음하는 것.
//지금 실습은 express framework 사용하고 있는거임 생활 코딩에서 하는 실습이랑은 조금 다름~~~~
var app = express();

app.get('/', function(req, res) { //'/'위치에 'get'요청을 받는 경우에 'Hello World!'를 보냄.
//app.get부분은 서버에 get 요청이 있는 경우에 실행됨.
  res.send('Hello world!');
});

var port = 3000;
app.listen(port, function() { //app.listen은 서버가 실행되는 경우에 실행됨.
  console.log('server on! http://localhost:'+port);
});
