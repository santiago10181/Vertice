import { Routes, Route, Navigate } from 'react-router';
import { MainLayout } from './layouts/MainLayout.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { ServicesPage } from './pages/ServicesPage.jsx';
import { ServiceDetailPage } from './pages/ServiceDetailPage.jsx';
import { NewsPage } from './pages/NewsPage.jsx';
import { NewsDetailPage } from './pages/NewsDetailPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="quienes-somos" element={<AboutPage />} />
        <Route path="servicios" element={<ServicesPage />} />
        <Route path="servicios/:serviceId" element={<ServiceDetailPage />} />
        <Route path="noticias" element={<NewsPage />} />
        <Route path="noticias/:newsId" element={<NewsDetailPage />} />
        <Route path="recursos" element={<Navigate to="/noticias" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
