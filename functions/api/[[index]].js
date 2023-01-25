import { isProd } from "../../helpers"

const redirect = async ({ request, next, env }) => {
    const url = new URL(request.url)
    if (isProd()) {
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
  