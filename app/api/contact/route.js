import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    console.log('=== API Contact iniciada ===');
    
    const body = await request.json();
    console.log('Datos recibidos:', body);
    
    const { recaptchaToken, nombre, email, mensaje, telefono, empresa } = body;

    // Validar campos requeridos
    if (!nombre || !email || !mensaje || !recaptchaToken) {
      return NextResponse.json({ 
        error: 'Todos los campos son requeridos' 
      }, { status: 400 });
    }

    console.log('Campos validados correctamente');

    // Verificar reCAPTCHA
    const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    });

    const verifyData = await verifyResponse.json();
    console.log('Respuesta reCAPTCHA:', verifyData);

    if (!verifyData.success || verifyData.score <= 0.5) {
      return NextResponse.json({ 
        error: 'reCAPTCHA failed',
        score: verifyData.score 
      }, { status: 400 });
    }

    console.log('reCAPTCHA válido, enviando email...');

    // Configurar Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // tu-email@gmail.com
        pass: process.env.GMAIL_APP_PASSWORD, // Contraseña de aplicación
      },
    });

    // Enviar email
    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_TO, // Email de destino
      subject: `Nuevo mensaje de ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nuevo mensaje desde el sitio web
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
            <p><strong>Empresa:</strong> ${empresa || 'No proporcionado'}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Mensaje:</h3>
            <p style="background-color: #fff; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
              ${mensaje.replace(/\n/g, '<br>')}
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            Este mensaje fue enviado desde tu sitio web el ${new Date().toLocaleString('es-ES')}
          </p>
        </div>
      `,
      replyTo: email,
    });

    console.log('Email enviado:', info.messageId);

    return NextResponse.json({ 
      success: true,
      message: 'Email enviado correctamente',
      messageId: info.messageId,
      recaptchaScore: verifyData.score
    });

  } catch (error) {
    console.error('Error en API handler:', error);
    return NextResponse.json({ 
      error: 'Error interno del servidor' 
    }, { status: 500 });
  }
}



// import { Resend } from 'resend';
// import { NextRequest, NextResponse } from 'next/server';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request) {
//   try {
//     const { recaptchaToken, nombre, email, mensaje, telefono, empresa, ...formData } = await request.json();

//     // Validar campos requeridos
//     if (!nombre || !email || !mensaje || !recaptchaToken) {
//       return NextResponse.json({ 
//         error: 'Todos los campos son requeridos' 
//       }, { status: 400 });
//     }

//     // Verificar reCAPTCHA con el Secret Key
//     const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
//     });

//     const verifyData = await verifyResponse.json();

//     // Verificar que reCAPTCHA sea válido y tenga un score aceptable
//     if (!verifyData.success || verifyData.score <= 0.5) {
//       return NextResponse.json({ 
//         error: 'reCAPTCHA failed',
//         score: verifyData.score 
//       }, { status: 400 });
//     }

//     // Enviar email con Resend
//     const { data, error } = await resend.emails.send({
//       from: 'contacto@pueblobranding.com', // Debe ser un dominio verificado en Resend
//       to: [process.env.GMAIL_TO],
//       subject: `Nuevo mensaje de ${nombre}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
//             Nuevo mensaje desde el sitio web
//           </h2>
          
//           <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
//             <p><strong>Nombre:</strong> ${nombre}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
//             <p><strong>Empresa:</strong> ${empresa || 'No proporcionado'}</p>
//           </div>
          
//           <div style="margin: 20px 0;">
//             <h3 style="color: #555;">Mensaje:</h3>
//             <p style="background-color: #fff; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
//               ${mensaje.replace(/\n/g, '<br>')}
//             </p>
//           </div>
          
//           <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
//           <p style="color: #666; font-size: 12px; text-align: center;">
//             Este mensaje fue enviado desde tu sitio web el ${new Date().toLocaleString('es-ES')}
//           </p>
//         </div>
//       `,
//       replyTo: email, // Para poder responder directamente
//     });

//     if (error) {
//       console.error('Error enviando email:', error);
//       return NextResponse.json({ 
//         error: 'Error al enviar el email' 
//       }, { status: 500 });
//     }

//     // Respuesta exitosa
//     return NextResponse.json({ 
//       success: true,
//       message: 'Email enviado correctamente',
//       id: data?.id,
//       recaptchaScore: verifyData.score
//     });

//   } catch (error) {
//     console.error('Error en API handler:', error);
//     return NextResponse.json({ 
//       error: 'Error interno del servidor' 
//     }, { status: 500 });
//   }
// }