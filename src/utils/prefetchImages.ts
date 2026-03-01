import {
  footerSection,
  galleryItems,
  heroSection,
  services,
  sliderImages,
} from "../data/siteData";

const EXTRA_ROUTE_IMAGES = ["/assets/owner.jpg"];
const LOCAL_ASSET_PATTERN = /^\/assets\/.+\.(jpe?g|png)(\?.*)?$/i;

let hasStartedPrefetch = false;

function toWebpSource(src: string) {
  return src.replace(/\.(jpe?g|png)(\?.*)?$/i, ".webp$2");
}

function supportsWebp() {
  try {
    const canvas = document.createElement("canvas");
    return canvas.toDataURL("image/webp").startsWith("data:image/webp");
  } catch {
    return false;
  }
}

function buildPrefetchList() {
  const allSources = [
    heroSection.image_path,
    footerSection.image_path,
    ...galleryItems.map((item) => item.image_path),
    ...services.map((service) => service.image_path),
    ...sliderImages.map((image) => image.image_path),
    ...EXTRA_ROUTE_IMAGES,
  ];

  const useWebp = supportsWebp();

  const normalized = allSources.map((src) => {
    if (useWebp && LOCAL_ASSET_PATTERN.test(src)) {
      return toWebpSource(src);
    }
    return src;
  });

  return [...new Set(normalized)];
}

function prefetchOne(src: string) {
  const img = new Image();
  img.decoding = "async";
  img.loading = "eager";
  img.src = src;
}

function scheduleTask(task: () => void) {
  if (typeof window !== "undefined" && "requestIdleCallback" in window) {
    window.requestIdleCallback(task, { timeout: 1200 });
    return;
  }
  globalThis.setTimeout(task, 120);
}

export function startBackgroundImagePrefetch() {
  if (hasStartedPrefetch || typeof window === "undefined") {
    return;
  }

  hasStartedPrefetch = true;

  const queue = buildPrefetchList();

  const run = () => {
    const batch = queue.splice(0, 3);
    batch.forEach(prefetchOne);

    if (queue.length > 0) {
      scheduleTask(run);
    }
  };

  run();
}
