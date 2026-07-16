/* Plain <img> that respects the BASE_PATH set at build time (next/image does not
   prepend basePath for static-export sites, which breaks GitHub Pages hosting). */
const PREFIX = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Img({ src, alt, className = '', width, height, priority, ...rest }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${PREFIX}${src}`}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      className={className}
      {...rest}
    />
  );
}
