import { ContactFormData } from "./validations";

/**
 * Mailer stub - Replace with actual email service integration
 * (e.g., SendGrid, Resend, Nodemailer with SMTP)
 */
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  console.log("📧 Contact form submission received:");
  console.log(JSON.stringify(data, null, 2));
  
  // TODO: Implement actual email sending
  // Example with Resend:
  // await resend.emails.send({
  //   from: 'website@betterhalfproperty.co',
  //   to: 'hello@betterhalfproperty.co',
  //   subject: `New contact from ${data.name}`,
  //   html: `...`
  // });
  
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 100));
}

