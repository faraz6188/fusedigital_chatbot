
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-fuse-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="flex items-center mb-4">
              <span className="text-3xl font-bold">Fuse<span className="text-fuse-accent">Digital</span></span>
            </a>
            <p className="text-fuse-light/80 mb-6">
              Creating innovative digital experiences that drive business growth and user engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-fuse-light hover:text-fuse-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-fuse-light hover:text-fuse-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-fuse-light hover:text-fuse-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-fuse-light hover:text-fuse-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-fuse-light hover:text-fuse-accent transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-fuse-light/80 hover:text-fuse-accent transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-fuse-light/80 hover:text-fuse-accent transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-fuse-light/80 hover:text-fuse-accent transition-colors">
                  Brand Identity
                </a>
              </li>
              <li>
                <a href="#" className="text-fuse-light/80 hover:text-fuse-accent transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-fuse-light/80 hover:text-fuse-accent transition-colors">
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-fuse-light/80 hover:text-fuse-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-fuse-light/80 hover:text-fuse-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-fuse-light/80 hover:text-fuse-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="text-fuse-light/80 hover:text-fuse-accent transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-fuse-light/80 hover:text-fuse-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-fuse-light/80 mb-4">
              Subscribe to our newsletter to receive updates and insights.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-4 py-2 rounded-l-md focus:outline-none text-fuse-dark"
                />
                <button 
                  type="submit" 
                  className="bg-fuse-accent hover:bg-fuse-accent/90 text-white px-4 py-2 rounded-r-md focus:outline-none"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-sm text-fuse-light/70">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-fuse-light/80 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Fuse Digital. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-fuse-light/80 hover:text-fuse-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-fuse-light/80 hover:text-fuse-accent transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-fuse-light/80 hover:text-fuse-accent transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
