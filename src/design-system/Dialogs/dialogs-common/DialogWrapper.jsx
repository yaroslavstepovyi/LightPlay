import React from 'react'

import './dialog.css'

const DialogWrapper = ({ children, onHandleBackgroundBlurHide }) => {
  return (
    <div className="sign-in__wrap">
      <div className="sign-in modal hidden">
        <div className="sign-in__wrap">
          <div className="sign-in__headline">
            <h3>
              Authorization
              <button
                className="sign-in-close"
                onClick={onHandleBackgroundBlurHide}
              >
                X
              </button>
            </h3>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export { DialogWrapper }
