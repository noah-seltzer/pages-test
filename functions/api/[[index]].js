/**
 * Checks is STAGE env var is
 * in production
 */
const isProd = stage => stage === 'prod' || stage === 'production'

/**
 * Returns correct hostname based on stage
 * env var
 */
const getNewHostname = env => {
  if (isProd(env.STAGE)) {
    return 'api.logo.com'
  }
  return 'devapi.logo.com'
}

/**
 * Generate new request based on
 * incoming request and new url
 */
const generateNewRequest = (url, request) => {
  const outgoingUrl = url.toString()
  return new Request(outgoingUrl, request)
}

/**
 * Create new url based on env
 */
const generateNewUrl = (url, env) => {
  const newURL = new URL(url)

  newURL.hostname = getNewHostname(env)

  return newURL
}

/**
 * matches /api/* routes
 * creates new url by changing the hostname
 * routes to api or devapi depending on STAGE env var
 */

const redirect = async ({ request, env }) => {
  const url = generateNewUrl(request.url, env)

  const outgoingRequest = generateNewRequest(url, request)

  return fetch(outgoingRequest)
}

export const onRequest = [redirect]
