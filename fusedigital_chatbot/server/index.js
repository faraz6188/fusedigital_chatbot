const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI('AIzaSyAdlblRJbXyDCCgKtQzCWl1QwJpacra1HA');

async function fetchWebsiteContent() {
  try {
    const response = await axios.get('https://www.thefusedigital.com/');
    const $ = cheerio.load(response.data);
    
    // Extract content sections
    const content = {
      hero: $('.hero-section').text(),
      services: $('.services-section').text(),
      solutions: $('.solutions-section').text(),
      caseStudies: $('.case-studies').text(),
    };
    
    return content;
  } catch (error) {
    console.error('Error fetching website content:', error);
    return null;
  }
}

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const websiteContent = await fetchWebsiteContent();
    
    if (!websiteContent) {
      return res.status(500).json({ error: 'Failed to fetch website content' });
    }

    // Initialize model with the correct name
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `
      You are a helpful assistant for The Fuse Digital website. 
      Use the following website content to answer questions:
      ${JSON.stringify(websiteContent)}
      
      User question: ${message}
      
      Please provide a helpful response based on the website content.
      If the user shows interest in services, offer to collect their contact information.
      Keep responses concise and relevant to The Fuse Digital's services.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ response: text });
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