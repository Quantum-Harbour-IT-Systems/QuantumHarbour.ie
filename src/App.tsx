import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import { BackToTop } from './components/common';
import { HomePage, CalculatorPage, SectorsPage, SectorDetailPage } from './pages';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/sectors" element={<SectorsPage />} />
        <Route path="/sectors/:slug" element={<SectorDetailPage />} />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  );
}

export default App;
