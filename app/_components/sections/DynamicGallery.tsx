"use client";

import dynamic from "next/dynamic";

const DynamicGallery = dynamic(() => import("./Gallery"), {
  ssr: false,
  loading: () => <p className="text-center py-20">Loading gallery...</p>,
});

const GalleryWrapper = () => {
  return <DynamicGallery />;
};

export default GalleryWrapper;
