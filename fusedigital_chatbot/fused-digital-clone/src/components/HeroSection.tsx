
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // JavaScript animations instead of CSS classes
    const animateElement = (element: HTMLElement, delay: number) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        element.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, delay);
    };

    if (titleRef.current) {
      animateElement(titleRef.current, 0);
    }
    
    if (subtitleRef.current) {
      animateElement(subtitleRef.current, 200);
    }
    
    if (ctaRef.current) {
      animateElement(ctaRef.current, 400);
    }

    // Animate the background pattern
    const background = document.querySelector('.bg-pattern') as HTMLElement;
    if (background) {
      setTimeout(() => {
        background.style.opacity = '0.4';
      }, 600);
    }
  }, []);

  return (
    <section className="hero-section">
      <div 
        className="bg-pattern"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: '0',
          transition: 'opacity 0.6s ease-out'
        }}
      />
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 
            ref={titleRef}
            className="hero-title"
          >
            Crafting Digital Experiences That <span className="accent-text">Inspire & Engage</span>
          </h1>
          <p 
            ref={subtitleRef}
            className="hero-subtitle"
          >
            We're a digital agency that helps businesses grow through strategic design, development, and digital marketing solutions.
          </p>
          <div 
            ref={ctaRef}
            className="hero-cta"
          >
            <a href="#contact" className="btn-primary">
              Start Your Project <ArrowRight className="arrow-icon" size={18} />
            </a>
            <a href="#work" className="btn-secondary">
              View Our Work
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <a 
          href="#services" 
          className="scroll-button"
          onClick={(e) => {
            e.preventDefault();
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5"/>
            <path d="M7 6l5 5 5-5"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
