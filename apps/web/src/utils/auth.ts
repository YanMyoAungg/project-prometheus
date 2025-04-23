import { deleteCookie, setCookie } from "cookies-next";

export async function login(email: string, password: string) {
  const res = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Login failed");
  }
  const { accessToken } = await res.json();
  setCookie("accessToken", accessToken);
}

export async function logout() {
  deleteCookie("accessToken");
  return Response.json({ status: 201, message: "Logout successful" });
}
