import Image from "next/image";
import Counter from "./components/Counter";
export default function Home() {
  return (
    <main className="flex flex-col relative h-screen h-full w-full scroll-overflow bg-green-500">
      <div className="text-6xl font-bold text-center px-10 py-10">
        <p>My Counter App</p>
        <div className="text-4xl justify-center px-10 py-10">
          <Counter />
        </div>
      </div>
    </main>
  );
}
