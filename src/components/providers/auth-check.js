"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthCheck({ children }) {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAuthChecked(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (authChecked && (!isLoaded || !isSignedIn)) {
      router.push('/');
    }
  }, [authChecked, isLoaded, isSignedIn, router]);

  if (!authChecked || !isLoaded) {
    return (
      <section className="flex justify-center items-center w-full min-h-screen">
        <svg
          className="animate-spin h-8 w-8 text-indigo-700 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>{" "}
        <span>Checking your connection...</span>
      </section>
    );
  }

  return <>{children}</>;
}