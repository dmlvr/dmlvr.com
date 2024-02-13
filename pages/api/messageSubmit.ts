import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_EMAIL_SMTP,
      port: process.env.NEXT_PUBLIC_EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_SENDER,
        pass: process.env.NEXT_PUBLIC_EMAIL_SENDER_PASSWORD,
      },
    });

    try {
      const info = await transporter.sendMail({
        from: process.env.NEXT_PUBLIC_EMAIL_SENDER,
        to: process.env.NEXT_PUBLIC_EMAIL_RECIPIENT,
        subject: 'Новая форма обратной связи',
        text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
      });

      console.log('Email отправлен: ', info.response);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Ошибка при отправке email: ', error);
      res.status(500).json({ success: false, error: 'Ошибка при отправке email' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Метод не разрешен' });
  }
}
