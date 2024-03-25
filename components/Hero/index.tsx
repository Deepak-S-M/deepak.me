"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://deepak-me-server.vercel.app/api/test");
        if (response.ok) {
          const data = await response.json();
          setApiData(data.Deepak);
          // alert("Deepak : "+data.Deepak)
        } else {
          console.error("Failed to fetch API data");
        }
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 Hello I'M ...
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                DEEPAK {"   "}
                {/* <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  S
                </span> */}
              </h1>

              <p>              
              I'm passionate about software development and technology innovation. Whether it's crafting elegant code solutions, designing intuitive user interfaces, or exploring emerging tech trends, I'm always eager to dive in and push the boundaries of what's possible. On this site, you'll find a glimpse into my world: from my latest projects showcasing my technical skills to my thoughts on industry trends and best practices. I believe in continuous learning and collaboration, and I'm committed to delivering high-quality software solutions that positively impact people's lives. Feel free to browse around, and don't hesitate to reach out if you have any questions or simply want to connect. I'm excited to share this journey with you!
              Feel free to browse around, and don't hesitate to reach out if you have any questions or simply want to connect. I'm excited to share this journey with you!
              </p>  

              {/* <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p>
              </div> */}
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                  {/* <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/Deepak_Class_Flip.png"
                    alt="Hero"
                    // fill
                    width={270} 
                    height={400}
                    style={{ position: 'absolute', right: 0 }}
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/Deepak_Class_Flip.png"
                    alt="Hero"
                    // fill
                    width={270} 
                    height={400} 
                    style={{ position: 'absolute', right: 70, top: 0 }}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
