const router = require('express').Router();
const passport = require('passport');


router.get('/login',(req, res) => {
 res.render('login', {user: req.user});
});

router.get('/logout',(req, res) => {
    //res.send('logging out');
    req.logout(function(err) {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    res.redirect('/');
  })
});

router.get('/google', passport.authenticate('google',{
    scope:['profile']
}
));

router.get('/google/redirect',passport.authenticate('google'),(req, res) => {
    //res.send('you have reached the callback URI');
    //res.send(req.user);
    res.redirect('/profile/');
});


module.exports = router; 