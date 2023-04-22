import React from 'react'

const ErrorBubble = ({ error }) => {
    return (
        <div className="error-bubble">
            <div className="error-bubble-content">{error}</div>
            <div className="error-bubble-drop"></div>
        </div>
    )
}

export default ErrorBubble;
