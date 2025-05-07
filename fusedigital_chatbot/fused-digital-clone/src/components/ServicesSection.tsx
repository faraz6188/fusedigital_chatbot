
import React, { useEffect, useRef } from 'react';
import { Layout, Code, Palette, LineChart, Globe, Zap } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, delay }) => {
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
    <div ref={cardRef} className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
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

  const services = [
    {
      icon: <Layout size={32} />,
      title: "UI/UX Design",
      description: "Intuitive and engaging user experiences that captivate your audience and enhance usability.",
      delay: 100
    },
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description: "Custom websites and applications built with modern technologies for optimal performance.",
      delay: 200
    },
    {
      icon: <Palette size={32} />,
      title: "Brand Identity",
      description: "Distinctive brand identities that communicate your values and connect with your audience.",
      delay: 300
    },
    {
      icon: <LineChart size={32} />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that increase visibility and drive measurable results.",
      delay: 400
    },
    {
      icon: <Globe size={32} />,
      title: "SEO Optimization",
      description: "Data-driven SEO strategies that improve rankings and increase organic traffic.",
      delay: 500
    },
    {
      icon: <Zap size={32} />,
      title: "Performance Optimization",
      description: "Technical improvements that enhance speed, security, and overall performance.",
      delay: 600
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <div className="section-header">
          <h2 ref={titleRef} className="section-title">Our <span className="accent-text">Services</span></h2>
          <p ref={subtitleRef} className="section-subtitle">
            We offer comprehensive digital solutions to help your business thrive in the online landscape.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
