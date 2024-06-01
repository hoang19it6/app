// backend/controllers/homeController.js

const home = (req, res) => {
    res.render('index', { title: 'Home Page', message: 'Welcome to the Home Page' });
  };
  
  module.exports = { home };
  