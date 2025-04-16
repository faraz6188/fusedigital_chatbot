# Fuse Digital Chatbot

A dynamic AI chatbot for The Fuse Digital website that uses the Gemini API to provide intelligent responses based on the website's content.

## Features

- Auto-launching chat widget
- Dynamic content extraction from thefusedigital.com
- Conversational responses using Gemini API
- Contact form integration
- Modern UI with purple accents matching the website's theme

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. In a separate terminal, start the backend server:
   ```bash
   npm run server
   ```

## Project Structure

- `src/` - Frontend React application
  - `components/` - React components
  - `App.js` - Main application component
  - `App.css` - Styles
- `server/` - Backend Express server
  - `index.js` - Server implementation

## Technologies Used

- Frontend: React.js + Tailwind CSS
- Backend: Node.js + Express.js
- AI: Gemini API
- Content Parsing: Cheerio.js

## Environment Variables

The Gemini API key is currently hardcoded in the server code. For production use, it's recommended to move it to an environment variable.

## Deployment

For production deployment:
1. Build the React application:
   ```bash
   npm run build
   ```
2. Deploy the built files and server to your hosting platform

## License

MIT 