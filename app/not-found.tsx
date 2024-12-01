import Link from "next/link";
import Loading from "./loading";

export default function NotFound() {
    return (
      <div className="max-w-4xl mx-auto h-screen flex justify-center items-center">
          <div className="text-center">
            <h1 className="font-bold text-2xl">Page not found</h1>
            <p className="mb-12">This page doesn&apos;t exist.</p>
            <Link className="text-sub hover:text-main" href={"/"}>Go back to Home</Link>
          </div>
      </div>
    )
  }