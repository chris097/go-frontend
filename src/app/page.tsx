"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl mb-3 font-semibold">Learn GO</h1>
      <div className="">
        <form className="border bg-white w-[300px] p-6 rounded-xl">
          <div>
            <label className="text-sm font-semibold mb-1">Email</label>
            <div>
              <input className="border w-full h-8 text-sm px-2" type="email" />
            </div>
          </div>
          <div className="mt-3">
            <label className="text-sm font-semibold mb-1">Password</label>
            <div>
              <input className="border w-full h-8 text-sm px-2" type="password" />
            </div>
          </div>
          <button onClick={() => router.push('/dashboard')} className="bg-red-700/80 hover:opacity-90 w-full mt-8 h-8 rounded-md text-white" type="button">Login</button>
          <p className="text-sm mt-4 text-center">Don't have an account? <Link href="register" className="text-red-700/80">Register</Link></p>
        </form>
      </div>
    </main>
  );
}
