"use client";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function ProtectedClient({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = getCookie("accessToken");

  useEffect(() => {
    if (!accessToken) {
      setIsLoading(true);
      router.replace("/login");
    }
    setIsLoading(false);
  }, [accessToken, router]);

  return <>{!isLoading && children}</>;
}
