export async function POST(request: { json: () => any; }) {
  // Parse the request body
  const body = await request.json(); // Parse JSON from the request body
  const { provider, SAMLResponse, RelayState, } = body;

  // Example processing
  console.log(`Received provider: ${provider}, SAMLResponse: ${SAMLResponse} RelayState: ${RelayState}`);

  // Return a response
  return Response.redirect(`/auth/receiver?provider=${provider}&saml=${SAMLResponse}`, 303); 
}
