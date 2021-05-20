const loginRouter = require('./login');
const homeRouter = require('./home');
const newsRouter = require('./news');
const userRouter = require('./user');
const saveRouter = require('./saveform');
// const signupRouter = require('./signup');
function route(app) {

    app.use('/saveform', saveRouter);
    app.use('/becomeuser', userRouter);
    app.use('/login', loginRouter);
    app.use('/news', newsRouter);
    app.use('/', homeRouter);
    


}

module.exports = route;