import Starfield from "@/components/Starfield";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Episodes from "@/components/Episodes";
import Tiers from "@/components/Tiers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Starfield />
      <main>
        <Hero />
        <About />
        <Episodes />
        <Tiers />
        <Footer />
      </main>
    </>
  );
}
