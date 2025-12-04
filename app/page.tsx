import About from "./_components/sections/About";
import GalleryWrapper from "./_components/sections/DynamicGallery";
import Hero from "./_components/sections/Hero";
import SendUsImage from "./_components/sections/SendUsImage";
import Services from "./_components/sections/Services";
import BlindsCarousel from "./_components/sections/BlindsCarousel";

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
