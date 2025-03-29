import { useRef, useEffect } from 'react';
import './App.css';

function App() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      {/* Hero Section */}
      <section 
        ref={sectionRef}
        className="hero animate-on-scroll"
      >
        <div className="hero-content">
          <h1>Эволюционный поиск коформеров</h1>
          <p>Оптимизация механических свойств ко-кристаллов теофиллина</p>
          <button className="cta-button">Узнать больше</button>
        </div>
      </section>
    </div>
  );
}

export default App;