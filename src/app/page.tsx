import Image from "next/image";

export default function Home() {
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
          <button className="bg-red-700/80 w-full mt-8 h-8 rounded-md text-white" type="submit">Login</button>
        </form>
      </div>
    </main>
  );
}
