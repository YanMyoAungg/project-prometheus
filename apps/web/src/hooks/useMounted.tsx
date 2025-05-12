"use client";

import { useEffect, useState } from "react";
import { ProtectedClient } from "./useAuthenticate";

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <ProtectedClient>{children}</ProtectedClient>;
}
