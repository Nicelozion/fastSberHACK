import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const sections = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    sections.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el);
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img 
            src="https://optim.tildacdn.com/tild3265-3364-4830-b934-303662633736/-/resize/386x/-/format/webp/__.png.webp" 
            alt="X Sber Logo" 
            className="logo"
          />
        </div>
        <h1 className="title">It's a beautiful life o-o-o</h1>
      </header>

      {/* Hero Section */}
      <section 
        ref={addToRefs}
        className="section hero animate-on-scroll"
      >
        <div className="hero-content">
          <h2>Добро пожаловать в нашу команду</h2>
          <p>Мы создаём инновационные решения для прекрасной жизни</p>
        </div>
        <div className="hero-bg"></div>
      </section>

      {/* About Section */}
      <section 
        ref={addToRefs}
        className="section about animate-on-scroll"
      >
        <h2>О нас</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>Миссия</h3>
            <p>Делать жизнь людей лучше через технологии</p>
          </div>
          <div className="about-card">
            <h3>Ценности</h3>
            <p>Инновации, Качество, Ответственность</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={addToRefs}
        className="section team animate-on-scroll"
      >
        <h2>Наша команда</h2>
        <div className="team-members">
          <div className="member">
            <div className="member-avatar"></div>
            <h4>Алексей</h4>
            <p>Frontend Developer</p>
          </div>
          <div className="member">
            <div className="member-avatar"></div>
            <h4>Мария</h4>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2023 It's a beautiful life o-o-o</p>
      </footer>
    </div>
  );
}

export default App;