import { Link } from 'react-router';

/** Una misma API href para CTA, marca y footer. Las rutas locales no recargan el sitio. */
export function SiteLink({ href = '', children, ...props }) {
  const isInternal = (href.startsWith('/') && !href.startsWith('//')) || href.startsWith('#');

  if (isInternal) {
    return <Link to={href} {...props}>{children}</Link>;
  }

  return <a href={href} {...props}>{children}</a>;
}
