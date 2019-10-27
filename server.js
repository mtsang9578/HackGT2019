const express = require('express')
const app = express();
const MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var router = express.Router();

const uri = "mongodb+srv://shahid:TechPassword10@cluster0-1q7ty.mongodb.net/test"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   var dbo = client.db("mydb");
   client.close();
});


var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    dbo.collection("users").findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

app.use('/api', router);

app.listen(process.env.PORT || 8080);


