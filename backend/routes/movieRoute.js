const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Định nghĩa các route cho các yêu cầu liên quan đến bộ phim

// Lấy tất cả các bộ phim
router.get('/', movieController.getAllMovies);

// Lấy thông tin của một bộ phim cụ thể
router.get('/movies/:id', movieController.getMovieById);

// Tạo một bộ phim mới
router.post('/movies', movieController.createMovie);

// Cập nhật thông tin của một bộ phim
router.put('/movies/:id', movieController.updateMovie);

// Xóa một bộ phim
router.delete('/movies/:id', movieController.deleteMovie);

module.exports = router;
