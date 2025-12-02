import GalleryWrapper from "../_components/DynamicGallery";
import PageHeader from "../_components/ui/PageHeader";

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
