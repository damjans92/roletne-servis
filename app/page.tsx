import About from "./_components/About";
import SendUsImage from "./_components/SendUsImage";
import Services from "./_components/Services";
import BlindsCarousel from "./_components/BlindsCarousel";
import Hero from "./_components/Hero";
import GalleryWrapper from "./_components/DynamicGallery";

export default function Home() {
  return (
    <main className="">
      <Hero title={"Servis i popravka roletni"} />
      <About />
      <div className="border-t-1 border-stone-300" />
      <SendUsImage />

      <div className="border-t-1 border-stone-300" />
      <Services />
      <GalleryWrapper />
      <BlindsCarousel />
    </main>
  );
}
