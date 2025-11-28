import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
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
  SubsitePage,
  SubsiteFAQPage,
  SubsiteFeaturesPage,
} from './pages';

// Layout wrapper for main site pages
function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Product subsites - rendered without main Header/Footer */}
        <Route path="/products/:productSlug/site" element={<SubsitePage />} />
        <Route path="/products/:productSlug/site/faq" element={<SubsiteFAQPage />} />
        <Route path="/products/:productSlug/site/features" element={<SubsiteFeaturesPage />} />

        {/* Main site pages with Header/Footer */}
        <Route element={<MainLayout />}>
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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
