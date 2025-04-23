"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Alert,
  Button,
  Center,
  Field,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuMail } from "react-icons/lu";
import { login } from "@/utils/auth";
import { PasswordInput } from "@/components/ui/password-input";
import { getCookie } from "cookies-next";

export default function LoginPage() {
  const router = useRouter();
  const nameRef = useRef<string>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const emailInput = emailRef.current?.value;
      const passwordIinput = passwordRef.current?.value;
      if (emailInput && passwordIinput) {
        await login(emailInput, passwordIinput);
        router.push("/");
      } else {
        console.error("Email or password is missing");
      }
    } catch (err: string) {
      console.log(err);

      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const accessToken = getCookie("accessToken");

    if (accessToken) {
      router.push("/");
    }
  }, [error, router]);
  return (
    <>
      <Center mb="80" mt="20">
        <form onSubmit={handleSubmit}>
          {error && error !== null && (
            <Text style={{ color: "red" }}>{error}</Text>
          )}

          <Stack gap="4" align="flex-end">
            <Field.Root>
              <Field.Label>Email</Field.Label>
              <InputGroup startElement={<LuMail />}>
                <Input
                  ref={emailRef}
                  placeholder="Email"
                  _invalid={{ color: "red" }}
                />
              </InputGroup>
              {/* <Text>{error}</Text> */}
            </Field.Root>

            <Field.Root>
              <Field.Label>Password</Field.Label>
              <PasswordInput ref={passwordRef} placeholder="Password" />
              {/* <Text>{error}</Text> */}
            </Field.Root>

            <Button type="submit" loading={isSubmitting}>
              Login
            </Button>
          </Stack>
        </form>
      </Center>
    </>
  );
}
