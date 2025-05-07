
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={isScrolled ? 'nav-scrolled' : 'nav-transparent'}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s',
        padding: isScrolled ? '1rem 0' : '1.5rem 0'
      }}
    >
      <div className="section-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ flexShrink: 0 }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--fuse-dark)' }}>
                Fuse<span style={{ color: 'var(--fuse-accent)' }}>Digital</span>
              </span>
            </a>
          </div>
          
          {/* Desktop navigation */}
          <nav style={{ display: 'none', gap: '2.5rem' }}>
            <a href="#services" className="nav-link">Services</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          
          <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }}>
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div style={{ display: 'block' }}>
            <button 
              onClick={toggleMobileMenu}
              style={{ 
                color: 'var(--fuse-dark)', 
                border: 'none', 
                background: 'none', 
                cursor: 'pointer' 
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div style={{ 
          display: 'block', 
          backgroundColor: 'white', 
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}>
          <div style={{ padding: '0.5rem 0.5rem 0.75rem' }}>
            <a 
              href="#services" 
              style={{ 
                display: 'block', 
                padding: '0.5rem 0.75rem', 
                fontSize: '1rem', 
                fontWeight: 500,
                color: 'var(--fuse-dark)',
                textDecoration: 'none'
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#work" 
              style={{ 
                display: 'block', 
                padding: '0.5rem 0.75rem', 
                fontSize: '1rem', 
                fontWeight: 500,
                color: 'var(--fuse-dark)',
                textDecoration: 'none'
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </a>
            <a 
              href="#about" 
              style={{ 
                display: 'block', 
                padding: '0.5rem 0.75rem', 
                fontSize: '1rem', 
                fontWeight: 500,
                color: 'var(--fuse-dark)',
                textDecoration: 'none'
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              style={{ 
                display: 'block', 
                padding: '0.5rem 0.75rem', 
                fontSize: '1rem', 
                fontWeight: 500,
                color: 'var(--fuse-dark)',
                textDecoration: 'none'
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div style={{ marginTop: '1rem' }}>
              <a 
                href="#contact" 
                className="btn-primary"
                style={{ 
                  width: '100%', 
                  justifyContent: 'center', 
                  display: 'inline-flex',
                  textDecoration: 'none'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
