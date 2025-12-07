// utils/sendEmail.js

// import nodemailer from 'nodemailer';

// export const sendLeadEmail = async (data) => {
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.office365.com',
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   // Detect form type: Contact or Sample/Quote
//   const isSampleRequest = Array.isArray(data.samples) || Array.isArray(data.quotes);

//   let subject = '🚨 New Lead Received';
//   let htmlBody = '';

//   if (isSampleRequest) {
//     // 🧾 Sample/Quote Request
//     const sampleText = data.samples?.map(s => `${s.name} (${s.type})`).join('; ') || 'N/A';
//     const quoteText = data.quotes?.map(q => `${q.name} - ${q.color} - ${q.size}`).join('; ') || 'N/A';

//     subject = '📦 New Sample or Quote Request';
//     htmlBody = `
//       <h2>Sample / Quote Request</h2>
//       <p><strong>Name:</strong> ${data.name}</p>
//       <p><strong>Email:</strong> ${data.email}</p>
//       <p><strong>Phone:</strong> ${data.phone}</p>
//       <p><strong>Requested Samples:</strong> ${sampleText}</p>
//       <p><strong>Requested Quotes:</strong> ${quoteText}</p>
//     `;
//   } else {
//     // 📩 Contact Form Submission
//     htmlBody = `
//       <h2>Contact Form Submission</h2>
//       <p><strong>Name:</strong> ${data.name}</p>
//       <p><strong>Email:</strong> ${data.email}</p>
//       <p><strong>Phone:</strong> ${data.phone}</p>
//       <p><strong>Address:</strong> ${data.address}</p>
//       <p><strong>Area:</strong> ${data.area}</p>
//       <p><strong>Flooring:</strong> ${data.flooring}</p>
//       <p><strong>Other Services:</strong> ${data.otherServices?.join(', ') || 'None'}</p>
//       <p><strong>Message:</strong> ${data.message}</p>
//     `;
//   }

//   await transporter.sendMail({
//     from: `"Tred Website" <${process.env.EMAIL_USER}>`,
//     to: 'leads@tredflooring.com.au',
//     subject,
//     html: htmlBody,
//   });
// };

