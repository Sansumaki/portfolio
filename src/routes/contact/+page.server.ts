import { EMAIL_USER } from '$env/static/private';
import transporter from '$lib/emailSetup.js';

type EmailMessage = {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
};

export const actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const name = formData.get("name");
            const email = formData.get("email");
            const body = formData.get("message") as FormDataEntryValue | null;

            let html = `<h2>Contact via Website</h2><pre>${body || ''}</pre>`;

            const message: EmailMessage = {
                from: EMAIL_USER,
                to: EMAIL_USER,
                subject: "Contact form via website",
                text: (body as string) || '',
                html: html
            }

            const sendEmail = async (message: EmailMessage) => {
                await new Promise((resolve, reject) => {
                    transporter.sendMail(message, (err: Error, info: any) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            resolve(info);
                        }
                    });
                });
            }

            await sendEmail(message);
        } catch (error) {
            console.error(error);
        }
    }
}