import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import { BackToTop, ScrollToTop } from './components/common';
import {
  HomePage,
  CalculatorPage,
  SectorsPage,
  SectorDetailPage,
  ServiceDetailPage,
  PartnersPage,
  PartnerDetailPage,
  ProductsPage,
  ProductDetailPage,
  CaseStudiesPage,
  CaseStudyDetailPage,
  FAQPage,
  ClientPortalPage,
  ResourcesPage,
  BlogPage,
  BlogPostPage,
  ProcessPage,
  CareersPage,
} from './pages';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/sectors" element={<SectorsPage />} />
        <Route path="/sectors/:slug" element={<SectorDetailPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/partners/:slug" element={<PartnerDetailPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/client-portal" element={<ClientPortalPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/insights" element={<BlogPage />} />
        <Route path="/insights/:slug" element={<BlogPostPage />} />
        <Route path="/how-we-work" element={<ProcessPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  );
}

export default App;
