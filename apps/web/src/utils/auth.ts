import { deleteCookie, setCookie } from "cookies-next";

export interface FieldError {
  field: string;
  message: any;
}
export async function login(email: string, password: string) {
  const res = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    // expect { statusCode, errors: FieldError[] }
    const { errors }: { errors: FieldError[] } = await res.json();
    throw errors;
  }

  const { accessToken } = await res.json();
  setCookie("accessToken", accessToken);
}

export async function logout() {
  deleteCookie("accessToken");
  return Response.json({ status: 201, message: "Logout successful" });
}
