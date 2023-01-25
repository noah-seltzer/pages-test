/**
 * matches /api/* routes
 * creates new url by changing the hostname
 * routes to api or devapi depending on STAGE env var
 */

const redirect = async ({ request, env }) => {
    const url = new URL(request.url)
    if (env.STAGE === 'prod' || env.STAGE === 'production') {
      url.hostname = 'api.logo.com'
    } else {
      url.hostname = 'devapi.logo.com'
    }
    const outgoingUrl = url.toString()
    const outgoingRequest = new Request(outgoingUrl, request)
    return fetch(outgoingRequest)
  }
  
  export const onRequest = [redirect]
  