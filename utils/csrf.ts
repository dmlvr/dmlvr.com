// utils/csrf.ts

import { serialize } from 'cookie';
import csrf from 'csrf';
import { NextApiRequest, NextApiResponse } from 'next';

// Генерация CSRF-токена
const tokens = new csrf();
const secret = process.env.CSRF_SECRET as string; // Замените 'secret' на ваш секретный ключ
const getToken = () => tokens.create(secret);
const verifyToken = (token: string) => tokens.verify(secret, token);

// Добавление CSRF-токена в куки
const setCsrfCookie = (res: NextApiResponse, token: string) => {
  res.setHeader('Set-Cookie', serialize('csrfToken', token, { httpOnly: true }));
};

// Получение CSRF-токена из куки
export const getCsrfToken = (req: NextApiRequest) => req.cookies.csrfToken;

// Хук для использования CSRF-токена
export const useCsrfToken = (req: NextApiRequest, res: NextApiResponse) => {
  const token = getCsrfToken(req) || getToken();
  setCsrfCookie(res, token);
  return token;
};

export const verifyCsrfToken = (csrfToken: string) => {
  return verifyToken(csrfToken)
};
