var express = require('express');
var cookieparser = require('cookie-parser');
var session = require('express-session');
var app = express();
app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening on localhost:3000')
});
app.use(cookieparser());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10000
  }
}));
app.get('/', function (req, res) {
    if(req.session.count == null){
        req.session.count = 1;
    }else{
        req.session.count += 1;
    }
        res.send(JSON.stringify(req.cookies["connect.sid"]) + "<br>" + JSON.stringify(req.sessionID) + "<br>" + JSON.stringify(req.session.count));

})