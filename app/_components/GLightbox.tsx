"use client";

import { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

export default function GLightboxInit() {
  useEffect(() => {
    GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
      zoomable: true,
      draggable: true,
    });
  }, []);

  return null;
}
