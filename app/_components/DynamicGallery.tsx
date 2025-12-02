"use client";

import dynamic from "next/dynamic";
import React from "react";

// This dynamic import *with ssr: false* is now allowed because it is inside a file with 'use client'
const DynamicGallery = dynamic(() => import("./Gallery"), {
  ssr: false,
  // Optional loading component while the client bundle loads
  loading: () => <p className="text-center py-20">Loading gallery...</p>,
});

// A simple wrapper component that you can import into your Server Page
const GalleryWrapper = () => {
  return <DynamicGallery />;
};

export default GalleryWrapper;
