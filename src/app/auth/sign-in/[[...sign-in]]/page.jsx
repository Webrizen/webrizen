import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { dark } from "@clerk/themes";

export default function page() {
  return (
    <>
      <div className="container relative md:min-h-screen h-screen flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r dark:border-slate-700">
          <div className="absolute inset-0 bg-[url('/bg-login.svg')] bg-center bg-cover rounded-br-full" />
          <Link
            href="/"
            className="relative z-20 flex items-center text-lg font-medium"
          >
            Webrizen LLP.
          </Link>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;At any rate, humans change over time based on their
                actions. Truth be told, at the end of the day, equality is just
                a fantasy. And most of us go through life denying the fact that
                we live in a meritocracy. You may come to regret trying to
                manipulate me.&rdquo;
              </p>
              <footer className="text-sm">Arshahdul Ahmed</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <SignIn
              appearance={{
                baseTheme: dark,
              }}
            />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms-and-conditions"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
