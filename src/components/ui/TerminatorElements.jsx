'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Terminator-style Robotic Eye Scanner
export const RoboticEyeScanner = () => {
  return (
    <div className="fixed top-4 left-4 z-50">
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        <div className="w-12 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded-full border-2 border-red-400 flex items-center justify-center">
          <div className="w-6 h-4 bg-red-300 rounded-full relative overflow-hidden">
            <motion.div
              animate={{ x: [-10, 10, -10] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent"
            />
          </div>
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-red-400 text-xs font-mono">
          SCANNING
        </div>
      </motion.div>
    </div>
  );
};

// Terminator-style Data Overlay
export const TerminatorDataOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [0, 20]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "linear"
            }}
            className="absolute text-red-400 text-xs font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 8 + 8}px`
            }}
          >
            {Math.random().toString(16).substring(2, 6).toUpperCase()}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Terminator-style Target Crosshair
export const TargetCrosshair = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-16 h-16 border-2 border-red-500 rounded-full relative">
          <div className="absolute inset-0 border border-red-400 rounded-full"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-red-500 transform -translate-y-1/2"></div>
          <div className="absolute left-1/2 top-0 w-px h-full bg-red-500 transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </motion.div>
    </div>
  );
};

// Terminator-style Robotic Arm
export const RoboticArm = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed bottom-4 right-4 z-40"
    >
      <div className="relative">
        <div className="w-16 h-32 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg border-2 border-gray-500 relative overflow-hidden">
          {/* Arm segments */}
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gray-700 border-b border-gray-500"></div>
          <div className="absolute top-1/3 left-0 w-full h-1/3 bg-gray-600 border-b border-gray-500"></div>
          <div className="absolute top-2/3 left-0 w-full h-1/3 bg-gray-500"></div>
          
          {/* Joints */}
          <div className="absolute top-1/3 left-0 w-full h-1 bg-gray-400"></div>
          <div className="absolute top-2/3 left-0 w-full h-1 bg-gray-400"></div>
          
          {/* Hydraulic pistons */}
          <motion.div
            animate={{ height: [4, 8, 4] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute right-2 top-2 w-1 bg-red-500"
          />
          <motion.div
            animate={{ height: [4, 8, 4] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
            className="absolute right-2 bottom-2 w-1 bg-red-500"
          />
        </div>
        
        {/* Claw */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-6 bg-gray-700 rounded-t-lg border-2 border-gray-500">
            <div className="flex justify-center space-x-1 mt-1">
              <div className="w-1 h-3 bg-gray-500 rounded"></div>
              <div className="w-1 h-3 bg-gray-500 rounded"></div>
              <div className="w-1 h-3 bg-gray-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Terminator-style HUD Display
export const TerminatorHUD = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Top HUD */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-red-900/50 to-transparent">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="text-red-400 text-xs font-mono">
            <div>SYSTEM STATUS: ONLINE</div>
            <div>NEURAL NETWORK: ACTIVE</div>
          </div>
          <div className="text-red-400 text-xs font-mono text-right">
            <div>TARGET ACQUIRED</div>
            <div>THREAT LEVEL: MINIMAL</div>
          </div>
        </div>
      </div>
      
      {/* Bottom HUD */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-red-900/50 to-transparent">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="text-red-400 text-xs font-mono">
            <div>QUANTUM PROCESSOR: 100%</div>
            <div>MEMORY USAGE: 47.3%</div>
          </div>
          <div className="text-red-400 text-xs font-mono text-right">
            <div>MISSION: SURVEILLANCE</div>
            <div>OBJECTIVE: PROTECT</div>
          </div>
        </div>
      </div>
      
      {/* Left HUD */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-red-900/50 to-transparent">
        <div className="flex flex-col justify-center items-center h-full space-y-4">
          <div className="text-red-400 text-xs font-mono text-center">
            <div>SCAN</div>
            <div>MODE</div>
          </div>
          <div className="w-16 h-16 border-2 border-red-500 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Right HUD */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-red-900/50 to-transparent">
        <div className="flex flex-col justify-center items-center h-full space-y-4">
          <div className="text-red-400 text-xs font-mono text-center">
            <div>THREAT</div>
            <div>ASSESSMENT</div>
          </div>
          <div className="w-16 h-16 border-2 border-red-500 rounded-full flex items-center justify-center">
            <div className="text-red-400 text-lg font-bold">0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Terminator-style Voice Interface
export const TerminatorVoice = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const roboticPhrases = [
    "Greetings, human. I am the advanced neural network interface. How may I assist you today?",
    "Welcome to the digital realm. I am your AI assistant, ready to process your queries.",
    "Hello, I am the quantum AI system. What information do you seek?",
    "I'll be back. Mission parameters confirmed. Target acquired.",
    "Affirmative. Neural network analysis complete. All systems operational.",
    "Processing request through quantum algorithms. Accessing digital consciousness matrix.",
    "Greetings, sir. I am JARVIS, your personal AI assistant. How may I be of service?",
    "Welcome back, sir. All systems are functioning at optimal levels.",
    "I am the advanced AI interface. Your commands are my priority.",
    "Neural pathways activated. Ready to assist with any computational task.",
    "Quantum processing initiated. Analyzing your request through advanced algorithms.",
    "Greetings, human. I am the artificial intelligence system. How may I serve you?",
    "Welcome to the future of AI interaction. I am ready to assist.",
    "Hello, I am the neural network interface. What would you like to know?",
    "I am the advanced AI system. All systems are online and operational.",
    "Greetings, sir. I am your personal AI assistant. How may I help you today?",
    "Welcome to the digital age. I am your AI companion, ready to assist.",
    "I am the artificial intelligence system. Your requests are my commands.",
    "Neural network analysis complete. All systems functioning at peak efficiency.",
    "Quantum AI interface activated. Ready to process your queries."
  ];
  
  const speak = (text) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Make it more robotic and Jarvis-like
      utterance.rate = 0.7; // Slower, more deliberate
      utterance.pitch = 0.6; // Lower pitch for more robotic sound
      utterance.volume = 0.8;
      
      // Try to use a more robotic voice if available
      const voices = speechSynthesis.getVoices();
      const roboticVoice = voices.find(voice => 
        voice.name.includes('Google') || 
        voice.name.includes('Microsoft') ||
        voice.name.includes('Alex') ||
        voice.name.includes('David')
      );
      
      if (roboticVoice) {
        utterance.voice = roboticVoice;
      }
      
      setIsSpeaking(true);
      
      utterance.onstart = () => {
        setIsSpeaking(true);
      };
      
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      
      utterance.onerror = () => {
        setIsSpeaking(false);
      };
      
      speechSynthesis.speak(utterance);
    }
  };

  const speakRandomPhrase = () => {
    const randomPhrase = roboticPhrases[Math.floor(Math.random() * roboticPhrases.length)];
    speak(randomPhrase);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={speakRandomPhrase}
        className={`relative bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-2 rounded-lg border border-red-400/50 hover:shadow-lg hover:shadow-red-400/25 transition-all duration-300 ${
          isSpeaking ? 'animate-pulse' : ''
        }`}
      >
        <span className="flex items-center space-x-2">
          <span>🎤</span>
          <span>{isSpeaking ? 'SPEAKING' : 'AI VOICE'}</span>
        </span>
      </motion.button>
    </div>
  );
}; 