const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const dbHandler = require('./config/db-handler');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const chatsRouter = require('./routes/chats');
const searchRouter = require('./routes/searchs');
const announcementsRouter = require('./routes/publicAnnouncement');
const jwt = require('jsonwebtoken');
const fileUpload = require('express-fileupload');

let app = express();

// Set up the database
dbHandler.connect();

// view engine setup
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

//Configuring the relative path static files: js, css
app.use(express.static(path.join(__dirname, '/')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

// Enable files upload
app.use(fileUpload({
    createParentPath: true,
    limits: {fileSize: 100 * 1024 * 1024}, //Limit file size to 100 MB
	safeFileNames: true, //Non-alphanumeric characters except dashes and underscores will be stripped
	preserveExtension: 4, //Keep files with extension not greater than 4 characters in length
	abortOnLimit: true,

}));

app.use(bodyParser.json());

//Solving Cors issues
app.use(cors({origin: '*'}));


app.use('/users', usersRouter);
app.use('/chats', chatsRouter);
app.use('/search', searchRouter);
app.use('/announcements', announcementsRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// Error handler
app.use(function (err, req, res) {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send('error');
});

function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], process.env.JWT_KEY, function (err, decoded) {
        if (err) {
            res.status(403).json({status: 'error', message: err.message, data: null});
        } else {
            // add user id to request
            req.body.userId = decoded.id;
            next();
        }
    });

}

console.log('App.js is running');

module.exports = app;
