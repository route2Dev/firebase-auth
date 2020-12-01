import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { signinWithEmail } from '../../components/firebase/firebase-auth';
import { Input } from '../../components/inputs/Input';
import * as ROUTES from '../../constants/routes';

interface FormData {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const [serverError, setServerError] = useState<any>();
  const history = useHistory();

  const { register, handleSubmit, errors, formState } = useForm<FormData>({
    mode: 'all',
  });

  const onSubmit = async (data: FormData) => {
    try {
      await signinWithEmail(data.email, data.password);

      history.push(ROUTES.HOME);
    } catch (error) {
      setServerError(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="email"
        name="email"
        label="Email Address"
        placeholder="Email Address"
        errors={errors}
        ref={register({ required: true })}
      />
      <Input
        id="password"
        name="password"
        type="password"
        label="Password"
        placeholder="Password"
        errors={errors}
        ref={register({ required: true })}
      />
      <button
        className="btn btn-primary"
        type="submit"
        disabled={!formState.isValid || formState.isSubmitting}
      >
        Sign In
      </button>
      {serverError && <div>{serverError.message}</div>}
    </form>
  );
};
