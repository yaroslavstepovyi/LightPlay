import emailjs from 'emailjs-com'

const WELLCOME_MESSAGE = `
  Hello and welcome! We're thrilled to have you join our project.
  Our team is dedicated to bringing the best possible experience 
  to our users and we're excited to have you on board. Whether 
  you're a seasoned pro or new to the world of VR gaming, we 
  value your unique perspective and contribution. Thank you for 
  joining us on this journey, and we can't wait to see what we can
  achieve together!`

const sendEmail = (form, setShowAlert) => {

  const serviceId = process.env.REACT_APP_SERVICE_ID
  const templateId = process.env.REACT_APP_TEMPLATE_ID
  const userId = process.env.REACT_APP_USER_ID

  const userEmail = form.current.userEmail.value

  emailjs
    .sendForm(serviceId, templateId, form.current, userId, {
      to_email: userEmail,
      message: WELLCOME_MESSAGE,
    })
    .then(
      () => {
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
