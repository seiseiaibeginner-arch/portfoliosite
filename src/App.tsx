
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Works } from './components/Works';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navigation />
      <main>
        <Hero />
        <Works />
      </main>
      <Footer />
    </div>
  );
}

export default App;
