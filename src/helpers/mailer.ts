import { route } from '@/common/api';
import usersModel from '@/db/userModel';
import bcryptjs from 'bcryptjs';
import nodemailer from 'nodemailer';

export async function sendEmail({ email, emailType, userId }: any) {
  try {
    const duration = 3600 * 1000;
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    if (emailType === 'VERIFY') {
      await usersModel.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + duration
      });
    } else if (emailType === 'RESET') {
      await usersModel.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + duration
      });
    }

    const transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT!, 10),
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    const linkto: string = `${process.env.DOMAIN}/${route.account.verifyEmail}?token=${hashedToken}`;

    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: email,
      subject: emailType === 'VERYFY' ? 'verify email' : 'reset password',
      html: `<p>Click <a href=${linkto}>here</a> to ${
        emailType === 'VERIFY' ? 'verify your email' : 'reset your password'
      }      
      or copy and paste the link below in your browser. <br> ${linkto} </p> <p> for one hour deal </p>`
    };
    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error('email send error', error.message);
  }
}
