const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

// Http Logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) =>  {
  res.render('home', {title: 'Home'});
});

app.get('/news', (req, res) =>  {
  res.render('news', {title: 'News'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})