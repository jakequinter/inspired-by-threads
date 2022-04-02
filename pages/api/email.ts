import type { NextApiRequest, NextApiResponse } from 'next'
import sendgrid from '@sendgrid/mail'

type Data = {
  success: boolean;
  message?: string;
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, message } = req.body

    const emailToSend = {
      to: process.env.EMAIL_TO!,
      from: process.env.EMAIL_FROM!,
      subject: `${firstName} ${lastName} has contacted you from Inspired by Threads`,
      text: `Email: ${email} Message: ${message}`,
      html: `<p>Email: <a href=mailto:${email}>${email}</a></p><p>${message}</p>`,
    }

    try {
      await sendgrid.send(emailToSend)

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, message: 'There was a problem sending your email.' });
    }
  }
}
