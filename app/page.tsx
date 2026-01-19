import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#EDECE9] via-[#E2E2E2] to-[#DEDFE0] font-sans dark:bg-black">
      <main className="flex min-h-screen w-full  flex-col items-center justify-between sm:items-start">
        <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory justify-between scroll-smooth">
          <section className="h-screen snap-start flex items-center justify-center bg-[#E2E2E2] text-[#66ccff]">
            <div className="w-full max-w-4xl items-center px-6 mx-auto">
              <Image
                src="/logo_transparent.png"
                alt="HWI SENN"
                width={1400}        
                height={1400}
                className="mx-auto w-full h-auto"
                priority
              />
            </div>
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
              <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Omega-3 Fatty Acids: Essential Nutrients for Brain and Heart Health
              </h1>
              <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Looking for more information or need to contact us? Head over to{" "}
                <a
                  href="https://www.linkedin.com/in/shelley-jiang-1a2b2337/"
                  className="font-medium text-zinc-950 dark:text-zinc-50"
                >
                  linkin
                </a>{" "}
                or the{" "}
                <a
                  href="gujiaming2004@outlook.com"
                  className="font-medium text-zinc-950 dark:text-zinc-50"
                >
                  Email
                </a>{" "}for more details.
              </p>
            </div>
          </section>

          <section className="h-screen snap-start flex items-center justify-center bg-[#DEDFE0] text-[#66ccff]">
            <h2 className="text-4xl font-semibold">Section 2</h2>
          </section>

          <section className="h-screen snap-start flex items-center justify-center bg-[#DEDFE0] text-[#66ccff]">
            <h2 className="text-4xl font-semibold">Section 3</h2>
          </section>

          <section className="h-screen snap-start flex items-center justify-center bg-[#DEDFE0] text-[#66ccff]">
            <h2 className="text-4xl font-semibold">Section 4</h2>
          </section>
          <section className="h-screen snap-start flex items-center justify-center bg-[#DEDFE0] text-[#66ccff]">
            <h2 className="text-4xl font-semibold">Section 5</h2>
          </section>
        </div>
      </main>
    </div>
  );
}
