"use client";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function ProtectedClient({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    const accessToken = getCookie("accessToken");
    console.log(accessToken);

    if (!accessToken) {
      router.replace("/login");
    }
  }, [router]);
  return <>{children}</>;
}
