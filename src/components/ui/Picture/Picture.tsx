import css from './Picture.module.css';

interface PictureProps {
  fileNameBase: string;
  alt: string;
}

export default function Picture({ fileNameBase, alt }: PictureProps) {
  return (
    <picture className={css.picture}>
      {/* <source
        type='image/avif'
        media='(min-width: 1440px)'
        srcSet={`img/${fileNameBase}-desk.avif 1x, img/${fileNameBase}-desk@2x.avif 2x`}
      />
      <source
        type='image/avif'
        media='(min-width:768px) and (max-width:1439px)'
        srcSet={`img/${fileNameBase}-tab.avif 1x, img/${fileNameBase}-tab@2x.avif 2x`}
      />
      <source
        type='image/avif'
        media='(max-width:767px)'
        srcSet={`img/${fileNameBase}.avif 1x, img/${fileNameBase}@2x.avif 2x`}
      /> */}

      <source
        type='image/webp'
        media='(min-width: 1440px)'
        srcSet={`img/${fileNameBase}-desk.webp 1x, img/${fileNameBase}-desk@2x.webp 2x`}
      />
      <source
        type='image/webp'
        media='(min-width:768px) and (max-width:1439px)'
        srcSet={`img/${fileNameBase}-tab.webp 1x, img/${fileNameBase}-tab@2x.webp 2x`}
      />
      <source
        type='image/webp'
        media='(max-width:767px)'
        srcSet={`img/${fileNameBase}.webp 1x, img/${fileNameBase}@2x.webp 2x`}
      />

      <img
        className={css.image}
        src='img/example-mobile.jpg'
        srcSet='img/example-mobile.jpg 1x, img/example-mobile@2x.jpg 2x'
        alt={alt}
        loading='lazy'
        decoding='async'
      />
    </picture>
  );
}
