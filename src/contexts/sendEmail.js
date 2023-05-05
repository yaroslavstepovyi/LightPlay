import { useState, useRef } from 'react'
import { sendEmail } from '../utils/sendEmail'

const useEmailSender = () => {
  const [emailValue, setEmailValue] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const form = useRef()

  const onEmailInputChange = (e) => {
    setEmailValue(e.target.value)

    if (e.key === 13) { //13 (Enter)
      sendEmail(e)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    sendEmail(form, setShowAlert)
  }

  return {
    emailValue,
    showAlert,
    form,
    onEmailInputChange,
    onSubmit,
  }
}

export { useEmailSender }
