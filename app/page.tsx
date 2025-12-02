import Hero2 from "./_components/Hero2";
import About from "./_components/About";
import SendUsImage from "./_components/SendUsImage";
import Services from "./_components/Services";
import Gallery from "./_components/Gallery";
import BlindsCarousel from "./_components/BlindsCarousel";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero title={"Servis i popravka roletni"} />
      <About />
      <div className="border-t-1 border-stone-300" />
      <SendUsImage />

      <div className="border-t-1 border-stone-300" />
      <Services />
      <Gallery />
      <BlindsCarousel />
    </main>
  );
}
