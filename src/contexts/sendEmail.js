import { useState, useRef } from 'react'
import { sendEmail } from '../utils/sendEmail'

const useEmailSender = () => {
  const [emailValue, setEmailValue] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const form = useRef()

  const onEmailInputChange = (e) => {
    setEmailValue(e.target.value)

    const ENTER_KEY_CODE = 13
    if (e.key === ENTER_KEY_CODE) {
      sendEmail(e)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    sendEmail(e, setShowAlert)
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
