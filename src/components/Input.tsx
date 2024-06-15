import { uniqueId } from '@/helpers/helpers';
import { faAt, faCheck, faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CheckIcon } from '@heroicons/react/24/outline';
import React, { ChangeEvent, forwardRef } from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hasError?: boolean;
  icon?: IconDefinition
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id = uniqueId(), hasError = false,label,  placeholder=label, ...props }, ref) => {
    const opacity = hasError ? 'bg-opacity-10' : 'bg-opacity-50';
    const className =
      'h-10 bg-green  placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  rounded py-4 px-4' +
      ' ' +
      props.className +
      ' ' +
      opacity;

    return (
      <>
        {/* <input
          ref={ref}
          {...props}
          id={id}
          className={className}
        /> */}

        <div>
          <div className='relative'>
            <input
              ref={ref}
              {...props}
              className={className}
              placeholder={placeholder}
            />
            {props.icon && 
            <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
              <FontAwesomeIcon icon={props.icon} className='h-4 w-4' />
            </span>
  }
          </div>
        </div>
      </>
    );
  }
);

Input.displayName = 'Input';

export default Input;
