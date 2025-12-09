type GalleryItem =
  | { type: "text"; title: string; desc: string }
  | { type: "image"; src: string; alt: string };

export const galleryItems: GalleryItem[] = [
  {
    type: "text",
    title: "Drvene roletne",
    desc: "Dugovečne i izrađene od kvalitetnog drveta unose prirodu u Vaš dom",
  },
  {
    type: "image",
    src: "/reparacija-drvenih-roletni.png",
    alt: "Reparacija drvenih roletni",
  },
  {
    type: "image",
    src: "/izrada-drvenih-roletni.png",
    alt: "Izrada drvenih roletni",
  },
  {
    type: "image",
    src: "/reparirane-drvene-roletne.jpg",
    alt: "Reparirane drvene roletne",
  },
  {
    type: "image",
    src: "/reparacija-drvenih-roletni-proces.jpg",
    alt: "Reparacija drvenih roletni proces",
  },
  {
    type: "text",
    title: "Gurtna za roletne",
    desc: "Mini ili standard – kanap za podizanje i spuštanje roletne",
  },
  { type: "image", src: "/gurtna_mini.png", alt: "Mini gurtna" },
  { type: "image", src: "/gurtna_standard.png", alt: "Standard gurtna" },

  {
    type: "text",
    title: "Automat za roletne",
    desc: "Mehanički ili električni – navija gurtnu i omogućava rad roletne",
  },
  { type: "image", src: "/automat-za-roletne.png", alt: "Mehanički automat" },
  {
    type: "image",
    src: "/elektricni-automat.png",
    alt: "Električni automat sa motorom",
  },

  {
    type: "image",
    src: "/ukopavajuci-automat.jpg",
    alt: "Ukopavajući automat",
  },
];
