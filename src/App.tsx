import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import Choclate from './pages/Choclate';
import Cakes from './pages/Cakes';
import Sweet from './pages/Sweet';
import About from './pages/About';
import { Contact } from './components/Contact';
import { Gallery } from './components/Gallery';
// import { Cakes } from './pages/Cakes';
// import { Sweets } from './pages/Sweets';
// import { Contact } from './pages/Contact';
// import { About } from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream text-brown-900 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chocolates" element={<Choclate />} />
            <Route path="/cakes" element={<Cakes />} />
            <Route path="/sweets" element={<Sweet />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/awardcard" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;