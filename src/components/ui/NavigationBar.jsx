'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const NavigationBar = () => {
  const [isAIBotOpen, setIsAIBotOpen] = useState(false);
  const [aiMessage, setAiMessage] = useState('');
  const [aiResponses, setAiResponses] = useState([]);

  const aiResponseData = {
    greeting: [
      "Greetings, human. I am the neural network interface. How may I assist you today?",
      "Welcome to the digital realm. I am your AI assistant, ready to process your queries.",
      "Hello, I am the quantum AI system. What information do you seek?"
    ],
    help: [
      "I can help you navigate the website, explain features, or answer questions about our AI technology.",
      "My capabilities include: website navigation, feature explanations, technical support, and general assistance.",
      "I'm here to help with any questions about our platform, technology, or services."
    ],
    technology: [
      "Our platform uses advanced neural networks, quantum computing algorithms, and 8K visual processing.",
      "We employ cutting-edge AI technology including machine learning, computer vision, and natural language processing.",
      "The system utilizes state-of-the-art artificial intelligence with real-time data processing capabilities."
    ],
    features: [
      "Key features include: 8K visual effects, 4DX holographic displays, neural network visualization, and quantum AI interface.",
      "Our platform offers: futuristic UI design, interactive AI chat, theme customization, and advanced animations.",
      "Features: Dark/Bright/Night vision modes, AI assistant, neural particles, holographic effects, and responsive design."
    ],
    default: [
      "Processing your request through neural networks...",
      "Analyzing query with quantum algorithms...",
      "Accessing the digital consciousness matrix...",
      "Generating personalized insights from the AI collective...",
      "Exploring the depths of artificial intelligence for you...",
      "Computing response through advanced neural pathways...",
      "Quantum processing your request...",
      "Neural network analysis complete..."
    ]
  };

  const getAIResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('greetings')) {
      return aiResponseData.greeting[Math.floor(Math.random() * aiResponseData.greeting.length)];
    } else if (lowerMessage.includes('help') || lowerMessage.includes('what can you do')) {
      return aiResponseData.help[Math.floor(Math.random() * aiResponseData.help.length)];
    } else if (lowerMessage.includes('technology') || lowerMessage.includes('ai') || lowerMessage.includes('neural')) {
      return aiResponseData.technology[Math.floor(Math.random() * aiResponseData.technology.length)];
    } else if (lowerMessage.includes('feature') || lowerMessage.includes('what') || lowerMessage.includes('show')) {
      return aiResponseData.features[Math.floor(Math.random() * aiResponseData.features.length)];
    } else {
      return aiResponseData.default[Math.floor(Math.random() * aiResponseData.default.length)];
    }
  };

  const handleAISubmit = (e) => {
    e.preventDefault();
    if (aiMessage.trim()) {
      const userMessage = aiMessage;
      const aiResponse = getAIResponse(aiMessage);
      
      setAiResponses(prev => [...prev, 
        { type: 'user', message: userMessage },
        { type: 'ai', message: aiResponse }
      ]);
      setAiMessage('');
    }
  };

  return (
    <>
      {/* Futuristic Navigation Bar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-2xl border-b border-cyan-400/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with Holographic Effect */}
            <motion.a 
              href="/"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur-sm opacity-75"></div>
                <div className="relative bg-black/80 rounded-lg px-3 py-1 border border-cyan-400/50">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                    AdMyBrand AI
                  </h1>
                </div>
              </div>
            </motion.a>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {[
                { href: '/', label: 'Home' },
                { href: '/ui-demo', label: 'UI Demo' },
                { href: '/forms-demo', label: 'Forms' },
                { href: '/blog', label: 'Blog' },
                { href: '/shop', label: 'Shop' }
              ].map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ scale: 1.1, color: '#00ffff' }}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
                >
                  {link.label}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300 group-hover:w-full"></div>
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle and AI Bot Button */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAIBotOpen(!isAIBotOpen)}
                className="relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg border border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>AI Assistant</span>
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* AI Bot Interface */}
      <AnimatePresence>
        {isAIBotOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 right-4 z-50 w-96 bg-black/90 backdrop-blur-2xl border border-cyan-400/50 rounded-lg shadow-2xl shadow-cyan-400/25"
          >
            {/* AI Bot Header */}
            <div className="p-4 border-b border-cyan-400/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">AI</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Neural Assistant</h3>
                    <p className="text-cyan-400 text-xs">Quantum AI Interface</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsAIBotOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </motion.button>
              </div>
            </div>

            {/* AI Chat Area */}
            <div className="p-4 h-64 overflow-y-auto">
              {aiResponses.length === 0 && (
                <div className="text-center text-gray-400 text-sm mb-4">
                  <p>🤖 AI Assistant Online</p>
                  <p>Ask me anything about the website or AI technology!</p>
                </div>
              )}
              {aiResponses.map((response, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: response.type === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mb-4"
                >
                  <div className={`rounded-lg p-3 ${
                    response.type === 'user' 
                      ? 'bg-cyan-900/50 border border-cyan-400/30 ml-8' 
                      : 'bg-purple-900/50 border border-purple-400/30 mr-8'
                  }`}>
                    <p className={`text-sm ${
                      response.type === 'user' ? 'text-cyan-300' : 'text-purple-300'
                    }`}>
                      {response.message}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* AI Input */}
            <form onSubmit={handleAISubmit} className="p-4 border-t border-cyan-400/30">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={aiMessage}
                  onChange={(e) => setAiMessage(e.target.value)}
                  placeholder="Ask the AI anything..."
                  className="flex-1 bg-black/50 border border-cyan-400/30 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
                >
                  Send
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationBar; 