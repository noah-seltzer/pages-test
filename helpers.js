/**
 * Return a timestamp set to one
 * hour from when the function
 * is called.
 */
module.exports.inOneHour = function() {
  return new Date().getTime() + 60 * 60 * 1000
}

/**
 * Return a timestamp set to ten
 * minutes from when the function
 * is called.
 */
module.exports.inTenMinutes = function() {
  return new Date().getTime() + 1 * 60 * 1000
}

/**
 * Checks whether the application is deployed
 * to production.
 */
module.exports.isProd = function() {
  return process.env.STAGE === 'production' || process.env.STAGE === 'prod'
}

/**
 * Checks if application is running locally
 */
module.exports.isLocal = function() {
  return process.env.STAGE === 'dev' && process.env.NODE_ENV === 'development'
}

/**
 * Checks if application is running on dev (deployed)
 */
module.exports.isDev = function() {
  return process.env.STAGE === 'dev' && process.env.NODE_ENV === 'production'
}
