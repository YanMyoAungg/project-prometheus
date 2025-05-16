import { error } from "console";
import { deleteCookie, setCookie } from "cookies-next";

export interface FieldError {
  field: string;
  message: string;
}
export async function login(email: string, password: string) {
  const res = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    // this will match either your manual or DTO errors
    // const errors = await res.json();
    // console.log(errors);

    const { field, message } = await res.json();
    // console.log({ field, message });

    throw { field, message };
  }

  const { accessToken } = await res.json();
  setCookie("accessToken", accessToken);
}

export async function logout() {
  deleteCookie("accessToken");
  return Response.json({ status: 201, message: "Logout successful" });
}
