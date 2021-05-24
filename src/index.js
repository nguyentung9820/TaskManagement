//require
const path = require('path');
const express = require('express');
const app = express();
const port = 9820;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes/index');
const db = require('./config/db');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
//connect db
db.connect();
//override
app.use(methodOverride('_method'))
//cookie
app.use(cookieParser());
//img
app.use(express.static(path.join(__dirname,'public')));

// HTTP logger
app.use(morgan('combined'));

app.use(express.urlencoded());
// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine','hbs');

//config path
app.set('views', path.join(__dirname, 'resources','views'));
// console.log('PATH', path.join(__dirname, 'views'));

route(app);
app.listen(port, () => console.log(`Connect http://localhost:${port}`));