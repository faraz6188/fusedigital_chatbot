
import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectProps {
  image: string;
  title: string;
  category: string;
  delay: number;
}

const ProjectCard: React.FC<ProjectProps> = ({ image, title, category, delay }) => {
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
    <div ref={cardRef} className="project-card">
      <img src={image} alt={title} style={{ width: '100%', height: '16rem', objectFit: 'cover' }} />
      <div className="project-overlay">
        <div style={{ textAlign: 'center', color: 'white', padding: '1rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{title}</h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--fuse-light)', marginBottom: '1rem' }}>{category}</p>
          <a 
            href="#" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              color: 'white', 
              border: '1px solid rgba(255, 255, 255, 0.3)', 
              padding: '0.5rem 1rem', 
              borderRadius: '0.25rem', 
              textDecoration: 'none',
              transition: 'background-color 0.2s, color 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = 'var(--fuse-dark)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'white';
            }}
          >
            View Project <ExternalLink size={16} style={{ marginLeft: '0.5rem' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

const WorkSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
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
    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = '0';
      subtitleRef.current.style.transform = 'translateY(10px)';
      observer.observe(subtitleRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
    };
  }, []);

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Modern E-commerce Platform",
      category: "Web Development",
      delay: 100
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Financial Advisory Rebrand",
      category: "Brand Identity",
      delay: 200
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Tech Startup Dashboard",
      category: "UI/UX Design",
      delay: 300
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Healthcare Mobile App",
      category: "App Development",
      delay: 400
    },
    {
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Real Estate Marketing",
      category: "Digital Marketing",
      delay: 500
    },
    {
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Architectural Portfolio",
      category: "Web Design",
      delay: 600
    }
  ];

  return (
    <section id="work" className="services-section" style={{ backgroundColor: 'var(--fuse-light)' }}>
      <div className="section-container">
        <div className="section-header">
          <h2 ref={titleRef} className="section-title">Our <span className="accent-text">Work</span></h2>
          <p ref={subtitleRef} className="section-subtitle">
            Explore our portfolio of successful projects delivered for clients across various industries.
          </p>
        </div>
        <div className="services-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
              delay={project.delay}
            />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="#contact" className="btn-primary">
            Start Your Project <ExternalLink size={18} style={{ marginLeft: '0.5rem' }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
