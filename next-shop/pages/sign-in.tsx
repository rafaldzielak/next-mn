import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import Button from "../components/Button";
import Field from "../components/Field";
import Input from "../components/Input";
import PageWrapper from "../components/PageWrapper";
import { useSignIn } from "../hooks/user/useSignIn";

const SignIn: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const { signIn, isSignInError, isSignInLoading } = useSignIn();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = await signIn(email, password);
    if (isValid) router.push("/");
  };

  return (
    <PageWrapper title='Sign In'>
      <form onSubmit={handleSubmit}>
        <Field label='Email'>
          <Input type='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
        </Field>
        <Field label='Password'>
          <Input type='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
        </Field>
        {isSignInError && <p className='text-red-400'>Invalid credentials</p>}
        {isSignInLoading ? <p>Loading</p> : <Button type='submit'>Sign In</Button>}
      </form>
    </PageWrapper>
  );
};

export default SignIn;
