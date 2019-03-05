const express = require('express')
//어플리케이션 만들기. express application
const app = express()

const PORT = 4000;

//listening이 시작될 때 호출됨.
function handleListening(){
    console.log('Listening on: http://localhost:${PORT}');
}

//application에게 PORT번호를 listen하게 한다.
app.listen(PORT, handleListening);