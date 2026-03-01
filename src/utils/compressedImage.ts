import type { SyntheticEvent } from "react";

const IMAGE_EXTENSION_REGEX = /\.(avif|webp|jpe?g|png)$/i;
const COMPRESSED_ASSETS_DIRECTORY = "/assets/compressed";
const COMPRESSED_FORMAT = "webp";
const USE_COMPRESSED_IMAGES =
  import.meta.env.VITE_USE_COMPRESSED_IMAGES === "true";

const splitPathAndQuery = (imagePath: string) => {
  const questionMarkIndex = imagePath.indexOf("?");

  if (questionMarkIndex === -1) {
    return { path: imagePath, suffix: "" };
  }

  return {
    path: imagePath.slice(0, questionMarkIndex),
    suffix: imagePath.slice(questionMarkIndex),
  };
};

export function getCompressedImageSrc(imagePath: string): string {
  if (!USE_COMPRESSED_IMAGES) {
    return imagePath;
  }

  const { path, suffix } = splitPathAndQuery(imagePath);

  if (!IMAGE_EXTENSION_REGEX.test(path)) {
    return imagePath;
  }

  const fileName = path.split("/").pop();

  if (!fileName) {
    return imagePath;
  }

  const baseName = fileName.replace(IMAGE_EXTENSION_REGEX, "");

  return `${COMPRESSED_ASSETS_DIRECTORY}/${baseName}.${COMPRESSED_FORMAT}${suffix}`;
}

export function handleCompressedImageFallback(originalSrc: string) {
  return (event: SyntheticEvent<HTMLImageElement>) => {
    const imageElement = event.currentTarget;

    if (imageElement.dataset.fallbackApplied === "true") {
      return;
    }

    imageElement.dataset.fallbackApplied = "true";
    imageElement.src = originalSrc;
  };
}
