"use client";

import Link from "next/link";
import { preload } from "react-dom";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & {
  /** Image the destination page shows first; fetched as soon as the user shows intent. */
  image: { src: string; srcSet?: string; sizes?: string };
};

export default function PreloadLink({ image, ...props }: Props) {
  const warm = () =>
    preload(image.src, { as: "image", imageSrcSet: image.srcSet, imageSizes: image.sizes });

  return <Link {...props} onPointerEnter={warm} onFocus={warm} onTouchStart={warm} />;
}
