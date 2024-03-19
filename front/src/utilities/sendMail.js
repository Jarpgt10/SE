const { Resend } = require('resend')

function sendEmail(to, subject) {
  const resend = new Resend('re_VhUmoKAv_9dUQm78uEATgDLCX1QVm8wBv')

  resend.emails
    .send({
      from: 'onboarding@resend.dev',
      to: to,
      subject: subject,
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
    })
    .then((response) => {
      console.log('Email sent successfully:', response)
    })
    .catch((error) => {
      console.error('Error sending email:', error)
    })
}

// Llamamos a la función sendEmail con la dirección de correo electrónico de destino y el asunto
sendEmail('jarpgt@gmail.com', 'Hello World')
