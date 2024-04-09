import Contact from "@/components/block/contact";
import Faq from "@/components/block/faq";
import Hero from "@/components/block/hero";
import Services from "@/components/block/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <div className="flex justify-between p-20">
        <Contact />
        <Faq />
      </div>
    </main>
  );
}
