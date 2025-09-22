import { BrowserRouter as Router } from 'react-router-dom';
import { SEOProvider } from './seo/SEOProvider';
import Home from './pages/Home';

function App() {
  return (
    <SEOProvider>
      <Router>
        <div className="overflow-x-hidden w-full">
          <Home />
        </div>
      </Router>
    </SEOProvider>
  );
}

export default App;