import React, { FC } from "react";

export interface Source {
  media: string;
  src: string;
  animatedSrc: string;
}

export interface GIFProps {
  animated: boolean;
  sources: Source[];
  alt?: string;
  className?: string;
}

export const GIF: FC<GIFProps> = (props) => {
  const { animated, sources, alt, className } = props;

  return (
    <picture>
      {sources.map(({ media, animatedSrc, src }) => (
        <source
          key={media}
          media={media}
          srcSet={animated ? animatedSrc : src}
        />
      ))}
      <img alt={alt} className={className} />
    </picture>
  );
};
