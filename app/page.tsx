import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-wrap md:flex-nowrap w-full">
        <Image
          className="flex-1 md:w-1/3 p-1 max-w-full relative dark:invert"
          src="/rovers-call-01.webp"
          alt="Rover's Call"
          width={2000}
          height={1000}
          priority
        />
        <Image
          className="flex-1 md:w-1/3 p-1 max-w-full relative dark:invert"
          src="/rovers-call-02.webp"
          alt="Rover's Call"
          width={2000}
          height={1000}
          priority
        />
        <Image
          className="flex-1 md:w-1/3 p-1 max-w-full relative dark:invert"
          src="/rovers-call-03.webp"
          alt="Rover's Call"
          width={2000}
          height={1000}
          priority
        />
      </div>
    </main>
  );
}
