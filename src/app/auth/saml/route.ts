import { NextRequest } from "next/server";

export async function POST(request: Request | NextRequest) {
  // Parse the request body
  const formData = await request.formData();
  const provider = formData.get('provider'); 
  const SAMLResponse = formData.get('SAMLResponse');
  const RelayState = formData.get('RelayState');

  // Example processing
  console.log(`Received provider: ${provider}, SAMLResponse: ${SAMLResponse} RelayState: ${RelayState}`);

  // Return a response
  return Response.redirect(`/auth/receiver?provider=${provider}&saml=${SAMLResponse}`, 303); 
}
