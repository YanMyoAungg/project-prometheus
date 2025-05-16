"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Container,
  Field,
  Input,
  InputGroup,
  Stack,
} from "@chakra-ui/react";
import { LuMail } from "react-icons/lu";
import { FieldError, login } from "@/utils/auth";
import { PasswordInput } from "@/components/ui/password-input";
import { getCookie } from "cookies-next";

export default function LoginPage() {
  const router = useRouter();
  // const nameRef = useRef<string>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<FieldError | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({}); // clear old

    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";

    try {
      await login(email, password);
      router.push("/");
    } catch (errs: FieldError | any) {
      // this is AI generated and need to fix for simpler error handling
      setErrors(errs);
      console.log(errors);
    }
  };

  useEffect(() => {
    const accessToken = getCookie("accessToken");

    if (accessToken) {
      router.push("/");
    }
  }, [errors, router]);
  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <Stack my={20} gap="4" align="flex-end" maxW="sm" mx={"auto"}>
            <Field.Root invalid={errors?.field === "email"}>
              <Field.Label>Email</Field.Label>
              <InputGroup startElement={<LuMail />}>
                <Input
                  ref={emailRef}
                  placeholder="Email"
                  _invalid={{ color: "red" }}
                />
              </InputGroup>
              {errors?.field === "email" && (
                <Field.ErrorText>{errors.message}</Field.ErrorText>
              )}
            </Field.Root>

            <Field.Root invalid={errors?.field === "password"}>
              <Field.Label>Password</Field.Label>
              <PasswordInput ref={passwordRef} placeholder="Password" />
              {errors?.field === "password" && (
                <Field.ErrorText>{errors.message}</Field.ErrorText>
              )}{" "}
            </Field.Root>
            <Button type="submit" loading={isSubmitting}>
              Login
            </Button>
          </Stack>
        </form>
      </Container>
    </>
  );
}
