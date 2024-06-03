const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const productRoute = require('./routes/productRoute');
const movieRoutes = require('./routes/movieRoute');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Set up EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views'));

// Serve static files from frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Connect to MongoDB
mongoose.connect('mongodb+srv://hoang:240499@cluster0.yqxsze7.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', userRoutes);
app.use('/product', productRoute);
app.use('/movie', movieRoutes);

// Home route
app.get('/', (req, res) => {
    res.render('blog-details');
});

// Route to handle adding new movie data
app.post('/add-movie', async (req, res) => {
  try {
    // Extract movie data from request body
    const { title, image, category, episodes, comments, views, description } = req.body;
    // Create new movie instance
    const newMovie = new Movie({
      title,
      image,
      category,
      episodes,
      comments,
      views,
      description
    });
    // Save movie to database
    const savedMovie = await newMovie.save();
    // Respond with the saved movie
    res.status(201).json(savedMovie);
  } catch (error) {
    // Handle error
    res.status(400).json({ message: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
