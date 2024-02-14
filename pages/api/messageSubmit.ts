import type { NextApiRequest, NextApiResponse } from 'next'
import { ZodError } from "zod";
import nodemailer from 'nodemailer';
import useFormValidation from '@/utils/formValidation';
import { verifyCsrfToken } from '@/utils/csrf'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, message, csrfToken } = req.body;

    const sanitizeString = (string: string) => {
      return string.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    }

    if (!verifyCsrfToken(csrfToken)) {
      console.log('Invalid CSRF token');
      res.status(403).json({ success: false, error: 'Invalid CSRF token' });
      return;
    }

    let ruLang: boolean;
    const langHeader = req.headers['accept-language'];
    ruLang = langHeader && langHeader.startsWith('ru') ? true : false;
  
    if (req.cookies['ru-lang']) {
      ruLang = req.cookies['ru-lang'] === 'true' ? true : false;
    }

    try {
      const formValidation = useFormValidation(ruLang);

      formValidation.parse({
        name,
        email,
        message
      });

      const port = process.env.NEXT_PUBLIC_EMAIL_PORT ? parseInt(process.env.NEXT_PUBLIC_EMAIL_PORT, 10) : undefined;
      const transporter = nodemailer.createTransport({
        host: process.env.NEXT_PUBLIC_EMAIL_SMTP as string,
        port,
        secure: true,
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL_SENDER as string,
          pass: process.env.NEXT_PUBLIC_EMAIL_SENDER_PASSWORD as string,
        },
      });

      try {
        await transporter.sendMail({
          from: process.env.NEXT_PUBLIC_EMAIL_SENDER,
          to: process.env.NEXT_PUBLIC_EMAIL_RECIPIENT,
          subject: 'Новая форма обратной связи',
          text: `Имя: ${sanitizeString(name)}\nEmail: ${email}\nСообщение: ${sanitizeString(message)}`,
        });

        res.status(200).json({ name: 'send success' });
      } catch (error) {
        console.error('Ошибка при отправке email: ', error);
        res.status(500).json({ name: 'send error' });
      }


    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error)
        res.status(200).json(error);
      }
      
      res.status(400).json(error);
    }

  } else {
    res.status(405).json({ success: false, error: 'Метод не разрешен' });
  }
}
