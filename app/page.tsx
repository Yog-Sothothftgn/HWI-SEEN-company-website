// "use client";
import Image from "next/image";
// import React, { useRef } from "react";
import Tiltcard from "./components/Tiltcard";
const products = [
  {
    title: "Fish Oil",
    desc: "Custom EPA/DHA specs, deodorized, bulk packaging available.",
    img: "/logo.png",
  },
  {
    title: "Omega-3 Powder",
    desc: "Plant-based DHA/EPA solutions for EU/NA supplement brands.",
    img: "/logo.png",
  },
  {
    title: "capsules",
    desc: "Customized processing for deep-sea derived ingredients and intermediates.",
    img: "/logo.png",
  },
];

export default function Home() {
  // const scene3Ref = useRef<HTMLElement | null>(null);
  // const scene4Ref = useRef<HTMLElement | null>(null);
  // const scene5Ref = useRef<HTMLElement | null>(null);

  // const targets = [scene3Ref, scene4Ref, scene5Ref];
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
                  href="mailto:gujiaming2004@outlook.com"
                  className="font-medium text-zinc-950 dark:text-zinc-50"
                >
                  Email
                </a>{" "}for more details.
              </p>
            </div>
          </section>
          <section className="h-screen snap-start flex items-center justify-center bg-[#DEDFE0] text-zinc-600">
            <div className="w-full max-w-7xl items-center px-6 mx-auto">
              <h2 className="text-4xl text-center font-semibold">Products</h2>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {products.map((product, index) => (
                    <Tiltcard key={index}>
                      <div key={index} className="bg-white rounded-lg shadow-md">
                        <Image
                          src={product.img}
                          alt={product.title} 
                          width={500}
                          height={500}
                          className="mt-4 w-full h-auto"
                        />
                        <h3 className="text-2xl font-semibold">{product.title}</h3>
                        <p className="mt-2 text-xl text-gray-700">{product.desc}</p>
                      </div>
                    </Tiltcard>
                  ))}
                </div>
              {/* <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    
                  </div>
                ))}
              </div> */}
            </div>
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
