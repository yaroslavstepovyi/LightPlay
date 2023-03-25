import React, {useState, useEffect} from 'react'

import { ErrorIndicator } from '../components/error-indicator';

const ErrorBoundary = ({children}) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() =>{ 
        const handleError= () =>{
            setHasError(true);
        }

        window.addEventListener('error', handleError)

        return () => {
            window.removeEventListener('error', handleError);
        }
    }, [])

    if(hasError) {
        return <ErrorIndicator />
    }

    return children;
}

export default ErrorBoundary;