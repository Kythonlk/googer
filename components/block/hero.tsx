import Link from "next/link";
import Image from "next/image";
import heroimage from "@/assets/images/banner.jpg";

export default function Hero() {
  return (
    <section className="flex w-max-full">
      <div className="flex flex-col  space-y-4 gap-4 pl-4 md:pl-20 my-auto">
        <div className="space-y-2">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Discover the Perfect Baby Items for Every Stage
            </h1>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
              From newborn essentials to toddler must-haves, we've got you
              covered.
            </p>
          </div>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-700 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <Image
        alt="Hero"
        className=""
        height="700"
        width="1000"
        src={heroimage}
      />
    </section>
  );
}
