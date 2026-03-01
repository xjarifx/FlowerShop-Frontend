import type { ComponentPropsWithoutRef } from "react";

type OptimizedImageProps = Omit<ComponentPropsWithoutRef<"img">, "src"> & {
  src: string;
};

const LOCAL_IMAGE_PATTERN = /^\/assets\/.+\.(jpe?g|png)(\?.*)?$/i;

function toWebpSource(src: string) {
  return src.replace(/\.(jpe?g|png)(\?.*)?$/i, ".webp$2");
}

export default function OptimizedImage({
  src,
  loading,
  decoding,
  ...props
}: OptimizedImageProps) {
  const shouldUseWebpSource = LOCAL_IMAGE_PATTERN.test(src);

  return (
    <picture className="block">
      {shouldUseWebpSource && (
        <source srcSet={toWebpSource(src)} type="image/webp" />
      )}
      <img
        {...props}
        src={src}
        loading={loading ?? "lazy"}
        decoding={decoding ?? "async"}
      />
    </picture>
  );
}
