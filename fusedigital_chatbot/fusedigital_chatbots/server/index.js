const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI('YOUR_GEMINI_API_KEY');

// Read the local website content
const websiteContent = {
  services: {
    id: 'services',
    content: `
      Fuse Digital offers a comprehensive range of digital services:
      
      1. Web Development
      - Custom website development
      - E-commerce solutions
      - Responsive design
      - CMS integration
      
      2. Mobile App Development
      - iOS and Android apps
      - Cross-platform solutions
      - Native app development
      
      3. Digital Marketing
      - SEO optimization
      - Social media marketing
      - Content marketing
      - Email marketing
      
      4. UI/UX Design
      - User interface design
      - User experience optimization
      - Wireframing and prototyping
      - Design systems
      
      5. Cloud Solutions
      - Cloud migration
      - Cloud infrastructure
      - DevOps services
      - Cloud security
      
      6. Data Analytics
      - Business intelligence
      - Data visualization
      - Predictive analytics
      - Data integration
    `
  },
  about: {
    id: 'about',
    content: `
      Fuse Digital is a leading digital solutions provider, helping businesses transform their digital presence.
      We combine technical expertise with creative innovation to deliver exceptional results.
    `
  },
  work: {
    id: 'work',
    content: `
      Our Work:
      - Custom Software Development
      - Mobile App Development
      - Web Application Development
      - Digital Marketing Campaigns
      - UI/UX Design Projects
      - Cloud Migration Projects
    `
  },
  contact: {
    id: 'contact',
    content: `
      Contact us to discuss your project:
      - Email: info@thefusedigital.com
      - Phone: +1 (555) 123-4567
      - Address: 123 Digital Street, Tech City
    `
  }
};

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    // Initialize model with the correct name
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    // Determine which section to scroll to based on the message
    let scrollToSection = null;
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
      scrollToSection = 'services';
    } else if (lowerMessage.includes('about') || lowerMessage.includes('who are you')) {
      scrollToSection = 'about';
    } else if (lowerMessage.includes('work') || lowerMessage.includes('projects') || lowerMessage.includes('portfolio')) {
      scrollToSection = 'work';
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('get in touch')) {
      scrollToSection = 'contact';
    }
    
    const prompt = `
      You are a helpful assistant for The Fuse Digital website. 
      Use the following website content to answer questions:
      ${JSON.stringify(websiteContent)}
      
      User question: ${message}
      
      Please provide a helpful response based on the website content.
      If the user shows interest in services, offer to collect their contact information.
      Keep responses concise and relevant to The Fuse Digital's services.
      If asked about specific services, provide detailed information from the services section.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ 
      response: text,
      scrollToSection: scrollToSection
    });
  } catch (error) {
    console.error('Error processing chat request:', error);
    res.status(500).json({ 
      error: 'Failed to process request',
      details: error.message 
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 