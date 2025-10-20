import { Request, Response, Router } from "express";
import assets from '../db/assets.json'
import { createTransport, Transporter, TransportOptions } from 'nodemailer'
import { google } from "googleapis";
import dotenv from 'dotenv';
dotenv.config();

const router = Router();
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
})

const accessToken = oauth2Client.getAccessToken()


const transporter: Transporter = createTransport({
    service: 'gmail',
    tls: {
        rejectUnauthorized: false
    },
    auth: {
        type: 'OAuth2',
        user: "me@joshhensley.com",
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken,
    }
} as TransportOptions);

router.get('/assets', (_req: Request, res: Response) => {
    try {
        res.json(assets)
    } catch (error: any) {
        res.status(500).send({ message: error?.message })
    }
    
});

router.post('/send-message', (req: Request, res: Response) => {
    try {
        const { formData } = req.body;
        transporter.sendMail({
            from: '"Leads" <info@stagecorps.com>',
            to: 'info@stagecorps.com',
            replyTo: formData.email,
            subject: `Message from ${formData.name}`,
            html: `
            <body>
                <div style="background:black; color: white; padding: 1rem;">
                    <h2 style="width: 80%; margin: 0 auto;">Stage Corps</h2>
                </div>
                <div style="background: #6d6d6d57; width: 80%; padding: 1rem; margin: 0 auto;">
                    <p>Name: ${formData.name}</p>
                    <p>Email: ${formData.email}</p>
                    <p>Phone: ${formData.phone}</p>
                    <p>Message: ${formData.message}</p>
                </div>
            </body>
            `
        }, (err, info)=>{
            if (err) {
                console.log(err)
            } else {
                console.log(`Message Sent!, ${info.messageId}`)
            }
        })

        res.send(`Message sent!`)

    } catch (error: any) {
        res.status(500).send({ message: error?.message })
        
    }
})

export default router;