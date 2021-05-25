const loginRouter = require('./login');
const homeRouter = require('./home');
const newsRouter = require('./news');
const saveRouter = require('./saveform');
const signupRouter = require('./signup');
const logoutRouter = require('./logout');
const userRouter = require('./user');
const aboutusRouter = require('./aboutus')
function route(app) {

    app.use('/aboutus', aboutusRouter);
    app.use('/user', userRouter);
    app.use('/logout', logoutRouter);
    app.use('/signup', signupRouter);
    app.use('/saveform', saveRouter);
    app.use('/login', loginRouter);
    app.use('/news', newsRouter);
    app.use('/', homeRouter);
    


}

module.exports = route;