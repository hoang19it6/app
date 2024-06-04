const Movie = require('../models/movieModel');

// Xử lý yêu cầu để lấy tất cả các bộ phim
// exports.getAllMovies = async (req, res) => {
//   try {
//     const movies = await Movie.find();
//     res.json(movies);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.render('index', { movies: movies });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xử lý yêu cầu để lấy thông tin của một bộ phim cụ thể
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xử lý yêu cầu để tạo một bộ phim mới
exports.createMovie = async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    image: req.body.image,
    category: req.body.category,
    episodes: req.body.episodes,
    comments: req.body.comments,
    views: req.body.views,
    description: req.body.description
  });

  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Xử lý yêu cầu để cập nhật thông tin của một bộ phim
exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    movie.title = req.body.title;
    movie.image = req.body.image;
    movie.category = req.body.category;
    movie.episodes = req.body.episodes;
    movie.comments = req.body.comments;
    movie.views = req.body.views;
    movie.description = req.body.description;
    const updatedMovie = await movie.save();
    res.json(updatedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Xử lý yêu cầu để xóa một bộ phim
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    await movie.remove();
    res.json({ message: 'Movie deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
