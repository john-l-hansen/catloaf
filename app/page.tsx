import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="">
        <Image
          className="relative dark:invert"
          src="/rovers-call.png"
          alt="Rover's Call"
          width={2000}
          height={1000}
          priority
        />
      </div>

    </main>
  );
}
