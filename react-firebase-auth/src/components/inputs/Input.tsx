import React from 'react';
import classNames from 'classnames';
import { DeepMap } from '@hookform/error-message/dist/types';
import { FieldError } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  id: string;
  errors?: DeepMap<any, FieldError>;
}

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, id, name, className, errors, ...rest }, ref) => {
    return (
      <div className={classNames('form-group', className)}>
        <label htmlFor={id}>{label}:</label>
        <input
          id={id}
          name={name}
          className="form-control"
          ref={ref}
          data-testid={`${name}-input`}
          {...rest}
        />
        <ErrorMessage errors={errors} name={name} />
      </div>
    );
  }
);
