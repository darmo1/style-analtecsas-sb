import { FC, forwardRef, useRef } from "react";
import { FieldProps } from "./Field.types";
import Label from "../Label";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Field: FC<FieldProps> = forwardRef(
  (
    {
      children,
      className = "",
      error = null,
      errorClassName,
      formGroupClassName,
      hideErrorMessage = false,
      hideLabel = false,
      id,
      label,
      labelClassName,
      labelledBy,
      name,
      onError,
      placeholder,
      showOptional,
      showRequired,
      type = "text",
      value = "",
      ...props
    },
    ref
  ) => {
    const newRef = useRef<any>();
    const inputRef: any = ref ? ref : newRef;

    const getInput = () => {
      return (
        <input
          ref={inputRef}
          aria-label={(label && hideLabel ? label : "") as string}
          aria-labelledby={
            !hideLabel && id ? labelledBy ?? `${id}Label` : labelledBy ?? ""
          }
          type={type}
          placeholder={placeholder}
          className={""}
          id={id}
          {...props}
        />
      );
    };

    const getLabel = () =>
      label &&
      !hideLabel && (
        <Label
          className={`${labelClassName}`}
          fieldId={id}
          showOptional={showOptional}
          showRequired={showRequired}
        >
          {label}
        </Label>
      );

    return (
      <div>
        {type === "file" 
        ? 
        (
          <>
            {getInput()}
            {getLabel()}
          </>
        ) 
        : 
        (
          <>
           {getLabel()}
           <div className="relative">
            {type === 'textarea' ?  
            (<textarea 
            ref={inputRef}   
            aria-label={(label && hideLabel ? label : "") as string}
            aria-labelledby={
              !hideLabel && id ? labelledBy ?? `${id}Label` : labelledBy ?? ""
            }
            name={name}
            placeholder={placeholder}
            className={""}
            value={value}
            id={id}
            {...props}
            />)
            :
            (getInput())
            }
            {children && children}
           </div>
          </>
        )
        }


        {error && !hideErrorMessage && (
          <ErrorMessage
          fieldName={name}
          inputRef={inputRef}
          onShow={onError}
          errorClassName={errorClassName}
          >
            {error}
          </ErrorMessage>
        )}
      </div>
    );
  }
);

export default Field;
