import React, { FC, useState } from "react";
import Button from "../components/Button";
import Field from "../components/Field";
import Input from "../components/Input";
import PageWrapper from "../components/PageWrapper";

const SignIn: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        <Button type='submit'>Sign In</Button>
      </form>
    </PageWrapper>
  );
};

export default SignIn;
