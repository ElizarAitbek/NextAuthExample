"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

function GoogleButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  return (
    <button onClick={() => signIn("google", { callbackUrl })}>
      GoogleButton
    </button>
  );
}

export { GoogleButton };
