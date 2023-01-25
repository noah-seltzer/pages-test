import { isProd } from "../../helpers"

const redirect = async ({ request, next, env }) => {
    const url = new URL(request.url)
    console.log(env.STAGE)
    if (env.STAGE === 'prod' || env.STAGE === 'production') {
        url.hostname = 'api.logo.com'
    } else {
        url.hostname = 'devapi.logo.com'
    }
    const outgoingUrl = url.toString()
    console.log(outgoingUrl)
    const outgoingRequest = new Request(outgoingUrl)
    return fetch(outgoingRequest)
  }
  
  export const onRequest = [redirect]
  