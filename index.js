//định nghĩa express (function)
const express = require('express');

//tạo ra 1 app
const app = express();
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) =>{
    //res trả về yêu cầu
    //req lấy yêu cầu từ client
    res.render('index')
})

//tạo ra cổng
app.listen(3000, () =>{
    console.log('server connected');
})