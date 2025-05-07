import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

interface Message {
  text: string;
  isUser: boolean;
  scrollToSection?: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setMessages([{ text: 'Hi there! How can I assist you today?', isUser: false }]);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = { text: inputMessage, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:3001/api/chat', {
        message: inputMessage
      });

      const botMessage: Message = { 
        text: response.data.response, 
        isUser: false,
        scrollToSection: response.data.scrollToSection
      };
      setMessages(prev => [...prev, botMessage]);

      // Scroll to the section if specified
      if (response.data.scrollToSection) {
        setTimeout(() => {
          scrollToSection(response.data.scrollToSection);
        }, 500);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        text: 'Sorry, I encountered an error. Please try again.', 
        isUser: false 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999]" style={{ position: 'fixed', bottom: '1rem', right: '1rem', zIndex: 9999 }}>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-fuse-accent text-white rounded-full p-4 shadow-lg hover:bg-fuse-accent-90 transition-colors"
          style={{ backgroundColor: 'var(--fuse-accent)', color: 'white', padding: '1rem', borderRadius: '9999px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-96" style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', width: '24rem' }}>
          <div className="bg-fuse-accent text-white p-4 rounded-t-lg flex justify-between items-center" style={{ backgroundColor: 'var(--fuse-accent)', color: 'white', padding: '1rem', borderRadius: '0.5rem 0.5rem 0 0' }}>
            <h3 className="font-semibold">Fuse Digital Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          
          <div className="h-96 overflow-y-auto p-4" style={{ height: '24rem', overflowY: 'auto', padding: '1rem' }}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.isUser ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-fuse-accent text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                  style={{
                    backgroundColor: message.isUser ? 'var(--fuse-accent)' : '#f3f4f6',
                    color: message.isUser ? 'white' : '#1f2937',
                    padding: '0.75rem',
                    borderRadius: '0.5rem'
                  }}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-fuse-accent border-t-transparent"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t" style={{ padding: '1rem', borderTop: '1px solid #e5e7eb' }}>
            <div className="flex">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuse-accent"
                style={{
                  flex: 1,
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem 0 0 0.5rem',
                  padding: '0.5rem 1rem',
                  outline: 'none'
                }}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className="bg-fuse-accent text-white px-4 py-2 rounded-r-lg hover:bg-fuse-accent-90 transition-colors"
                style={{
                  backgroundColor: 'var(--fuse-accent)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0 0.5rem 0.5rem 0',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget; 