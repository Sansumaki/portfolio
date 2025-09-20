import { env } from '$env/dynamic/private';
import transporter from '$lib/emailSetup';
import Mail from 'nodemailer/lib/mailer';
import type { Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const name = formData.get('name');
			const email = formData.get('email');
			const body = formData.get('message') as FormDataEntryValue | null;

			const html = `<h2>Contact via Website</h2><pre>${body || ''}</pre>`;

			const message: Mail.Options = {
				from: email?.toString() ?? env.CONTACT_EMAIL,
				to: "info@it-san.dev",
				cc: email?.toString(),
				subject: name?.toString() + ' - contact from website',
				text: (body as string) || '',
				html: html
			};

			const sendEmail = async (message: Mail.Options) => {
				await new Promise((resolve, reject) => {
					transporter.sendMail(message, (err: Error | null, info: unknown): void => {
						if (err) {
							console.error(err);
							reject(err);
						} else {
							resolve(info);
						}
					});
				});
			};

			await sendEmail(message);
		} catch (error) {
			console.error(error);
		}
	}
} satisfies Actions;
