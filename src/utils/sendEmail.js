import emailjs from 'emailjs-com'

const WELLCOME_MESSAGE = `
  Hello and welcome! We're thrilled to have you join our project.
  Our team is dedicated to bringing the best possible experience 
  to our users and we're excited to have you on board. Whether 
  you're a seasoned pro or new to the world of VR gaming, we 
  value your unique perspective and contribution. Thank you for 
  joining us on this journey, and we can't wait to see what we can
  achieve together!`

const sendEmail = (formData, setShowAlert) => {
  const serviceId = 'service_b7u1b76'
  const templateId = 'template_8v2vbue'
  const userId = 'c7r7Ishe4hocmzPcD'

  const userEmail = formData.get('emailValue')

  emailjs
    .sendForm(serviceId, templateId, formData, userId, formData, {
      to_email: userEmail,
      message: WELLCOME_MESSAGE,
    })
    .then(
      () => {
        console.log('Email sent successfully')

        setShowAlert(true)

        setTimeout(() => {
          setShowAlert(false)
        }, 5000)
      },
      (error) => {
        console.log('Error sending email:', error)
      },
    )
}

export { sendEmail, WELLCOME_MESSAGE }
