import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm alanları doldurunuz.' },
        { status: 400 }
      );
    }

    // SMTP Config (Environment variables or default)
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"${name} (MRC Web Sitesi)" <${smtpUser}>`,
        replyTo: email,
        to: 'mrcyalitim@gmail.com',
        subject: `[MRC Web İletişim Formu] ${subject} - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
            <div style="background-color: #050B15; padding: 24px; text-align: center; border-bottom: 3px solid #D4AF37;">
              <h2 style="color: #D4AF37; margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 1px;">MRC Yalıtım ve Söve</h2>
              <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 13px;">Web Sitesi Yeni İletişim Mesajı</p>
            </div>
            
            <div style="padding: 28px; color: #1e293b;">
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b; width: 110px;">Ad Soyad:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">E-Posta:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Konu Başlığı:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${subject}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Tarih / Saat:</td>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px;">${new Date().toLocaleString('tr-TR')}</td>
                </tr>
              </table>

              <div style="background-color: #f8fafc; border-left: 4px solid #D4AF37; padding: 16px; border-radius: 4px; margin-top: 10px;">
                <h4 style="margin: 0 0 8px 0; color: #050B15; font-size: 14px;">Mesaj İçeriği:</h4>
                <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>

              <div style="margin-top: 30px; padding-top: 16px; border-top: 1px solid #e2e8f0; text-align: center;">
                <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display: inline-block; background-color: #050B15; color: #ffffff; text-decoration: none; padding: 10px 24px; border-radius: 8px; font-weight: bold; font-size: 14px;">Müşteriye Yanıt Ver</a>
              </div>
            </div>

            <div style="background-color: #f1f5f9; padding: 12px; text-align: center; font-size: 11px; color: #94a3b8;">
              Bu e-posta mrcyalitim.com üzerinden otomatik olarak oluşturulmuştur.
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.log('--- YENİ İLETİŞİM FORMU MESAJI ---');
      console.log('Ad Soyad:', name);
      console.log('E-Posta:', email);
      console.log('Konu:', subject);
      console.log('Mesaj:', message);
      console.log('Not: Canlıda otomatik mail iletimi için .env dosyasına SMTP_USER ve SMTP_PASS (Gmail Uygulama Şifresi) ekleyebilirsiniz.');
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Mesaj başarıyla alındı.' 
    });
  } catch (error: any) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      { error: 'Mesaj gönderilirken bir hata oluştu.' },
      { status: 500 }
    );
  }
}
