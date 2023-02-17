import React, { useEffect, useContext } from 'react';
import { ErrorContext } from '../context/ErrorContext';

function Notification() {

    const {error, setError} = useContext(ErrorContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            setError({type: "", text: ""})
        }, 3000)
        return () => {
            clearTimeout(timer)
        };
    }, [error, setError]);

  return (
    <div>Notification</div>
  )
}

export default Notification