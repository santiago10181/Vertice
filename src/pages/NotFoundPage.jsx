import { PageHeading } from '../components/PageHeading.jsx';

export function NotFoundPage() {
  return <PageHeading eyebrow="404" title="Esta página no existe." description="Puedes regresar al inicio y continuar explorando nuestras soluciones." action={{ label: 'VOLVER AL INICIO', href: '/' }} />;
}
