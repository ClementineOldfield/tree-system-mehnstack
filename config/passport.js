const passport = require("passport");
const LocalStrategy = require("passport-local");
const UserModel = require("./../database/models/user_model");

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser( async (id, done) => {
  try {
    const user = await UserModel.findById(id);
    return done(null, user);
  } catch(err) {
    return done(err);
  }
});

passport.use(new LocalStrategy({ 
    usernameField: "email" 
  }, 
  async (email, password, done) => {
    const user = await UserModel.findOne({ email });
    if(user && user.verifyPasswordSync(password)) {
      return done(null, user);
    }
    return done(null, false);
  }
));

module.exports = passport;