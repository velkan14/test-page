import { NextRequest } from "next/server";

export async function POST(request: Request | NextRequest) {
  const formData = await request.formData();
  const provider = formData.get('provider'); 
  const SAMLResponse = formData.get('SAMLResponse');
  const RelayState = formData.get('RelayState');

  console.log(`Received provider: ${provider}, SAMLResponse: ${SAMLResponse} RelayState: ${RelayState}`);

  const params = new URLSearchParams()
  params.set('provider', provider?.toString() || 'notset')
  params.set('SAMLResponse', SAMLResponse?.toString() || 'notset')
  
  return Response.redirect(`/auth/receiver?${params.toString()}`, 303); 
}
