import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Zod v4: .email() is deprecated on ZodString — use .pipe(z.email()) instead
const contactSchema = z.object({
  name: z.string().min(1).max(100).trim(),
  email: z.string().max(200).trim().pipe(z.email()),
  message: z.string().min(10).max(2000).trim(),
});

function isAllowedOrigin(request: NextRequest): boolean {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  // In dev, skip the check
  if (process.env.NODE_ENV !== "production") return true;

  // If NEXT_PUBLIC_APP_URL is not set, fall back to allowing same-origin
  if (!appUrl) return true;

  return (
    (origin !== null && origin === appUrl) ||
    (referer !== null && referer.startsWith(appUrl))
  );
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { name, email, message } = parsed.data;

    // TODO: wire up Resend + rate limiting (see .env.example)
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "portfolio@chatri.dev",
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `Portfolio contact from ${name}`,
    //   text: `From: ${name} <${email}>\n\n${message}`,
    // });

    void name;
    void email;
    void message;

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

// Explicit 405 for every other verb
const notAllowed = () =>
  NextResponse.json({ error: "Method not allowed" }, { status: 405 });

export const GET = notAllowed;
export const PUT = notAllowed;
export const DELETE = notAllowed;
export const PATCH = notAllowed;
export const HEAD = notAllowed;
export const OPTIONS = notAllowed;
