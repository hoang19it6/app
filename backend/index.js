const express = require('express');
const path = require('path');


const app = express();
const port = 3000;

// Cấu hình Express để sử dụng EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views'));

// Cấu hình Express để phục vụ các tệp tĩnh từ thư mục frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Định nghĩa route cho trang chủ
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/anime-details', (req, res) => {
    res.render('index');
});

app.get('/anime-watching', (req, res) => {
    res.render('anime-watching');
});

app.get('/blog-details', (req, res) => {
    res.render('blog-details');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/categories', (req, res) => {
    res.render('categories');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});


// Bắt đầu server
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
