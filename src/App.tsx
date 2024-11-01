import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/general/Navbar';
import Contact from './components/general/Contact';
import Footer from './components/general/Footer';
import Impressum from './components/general/Impressum';
import Privacy from './components/general/Privacy';
import Spufo from './components/spufo/Spufo';
import Twojo from './components/twojo/Twojo';
import TwojoAbout from './components/twojo/TwojoAbout';
import Blog from './components/twojo/Blog';
import { usePageMeta } from './hooks/usePageMeta';

function App() {
  const location = useLocation();

  // Check if the current path is "/spufo" to set twojo to false
  const isSpufoPath = location.pathname === '/spufo';

  // Use the custom hook to handle page meta
  usePageMeta(isSpufoPath);

  return (
    <div className={`${isSpufoPath ? 'spufo' : 'twojo'} flex flex-col min-h-screen bg-white text-[#1E1E2E]`}>
      <Navbar activePath={location.pathname.replace('/','')} twojo={!isSpufoPath} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Twojo />} />
          <Route path="/spufo/" element={<Spufo />} />
          <Route path="/spufo-website-refactored/" element={<Twojo />} />
          <Route path="/about/" element={<TwojoAbout />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/impressum/" element={<Impressum />} />
          <Route path="/privacy/" element={<Privacy />} />
          <Route path="/datenschutz/" element={<Privacy />} />
          <Route
            path="/contact/"
            element={
              <div className="pt-12">
                <Contact twojo={true} />
              </div>
            }
          />
        </Routes>
      </main>
      <Footer twojo={!isSpufoPath} />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
