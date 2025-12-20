// PATH: app/api/intake/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Minimal validation
    const required = ["productLine", "firstName", "lastName", "email"];
    for (const key of required) {
      if (!body?.[key] || String(body[key]).trim() === "") {
        return NextResponse.json(
          { ok: false, error: `Missing required field: ${key}` },
          { status: 400 }
        );
      }
    }

    // v1: just log. (Next step: send email via Resend)
    console.log("NEW INTAKE:", JSON.stringify(body, null, 2));

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Unknown error" },
      { status: 500 }
    );
  }
}


