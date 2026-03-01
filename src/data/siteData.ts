import databaseDump from "../../databaseDump/fetchedData.json";

type HeroSectionRow = {
  id: number;
  title: string;
  image_path: string;
  image_alt: string;
};

type GalleryItemRow = {
  id: number;
  name: string;
  price: string;
  image_path: string;
};

type ServiceRow = {
  id: number;
  title: string;
  description: string;
  image_path: string;
};

type SliderImageRow = {
  id: number;
  image_path: string;
  image_alt: string;
};

type FooterSectionRow = {
  id: number;
  brand: string;
  location: string;
  contact_label: string;
  image_path: string;
  image_alt: string;
};

type SiteDatabase = {
  tables: {
    hero_sections: HeroSectionRow[];
    gallery_items: GalleryItemRow[];
    services: ServiceRow[];
    slider_images: SliderImageRow[];
    footer_sections: FooterSectionRow[];
  };
};

const db = databaseDump as SiteDatabase;

export const heroSection = db.tables.hero_sections[0];
export const galleryItems = db.tables.gallery_items;
export const services = db.tables.services;
export const sliderImages = db.tables.slider_images;
export const footerSection = db.tables.footer_sections[0];
