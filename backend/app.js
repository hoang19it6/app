const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const productRoute = require('./routes/productRoute');
const movieRoutes = require('./routes/movieRoute');

const app = express();

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

app.get('/',movieRoutes);
// Home route
app.listen(3000, () => {
  console.log(`Server is running at http://localhost:${3000}`);
});
