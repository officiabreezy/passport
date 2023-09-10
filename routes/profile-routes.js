const router = require('express').Router();

const authCheck = (req, res, next) => {
 if(!req.user){
    res.redirect('/auth/login');
 } else{
    next();
 }
};

router.get('/',authCheck, (req, res) => {
  res.render('profile', { user: req.user});
 // res.status(200).send('you are logged in, this is your profile-' + req.user.username);

 // res.send('you are logged in, this is your profile-'+ req.user.username);
});

module.exports = router;