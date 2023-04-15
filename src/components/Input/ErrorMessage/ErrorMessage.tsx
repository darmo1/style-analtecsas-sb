import React, { FC, MutableRefObject, ReactNode, useEffect } from 'react'
import { ErrorMessageProps } from './ErrorMessage.types'

const ErrorMessage: FC<ErrorMessageProps> = ({
  children,
  className,
  errorClassName,
  fieldName,
  inputRef,
  onShow
}) => {
  useEffect(() => {
    if(onShow) onShow( fieldName as string, inputRef as MutableRefObject<ReactNode | null>)
  }, [fieldName, inputRef, onShow])
  return (
  <p className={`${className} ${errorClassName} `}>
    {children}
  </p>
  )
}

export default ErrorMessage