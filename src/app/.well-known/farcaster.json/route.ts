import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOiA4ODcyNDYsICJ0eXBlIjogImN1c3RvZHkiLCAia2V5IjogIjB4N0Q0MDBGRDFGNTkyYkI0RkNkNmEzNjNCZkQyMDBBNDNEMTY3MDRlNyJ9",
      payload: "eyJkb21haW4iOiAiaG9yc2VmYWN0c2V0aC1ob3JuYmxhc3RmcmFtZS52ZXJjZWwuYXBwIn0",
      signature: "MHhiZmQwMTlmNjgxZmUwNzVkZWIyNzEzYzg0YzBkMzYyYzIyMWZlOWJhNTAyOTU5Y2YyZjAxZjkyNzE3YjNhOTAxMzAxMTMwYTdhNjVlN2RjMGY1ZGU2Y2E5NTExNDE2OTljZDM5MmNiOGYwNWNkNTQ3MWEyNTczMDJlZTljOTk0MzFi"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
