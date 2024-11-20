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
import EvidenceCollection from './components/spufo/EvidenceCollection';
import ForensicSuccess from './components/spufo/ForensicSuccess';
import RulerRecognition from './components/spufo/RulerRecognition';
import { usePageMeta } from './hooks/usePageMeta';
import MobileDevelopment from './components/twojo/mobile/MobileDevelopment';
import BusinessApplication from './components/twojo/applications/BusinessApplication';
import Games from './components/twojo/games/Games';
import ImageEditing from './components/spufo/ImageEditing';

function App() {
  const location = useLocation();

  // Check if the current path starts with "/spufo" to set twojo to false
  const isSpufoPath = location.pathname === '/spufo' || location.pathname.startsWith('/spufo/');
  // Use the custom hook to handle page meta
  usePageMeta(isSpufoPath, location.pathname);

  // Keep the full path for spufo routes, remove leading slash for others
  const activePath = isSpufoPath ? location.pathname : location.pathname.replace('/', '');

  return (
    <div className={`${isSpufoPath ? 'spufo' : 'twojo'} flex flex-col min-h-screen bg-white text-[#1E1E2E]`}>
      <Navbar activePath={activePath} twojo={!isSpufoPath} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Twojo />} />
          <Route path="/spufo/" element={<Spufo />} />
          <Route path="/spufo/evidence-collection/" element={<EvidenceCollection />} />
          <Route path="/spufo/forensic-success/" element={<ForensicSuccess />} />
          <Route path="/spufo/image-editing/" element={<ImageEditing />} />
          <Route path="/spufo/ruler-recognition/" element={<RulerRecognition />} />
          <Route path="/" element={<Twojo />} />
          <Route path="/about/" element={<TwojoAbout />} />
          <Route path="/mobile/" element={<MobileDevelopment />} />
          <Route path="/application/" element={<BusinessApplication />} />
          <Route path="/interactive/" element={<Games />} />
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
