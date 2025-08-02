import { getCookie } from "cookies-next";

export function fetcher(input: RequestInfo, init: RequestInit = {}) {
  const token = getCookie("accessToken");
  return fetch(input, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init.headers || {}),
      Authorization: token ? `Bearer ${token}` : "",
    },
  }).then((res) => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  });
}
