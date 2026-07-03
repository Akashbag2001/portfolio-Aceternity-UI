import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Email helpers ────────────────────────────────────────────────────────────

function notificationEmail(name: string, email: string, subject: string, message: string) {
  const initial = name.charAt(0).toUpperCase();
  const escapedMessage = message.replace(/\n/g, "<br/>");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>New message from portfolio</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f4f4f5;">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <!-- Container -->
        <table width="560" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;max-width:560px;">

          <!-- ── HEADER ── -->
          <tr>
            <td align="center" style="padding-bottom:24px;">
              <!-- Logo pill -->
              <table cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="background-color:#18181b;border-radius:999px;padding:10px 22px;">
                    <span style="font-size:22px;font-weight:900;letter-spacing:-0.5px;color:#22c55e;">Akash</span><span style="font-size:22px;font-weight:900;letter-spacing:-0.5px;color:#ffffff;">.dev</span>
                  </td>
                </tr>
              </table>
              <p style="margin:12px 0 0;font-size:13px;color:#71717a;letter-spacing:0.5px;text-transform:uppercase;">New message from your portfolio</p>
            </td>
          </tr>

          <!-- ── MAIN CARD ── -->
          <tr>
            <td style="background-color:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

              <!-- Green accent top bar -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="height:4px;background-color:#22c55e;width:50%;"></td>
                  <td style="height:4px;background-color:#06b6d4;width:50%;"></td>
                </tr>
              </table>

              <!-- Card body -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="padding:36px 36px 0;">

                    <!-- Sender row -->
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:28px;">
                      <tr>
                        <td width="52" valign="middle">
                          <div style="width:48px;height:48px;border-radius:50%;background-color:#18181b;text-align:center;line-height:48px;font-size:20px;font-weight:800;color:#22c55e;">${initial}</div>
                        </td>
                        <td style="padding-left:14px;" valign="middle">
                          <p style="margin:0;font-size:17px;font-weight:700;color:#18181b;">${name}</p>
                          <p style="margin:3px 0 0;font-size:13px;color:#22c55e;font-weight:500;">${email}</p>
                        </td>
                        <!-- Tag -->
                        <td align="right" valign="middle">
                          <span style="display:inline-block;background-color:#f0fdf4;border:1px solid #bbf7d0;border-radius:999px;padding:4px 12px;font-size:11px;font-weight:700;color:#16a34a;letter-spacing:0.5px;text-transform:uppercase;">New Lead</span>
                        </td>
                      </tr>
                    </table>

                    <!-- Divider -->
                    <hr style="border:none;border-top:1px solid #f0f0f0;margin:0 0 24px;"/>

                    <!-- Subject -->
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:20px;">
                      <tr>
                        <td>
                          <p style="margin:0 0 6px;font-size:10px;font-weight:700;color:#a1a1aa;text-transform:uppercase;letter-spacing:1.2px;">Subject</p>
                          <p style="margin:0;font-size:18px;font-weight:700;color:#18181b;">${subject}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Divider -->
                    <hr style="border:none;border-top:1px solid #f0f0f0;margin:0 0 24px;"/>

                    <!-- Message -->
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:32px;">
                      <tr>
                        <td>
                          <p style="margin:0 0 10px;font-size:10px;font-weight:700;color:#a1a1aa;text-transform:uppercase;letter-spacing:1.2px;">Message</p>
                          <div style="background-color:#fafafa;border-left:3px solid #22c55e;border-radius:0 8px 8px 0;padding:16px 18px;">
                            <p style="margin:0;font-size:15px;color:#3f3f46;line-height:1.75;">${escapedMessage}</p>
                          </div>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="padding:0 36px 36px;">
                    <table cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td style="background-color:#18181b;border-radius:10px;padding:13px 28px;">
                          <a href="mailto:${email}?subject=Re: ${subject}" style="font-size:14px;font-weight:700;color:#22c55e;text-decoration:none;">Reply to ${name} →</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Card footer -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="background-color:#fafafa;border-top:1px solid #f0f0f0;padding:16px 36px;border-radius:0 0 20px 20px;">
                    <p style="margin:0;font-size:12px;color:#a1a1aa;text-align:center;">
                      Hit <strong>Reply</strong> on this email to respond directly — it will go to <a href="mailto:${email}" style="color:#22c55e;text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── FOOTER ── -->
          <tr>
            <td align="center" style="padding-top:28px;">
              <p style="margin:0;font-size:12px;color:#a1a1aa;">Sent from your portfolio contact form</p>
              <p style="margin:6px 0 0;font-size:12px;color:#d4d4d8;">Powered by <a href="https://resend.com" style="color:#22c55e;text-decoration:none;">Resend</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

function autoReplyEmail(name: string, email: string, subject: string, message: string) {
  const escapedMessage = message.replace(/\n/g, "<br/>");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Got your message!</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f4f4f5;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="560" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;max-width:560px;">

          <!-- ── HEADER ── -->
          <tr>
            <td align="center" style="padding-bottom:24px;">
              <table cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="background-color:#18181b;border-radius:999px;padding:10px 22px;">
                    <span style="font-size:22px;font-weight:900;letter-spacing:-0.5px;color:#22c55e;">Akash</span><span style="font-size:22px;font-weight:900;letter-spacing:-0.5px;color:#ffffff;">.dev</span>
                  </td>
                </tr>
              </table>
              <p style="margin:12px 0 0;font-size:13px;color:#71717a;">Message received — I'll be in touch soon!</p>
            </td>
          </tr>

          <!-- ── MAIN CARD ── -->
          <tr>
            <td style="background-color:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

              <!-- Accent bar -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="height:4px;background-color:#22c55e;width:50%;"></td>
                  <td style="height:4px;background-color:#06b6d4;width:50%;"></td>
                </tr>
              </table>

              <!-- Hero section -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="background-color:#18181b;padding:36px 36px 32px;" align="center">
                    <p style="margin:0 0 8px;font-size:36px;">✅</p>
                    <h1 style="margin:0 0 8px;font-size:24px;font-weight:800;color:#ffffff;">Hey ${name}!</h1>
                    <p style="margin:0;font-size:15px;color:#a1a1aa;line-height:1.6;max-width:400px;">Your message has landed in my inbox. I'll get back to you within <strong style="color:#22c55e;">24 hours</strong>.</p>
                  </td>
                </tr>
              </table>

              <!-- Body -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="padding:32px 36px 0;">

                    <!-- What happens next -->
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:28px;">
                      <tr>
                        <td>
                          <p style="margin:0 0 16px;font-size:10px;font-weight:700;color:#a1a1aa;text-transform:uppercase;letter-spacing:1.2px;">What happens next</p>

                          <!-- Step 1 -->
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:12px;">
                            <tr>
                              <td width="32" valign="top">
                                <div style="width:28px;height:28px;background-color:#f0fdf4;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#16a34a;">1</div>
                              </td>
                              <td style="padding-left:12px;" valign="top">
                                <p style="margin:0;font-size:14px;font-weight:600;color:#18181b;">I review your message</p>
                                <p style="margin:2px 0 0;font-size:13px;color:#71717a;">I check messages daily and prioritise every enquiry.</p>
                              </td>
                            </tr>
                          </table>

                          <!-- Step 2 -->
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:12px;">
                            <tr>
                              <td width="32" valign="top">
                                <div style="width:28px;height:28px;background-color:#f0fdf4;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#16a34a;">2</div>
                              </td>
                              <td style="padding-left:12px;" valign="top">
                                <p style="margin:0;font-size:14px;font-weight:600;color:#18181b;">I reply within 24 hours</p>
                                <p style="margin:2px 0 0;font-size:13px;color:#71717a;">Expect a thoughtful, personal response — not a template.</p>
                              </td>
                            </tr>
                          </table>

                          <!-- Step 3 -->
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td width="32" valign="top">
                                <div style="width:28px;height:28px;background-color:#f0fdf4;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#16a34a;">3</div>
                              </td>
                              <td style="padding-left:12px;" valign="top">
                                <p style="margin:0;font-size:14px;font-weight:600;color:#18181b;">We kick things off</p>
                                <p style="margin:2px 0 0;font-size:13px;color:#71717a;">If it's a good fit, we'll schedule a quick call to align.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- Divider -->
                    <hr style="border:none;border-top:1px solid #f0f0f0;margin:0 0 24px;"/>

                    <!-- Your message recap -->
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:28px;">
                      <tr>
                        <td>
                          <p style="margin:0 0 10px;font-size:10px;font-weight:700;color:#a1a1aa;text-transform:uppercase;letter-spacing:1.2px;">Your message</p>
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td style="background-color:#fafafa;border:1px solid #f0f0f0;border-radius:10px;padding:16px 18px;">
                                <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#18181b;">Re: ${subject}</p>
                                <p style="margin:0;font-size:14px;color:#71717a;line-height:1.7;">${escapedMessage}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- Social links -->
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:32px;">
                      <tr>
                        <td>
                          <p style="margin:0 0 12px;font-size:10px;font-weight:700;color:#a1a1aa;text-transform:uppercase;letter-spacing:1.2px;">While you wait</p>
                          <table cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td style="padding-right:8px;">
                                <a href="https://github.com/Akashbag2001" style="display:inline-block;background-color:#18181b;border-radius:8px;padding:10px 18px;font-size:13px;font-weight:600;color:#ffffff;text-decoration:none;">GitHub →</a>
                              </td>
                              <td>
                                <a href="https://www.linkedin.com/in/akash-bag/" style="display:inline-block;background-color:#0a66c2;border-radius:8px;padding:10px 18px;font-size:13px;font-weight:600;color:#ffffff;text-decoration:none;">LinkedIn →</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

              <!-- Card footer -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="background-color:#fafafa;border-top:1px solid #f0f0f0;padding:18px 36px;border-radius:0 0 20px 20px;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td>
                          <p style="margin:0;font-size:13px;font-weight:600;color:#18181b;">Akash Bag</p>
                          <p style="margin:2px 0 0;font-size:12px;color:#71717a;">Software Engineer · bagakash11@gmail.com</p>
                        </td>
                        <td align="right">
                          <table cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td style="background-color:#18181b;border-radius:999px;padding:6px 14px;">
                                <span style="font-size:13px;font-weight:800;color:#22c55e;">Akash</span><span style="font-size:13px;font-weight:800;color:#ffffff;">.dev</span>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── PAGE FOOTER ── -->
          <tr>
            <td align="center" style="padding-top:28px;">
              <p style="margin:0;font-size:12px;color:#a1a1aa;">You're receiving this because you contacted Akash via his portfolio.</p>
              <p style="margin:6px 0 0;font-size:12px;color:#d4d4d8;">Powered by <a href="https://resend.com" style="color:#22c55e;text-decoration:none;">Resend</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    // Notification to Akash
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["bagakash11@gmail.com"],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: notificationEmail(name, email, subject, message),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
    }

    // Auto-reply to sender
    await resend.emails.send({
      from: "Akash Bag <onboarding@resend.dev>",
      to: [email],
      subject: `Got your message, ${name}! ✅`,
      html: autoReplyEmail(name, email, subject, message),
    });

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
  }
}
