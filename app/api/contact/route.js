import { sendContactEmail } from "@/shared/contactMailer";

export async function POST(request) {
  const body = await request.json();
  const { statusCode, message } = await sendContactEmail(body);
  return Response.json({ message }, { status: statusCode });
}
