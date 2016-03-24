## Glad Connect Session
A plugin for the Glad JS Framework to handle sessions using connect, redis.

The configuration uses the cookie object in your `config.js` file.

```
cookie : {
    resave : false,
    saveUninitialized : true,
    name : 'connect.sid',
    secret: 'my-super-secret-string-that-is-hopefully-longer-than-this-and-random',
    maxAge : 3600000 * 24
}
```

From here You should read the docs for connect-redis at [Connect Redis](https://github.com/tj/connect-redis) in order to undersatn
how to work with the session object that will be available on the request object.

