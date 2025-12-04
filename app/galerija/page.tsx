import { Metadata } from "next";
import GalleryWrapper from "../_components/sections/DynamicGallery";
import PageHeader from "../_components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Galerija roletni i delova",
  description:
    "Pregled različitih tipova roletni, kutija, gurtni i mehanizama. Fotografije služe kao ilustracija proizvoda, ne predstavljaju izvedene radove.",
  openGraph: {
    title: "Galerija roletni i delova",
    description:
      "Pregled različitih tipova roletni, kutija, gurtni i mehanizama.",
    siteName: "Servis i popravka roletni",
    images: [
      {
        url: "https://servis-popravka-roletni.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Servis i popravka roletni Beograd – 35 godina iskustva u popravci i izradi roletni",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
const GalleryPage = () => {
  return (
    <main className=" ">
      <PageHeader title="Galerija" />
      <br />
      <br />
      <GalleryWrapper />
    </main>
  );
};

export default GalleryPage;
