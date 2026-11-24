import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import { site } from '../config/site.js';
import { findService } from '../config/services.js';
import { findNews } from '../config/news.js';

const titles = {
  '/': 'Inteligencia que transforma negocios',
  '/quienes-somos': 'Quiénes somos',
  '/servicios': 'Servicios',
  '/noticias': 'Noticias',
  '/recursos': 'Noticias',
};

export function MainLayout() {
  const { pathname, hash } = useLocation();
  // Inicio y Quiénes somos tienen panel superior con espacio interno para la navbar.
  const path = pathname.replace(/\/$/, '') || '/';
  const serviceId = path.match(/^\/servicios\/([^/]+)$/)?.[1];
  const hasIntegratedHeading = path === '/' || path === '/quienes-somos' || Boolean(serviceId && findService(serviceId)?.page);

  useEffect(() => {
    const service = path.startsWith('/servicios/') ? findService(path.split('/')[2]) : undefined;
    const article = path.startsWith('/noticias/') ? findNews(path.split('/')[2]) : undefined;
    document.title = `Vértice | ${titles[path] ?? service?.title ?? article?.title ?? 'Página no encontrada'}`;
    const frame = requestAnimationFrame(() => {
      const target = hash && document.getElementById(hash.slice(1));
      if (target) target.scrollIntoView({ block: 'start', behavior: 'instant' });
      else window.scrollTo({ top: 0, behavior: 'instant' });
    });
    return () => cancelAnimationFrame(frame);
  }, [path, hash]);

  return (
    <>
      <Header brand={site.brand} navigation={site.navigation} contact={site.contact} />
      <main id="contenido" tabIndex={-1} className={hasIntegratedHeading ? undefined : 'pt-[clamp(120px,12vw,160px)]'}>
        <Outlet />
      </main>
      <Footer {...site.footer} home={site.brand.home} brandName={site.brand.name} />
    </>
  );
}
