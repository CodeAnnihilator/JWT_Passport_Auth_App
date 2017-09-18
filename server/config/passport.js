import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import passport from 'passport'
import { users } from '../routes/auth'
import config from '../config/main'

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  secretOrKey: config.secret
};

passport.use(new JwtStrategy(jwtOptions, (jwt_payload, done) => {
  const user = users.find(user => user.email === jwt_payload.email)
  if (!user) return done(null, false)
  return done(null, user)
}))
