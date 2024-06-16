import { route } from '@/common/api';
import usersModel from '@/db/userModel';
import bcryptjs from 'bcryptjs';
import nodemailer from 'nodemailer';

export async function sendEmail({ email, emailType, userId }: any) {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    if (emailType === 'VERIFY') {
      await usersModel.findByIdAndUpdate(
        userId,
        { verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600 * 1000 }
        // { new: true, runValidators: true }
      );
    } else if (emailType === 'RESET') {
      await usersModel.findByIdAndUpdate(
        userId,
        {
          forgotPasswordToken: hashedToken,
          forgotPasswordTokenExpiry: Date.now() + 360 * 1000
        }
        // { new: true, runValidators: true }
      );
    }

    const transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'fd6fe7588281bf',
        pass: 'c8a775a8a16e90'
        // to do add user + pass in .env
      }
    });

    const linkto : string = `${process.env.DOMAIN}/${route.account.verifyEmail}?token=${hashedToken}`;
    
    const mailOptions = {
      from: 'pods@freemem.fr',
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

