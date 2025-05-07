
import React, { useEffect, useRef } from 'react';
import { CheckCircle, Users, Award, Heart } from 'lucide-react';

interface StatProps {
  count: string;
  label: string;
  delay: number;
}

const StatCard: React.FC<StatProps> = ({ count, label, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && cardRef.current) {
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
                cardRef.current.style.opacity = '1';
                cardRef.current.style.transform = 'translateY(0)';
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      cardRef.current.style.opacity = '0';
      cardRef.current.style.transform = 'translateY(10px)';
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={cardRef} style={{ textAlign: 'center' }}>
      <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'var(--fuse-accent)', marginBottom: '0.5rem' }}>{count}</p>
      <p style={{ color: 'var(--fuse-muted)' }}>{label}</p>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentLeftRef = useRef<HTMLDivElement>(null);
  const contentRightRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            let transform = 'translateY(0)';
            
            if (target === contentLeftRef.current) {
              transform = 'translateX(0)';
              target.style.transform = transform;
            } else if (target === contentRightRef.current) {
              transform = 'translateX(0)';
              target.style.transform = transform;
            }
            
            target.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            target.style.opacity = '1';
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      titleRef.current.style.opacity = '0';
      titleRef.current.style.transform = 'translateY(10px)';
      observer.observe(titleRef.current);
    }
    
    if (contentLeftRef.current) {
      contentLeftRef.current.style.opacity = '0';
      contentLeftRef.current.style.transform = 'translateX(-20px)';
      observer.observe(contentLeftRef.current);
    }
    
    if (contentRightRef.current) {
      contentRightRef.current.style.opacity = '0';
      contentRightRef.current.style.transform = 'translateX(20px)';
      observer.observe(contentRightRef.current);
    }
    
    if (imageRef.current) {
      imageRef.current.style.opacity = '0';
      imageRef.current.style.transform = 'translateY(10px)';
      observer.observe(imageRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (contentLeftRef.current) observer.unobserve(contentLeftRef.current);
      if (contentRightRef.current) observer.unobserve(contentRightRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const stats = [
    { count: "150+", label: "Projects Completed", delay: 100 },
    { count: "45+", label: "Happy Clients", delay: 200 },
    { count: "10+", label: "Years Experience", delay: 300 },
    { count: "15+", label: "Team Members", delay: 400 }
  ];

  return (
    <section id="about" className="services-section">
      <div className="section-container">
        <div className="section-header">
          <h2 ref={titleRef} className="section-title">About <span className="accent-text">Us</span></h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '3rem', 
          alignItems: 'center',
          marginBottom: '4rem'
        }}>
          <div ref={contentLeftRef}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              We're a team of passionate digital creators
            </h3>
            <p style={{ color: 'var(--fuse-muted)', marginBottom: '1.5rem' }}>
              Founded in 2013, Fuse Digital has grown from a small web design studio to a full-service digital agency serving clients across the globe. Our mission is to help businesses leverage digital technologies to achieve their goals and realize their full potential.
            </p>
            <p style={{ color: 'var(--fuse-muted)', marginBottom: '1.5rem' }}>
              What sets us apart is our commitment to understanding each client's unique needs and delivering customized solutions that drive real business results. We combine creativity, technical expertise, and strategic thinking to create digital experiences that make an impact.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <CheckCircle style={{ color: 'var(--fuse-accent)', marginRight: '0.5rem', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                <span>Strategic approach to digital solutions</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <CheckCircle style={{ color: 'var(--fuse-accent)', marginRight: '0.5rem', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                <span>Collaborative partnership with clients</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <CheckCircle style={{ color: 'var(--fuse-accent)', marginRight: '0.5rem', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                <span>Focus on measurable results and ROI</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <CheckCircle style={{ color: 'var(--fuse-accent)', marginRight: '0.5rem', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                <span>Continuous learning and innovation</span>
              </li>
            </ul>
          </div>
          <div ref={contentRightRef}>
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Our Team" 
              style={{ 
                borderRadius: '0.5rem', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', 
                width: '100%'
              }}
            />
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '2rem',
          marginTop: '4rem' 
        }}>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              count={stat.count}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>

        <div style={{ 
          marginTop: '4rem', 
          backgroundColor: 'var(--fuse-dark)', 
          color: 'white', 
          borderRadius: '0.5rem', 
          padding: '2rem'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '2rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <Users size={40} style={{ margin: '0 auto 1rem', color: 'var(--fuse-accent)' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Collaborative</h3>
              <p style={{ color: 'rgba(248, 249, 250, 0.8)' }}>We work closely with our clients, treating their goals as our own.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Award size={40} style={{ margin: '0 auto 1rem', color: 'var(--fuse-accent)' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Excellence</h3>
              <p style={{ color: 'rgba(248, 249, 250, 0.8)' }}>We hold ourselves to the highest standards in everything we do.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Heart size={40} style={{ margin: '0 auto 1rem', color: 'var(--fuse-accent)' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Passionate</h3>
              <p style={{ color: 'rgba(248, 249, 250, 0.8)' }}>We're genuinely passionate about creating meaningful digital experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
