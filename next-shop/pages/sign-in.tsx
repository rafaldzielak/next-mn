import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import Button from "../components/Button";
import Field from "../components/Field";
import Input from "../components/Input";
import PageWrapper from "../components/PageWrapper";
import { fetchJson } from "../lib/api";

const SignIn: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(false);
    setIsLoading(true);
    try {
      const res = await fetchJson("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      router.push("/");
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
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
        {error && <p className='text-red-400'>Invalid credentials</p>}
        {isLoading ? <p>Loading</p> : <Button type='submit'>Sign In</Button>}
      </form>
    </PageWrapper>
  );
};

export default SignIn;
