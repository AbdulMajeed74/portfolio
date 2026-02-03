"use server";
import { Resend } from 'resend';

// For Vite, use VITE_ prefix. For Next.js, use process.env
const apiKey = "re_bBKc5CVX_4GFVVCPMWbFDrRUdh839R7cp";
const resend = new Resend(apiKey);

export const sendEmail = async (name: string, email: string, message: string) => {
    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['am3979629@gmail.com'],
            subject: `New Message from ${name}`,
            html: `
        <h2>New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        if (error) {
            return { success: false, error };
        }

        return { success: true, data };
    } catch (err) {
        return { success: false, error: err };
    }
};
