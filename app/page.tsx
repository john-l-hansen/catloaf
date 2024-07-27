import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="section max-w-[71.25rem]">
        <div className="section-header space-y-5">
          <h1 className="text-9xl">Catloaf TV</h1>
          <p className="text-gray-400 text-4xl">A place of things.</p>
        </div>

        <div className="container space-y-[10rem] mt-20">
          <div className="section max-w-[71.25rem] mt-5">
            <div className="section max-w-[71.25rem]">
              <div className="section-header">
                <h2>Take your seat.</h2>
              </div>
              <div className="flex flex-col">
                <Image
                  className="flex-1 p-1 max-w-full relative"
                  src="/catloaf-flight-757.webp"
                  alt="catl04f Flight 757"
                  width={2000}
                  height={1000}
                  priority
                />
              </div>
            </div>

            <div className="section-header mt-20">
              <h2>The Call of Rover</h2>
            </div>
            <div className="flex flex-col md:flex-row">
              <Image
                className="flex-1 p-1 md:w-1/3 max-w-full relative dark:invert"
                src="/rovers-call-01.webp"
                alt="Rover's Call"
                width={2000}
                height={1000}
                priority
              />
              <Image
                className="flex-1 p-1 md:w-1/3 max-w-full relative dark:invert"
                src="/rovers-call-02.webp"
                alt="Rover's Call"
                width={2000}
                height={1000}
                priority
              />
              <Image
                className="flex-1 p-1 md:w-1/3 max-w-full relative dark:invert"
                src="/rovers-call-03.webp"
                alt="Rover's Call"
                width={2000}
                height={1000}
                priority
              />
            </div>
          </div>

          <div className="section max-w-[71.25rem]">
            <div className="section-header">
              <h2>A Cat Food Commercial</h2>
            </div>
            <div className="w-full flex justify-center mt-8">
              <iframe
                src="https://player.vimeo.com/video/956918964?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                width="490"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="Cat Food Commercial Sponsor"
              ></iframe>
            </div>
          </div>

          <div className="section max-w-[71.25rem]">
            <div className="section-header">
              <h2>Holidays 2023</h2>
            </div>
            <div className="flex flex-col md:flex-row max-w-lg">
              <Image
                className="flex-1 p-1 max-w-full relative"
                src="/happy-holidays-2023.webp"
                alt="Holidays"
                width={2000}
                height={1000}
                priority
              />
            </div>
          </div>

          <div className="section max-w-[71.25rem]">
            <div className="section-footer text-gray-900">
              <p>© 2024 catloaf. Whiskered in Los Angeles. </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
