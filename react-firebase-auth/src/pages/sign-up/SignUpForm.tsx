import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createUserWithEmail } from '../../components/firebase/firebase-auth';
import { Input } from '../../components/inputs/Input';
// import { useFirebaseDb } from '../../components/firebase/firebaseDb.hook';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export const SignUpForm = () => {
  const [serverError, setServerError] = useState<any>();
  // const firebaseDb = useFirebaseDb();

  const { register, handleSubmit, errors, formState } = useForm<FormData>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await createUserWithEmail(data.email, data.password);
      // this could call to an external api / database and not use realtime db.
      // firebaseDb
      //   ?.user(userCredential.user?.uid)
      //   .set({ name: data.name, email: data.email });

      setServerError('');
    } catch (error) {
      setServerError(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="name"
        name="name"
        label="Full Name"
        placeholder="Full Name"
        errors={errors}
        ref={register}
      />
      <Input
        id="email"
        name="email"
        label="Email Address"
        placeholder="Email Address"
        errors={errors}
        ref={register}
      />
      <Input
        id="password"
        name="password"
        type="password"
        label="Password"
        placeholder="Password"
        errors={errors}
        ref={register}
      />
      <Input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        placeholder="Confirm Password"
        errors={errors}
        ref={register}
      />
      <button
        className="btn btn-primary"
        type="submit"
        disabled={!formState.isValid || formState.isSubmitting}
      >
        Sign Up
      </button>
      {serverError && <div>{serverError.message}</div>}
    </form>
  );
};
