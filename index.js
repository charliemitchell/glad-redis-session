var glad = require('glad');
var config = require(process.cwd() + '/config');

module.exports = {

    name : "Glad Redis Session",

    minGladVersion : '0.6.0',

    hook : 'app',

    method : function (server, app, express, next) {

        app.set('trust proxy', 1); // trust first proxy
        var session = glad.session,
            RedisStore = glad.connectRedis(session),
            sessions =  session({
                secret: config.cookie.secret,
                resave: config.cookie.resave,
                store: new RedisStore(),
                saveUninitialized: config.cookie.saveUninitialized,
                cookie: { maxAge : config.cookie.maxAge }
            });
        app.use(sessions);
        next();
    }
};