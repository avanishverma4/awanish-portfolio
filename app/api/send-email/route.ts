import { EmailTemplate } from "@/app/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["avanishverma4@gmail.com"],
      subject: `Portfolio Contact: ${name}`,
      react: EmailTemplate({ firstName: name, email, message }) as any,
    });
    console.log("data", data);
    console.log("email", email);
    console.log("message", message);
    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
