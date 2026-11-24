/** Imagen reusable; el contenedor determina el aspecto y la proporción. */
export function MediaImage({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  position = 'center',
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading === 'eager' ? 'eager' : 'lazy'}
      decoding="async"
      style={{ objectPosition: position }}
      className={`block h-full w-full object-cover ${className}`}
    />
  );
}
