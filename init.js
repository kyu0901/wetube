import app from "./app";

const PORT = 4000;

const handleListening = () => 
    console.log('Listening on: http://localhost:${PORT}');

app.listen(PORT, handleListening);
//application에게 PORT번호를 listen하게 한다.
