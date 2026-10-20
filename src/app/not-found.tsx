import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-[60vh] items-center justify-center py-20">
      <div className="max-w-xl text-center">
        <p className="section-kicker">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          This page could not be found.
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-300">
          The page you were looking for may have moved or no longer exists.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/">Back to homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
