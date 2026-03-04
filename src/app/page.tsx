import AmbientLayer from "@/components/AmbientLayer";
import Starfield from "@/components/Starfield";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Episodes from "@/components/Episodes";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AmbientLayer />
      <Starfield />
      <div className="layout-wrapper">
        <Nav />
        <Hero />
        <Episodes />
        <Subscribe />
      </div>
      <Footer />
    </>
  );
}
