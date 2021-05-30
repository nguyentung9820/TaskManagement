const loginRouter = require('./login');
const signupRouter = require('./signup');
const logoutRouter = require('./logout');
const userRouter = require('./user');
const siteRouter = require('./site');

const authMiddleware = require('../middlewares/middleware');

function route(app) {

    // Site: all url not have to login to render
    app.use('/', siteRouter);

    // Auth: Page signup and login
    app.use('/login', loginRouter);
    app.use('/signup', signupRouter);

    // user: After login
    app.use('/user',authMiddleware.requireAuth,userRouter);
    
    // user want to logout
    app.use('/logout', logoutRouter);
    


}

module.exports = route;