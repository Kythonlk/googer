import Image from "next/image";
import st1 from "@/assets/images/st1.jpeg";
import st2 from "@/assets/images/st2.jpeg";
import st3 from "@/assets/images/st3.jpeg";
import { Button } from "../ui/button";

const services = [
  {
    src: st1,
    title: "Stroller & Car Seat Cleaning",
    description:
      "Revitalize your baby's gear with our eco-friendly cleaning. We eliminate dirt, stains, and germs from strollers and car seats, ensuring a spotless, safe ride every time.",
  },
  {
    src: st2,
    title: "Gear Repair Services",
    description:
      "Expert repairs for strollers, car seats, and more. Our technicians use quality parts and techniques to restore your baby gear, ensuring safety and extending its life.",
  },
  {
    src: st3,
    title: "Baby Gear Rental",
    description:
      "Find the perfect temporary solution with our baby gear rental service. Access high-quality, sanitized strollers, car seats, and travel systems easily and affordably.",
  },
];

export default function Services() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto px-20 text-gray-500 md:text-xl/relaxed lg:text-xl/relaxed  dark:text-gray-400">
              Prioritize your child's safety with our eco-friendly baby gear
              services, including cleaning, repairs, and rentals. Get expert
              care for strollers and car seats, all designed for your
              convenience and peace of mind.
            </p>
          </div>
          <div className="grid px-16  w-full grid-cols-2 gap-6 md:grid-cols-3 md:gap-4 md:pt-10 lg:gap-8">
            {services.map((project, index) => (
              <div
                key={index}
                className={`group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:scale-105 ${
                  index === 0 ? "special-class-for-first-project" : ""
                }`}
              >
                <Image
                  alt={project.title}
                  className="aspect-video object-cover object-center group-hover:opacity-75 transition-opacity"
                  height="400"
                  src={project.src}
                  width="600"
                />
                <h3 className="text-xl font-semibold px-4 py-4 group-hover:underline text-center underline-offset-4 transition-all">
                  {project.title}
                </h3>
                <hr className="border-gray-300  w-3/4 m-auto pb-4" />
                <p className="text-base p-8 py-2 text-gray-600 text-justify transition-all">
                  {project.description}
                </p>
                <div className="mx-auto text-center py-4">
                  <Button className="bg-blue-700">More Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
