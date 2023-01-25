const redirect = async ({ request, next, env }) => {
    const url = new URL(request.url)
    url.hostname = 'api.logo.com'
    const outgoingUrl = url.toString()
    console.log(outgoingUrl)
    const outgoingRequest = new Request(outgoingUrl)
    return fetch(outgoingRequest)
  }
  
  export const onRequest = [redirect]
  