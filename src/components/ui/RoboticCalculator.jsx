'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RoboticCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Voice synthesis setup
  useEffect(() => {
    if ('speechSynthesis' in window) {
      // Set default voice to a more robotic one if available
      const voices = speechSynthesis.getVoices();
      const roboticVoice = voices.find(voice => 
        voice.name.includes('Microsoft David') || 
        voice.name.includes('Google UK English Male') ||
        voice.name.includes('Alex')
      );
      if (roboticVoice) {
        window.roboticVoice = roboticVoice;
      }
    }
  }, []);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 0.8;
      utterance.volume = 0.7;
      if (window.roboticVoice) {
        utterance.voice = window.roboticVoice;
      }
      setIsSpeaking(true);
      speechSynthesis.speak(utterance);
      utterance.onend = () => setIsSpeaking(false);
    }
  };

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
    speak('Calculator cleared');
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(newValue);
      speak(`Result: ${newValue}`);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '%':
        return firstValue % secondValue;
      case '^':
        return Math.pow(firstValue, secondValue);
      default:
        return secondValue;
    }
  };

  const equals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
      speak(`Equals ${newValue}`);
    }
  };

  const squareRoot = () => {
    const inputValue = parseFloat(display);
    const result = Math.sqrt(inputValue);
    setDisplay(String(result));
    speak(`Square root of ${inputValue} is ${result}`);
  };

  const square = () => {
    const inputValue = parseFloat(display);
    const result = inputValue * inputValue;
    setDisplay(String(result));
    speak(`${inputValue} squared is ${result}`);
  };

  const reciprocal = () => {
    const inputValue = parseFloat(display);
    const result = 1 / inputValue;
    setDisplay(String(result));
    speak(`Reciprocal of ${inputValue} is ${result}`);
  };

  const negate = () => {
    const inputValue = parseFloat(display);
    const result = -inputValue;
    setDisplay(String(result));
    speak(`Negative ${inputValue} is ${result}`);
  };

  const buttons = [
    { label: 'C', action: clear, className: 'bg-red-600 hover:bg-red-500' },
    { label: '±', action: negate, className: 'bg-gray-600 hover:bg-gray-500' },
    { label: '%', action: () => performOperation('%'), className: 'bg-gray-600 hover:bg-gray-500' },
    { label: '÷', action: () => performOperation('÷'), className: 'bg-orange-600 hover:bg-orange-500' },
    { label: '7', action: () => inputDigit(7), className: 'bg-gray-800 hover:bg-gray-700' },
    { label: '8', action: () => inputDigit(8), className: 'bg-gray-800 hover:bg-gray-700' },
    { label: '9', action: () => inputDigit(9), className: 'bg-gray-800 hover:bg-gray-700' },
    { label: '×', action: () => performOperation('×'), className: 'bg-orange-600 hover:bg-orange-500' },
    { label: '4', action: () => inputDigit(4), className: 'bg-gray-800 hover:bg-gray-700' },
    { label: '5', action: () => inputDigit(5), className: 'bg-gray-800 hover:bg-gray-700' },
    { label: '6', action: () => inputDigit(6), className: 'bg-gray-800 hover:bg-gray-700' },
    { label: '-', action: () => performOperation('-'), className: 'bg-orange-600 hover:bg-orange-500' },
    { label: '1', action: () => inputDigit(1), className: 'bg-gray-800 hover:bg-gray-700' },
    { label: '2', action: () => inputDigit(2), className: 'bg-gray-800 hover:bg-gray-700' },
    { label: '3', action: () => inputDigit(3), className: 'bg-gray-800 hover:bg-gray-700' },
    { label: '+', action: () => performOperation('+'), className: 'bg-orange-600 hover:bg-orange-500' },
    { label: '0', action: () => inputDigit(0), className: 'bg-gray-800 hover:bg-gray-700 col-span-2' },
    { label: '.', action: inputDecimal, className: 'bg-gray-800 hover:bg-gray-700' },
    { label: '=', action: equals, className: 'bg-orange-600 hover:bg-orange-500' },
  ];

  const scientificButtons = [
    { label: '√', action: squareRoot, className: 'bg-purple-600 hover:bg-purple-500' },
    { label: 'x²', action: square, className: 'bg-purple-600 hover:bg-purple-500' },
    { label: '1/x', action: reciprocal, className: 'bg-purple-600 hover:bg-purple-500' },
    { label: 'x^y', action: () => performOperation('^'), className: 'bg-purple-600 hover:bg-purple-500' },
  ];

  return (
    <>
      {/* Calculator Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 z-50 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg border border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 ${
          isSpeaking ? 'animate-pulse' : ''
        }`}
      >
        <span className="flex items-center space-x-2">
          <span>🧮</span>
          <span>{isSpeaking ? 'SPEAKING' : 'CALC'}</span>
        </span>
      </motion.button>

      {/* Calculator Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed bottom-20 right-4 z-50 w-80 bg-black/90 backdrop-blur-2xl border border-cyan-400/50 rounded-lg shadow-2xl shadow-cyan-400/25"
          >
            {/* Calculator Header */}
            <div className="p-4 border-b border-cyan-400/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">C</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Robotic Calculator</h3>
                    <p className="text-cyan-400 text-xs">AI-Powered Voice Interface</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </motion.button>
              </div>
            </div>

            {/* Display */}
            <div className="p-4">
              <div className="bg-gray-900 rounded-lg p-4 mb-4 border border-gray-700">
                <div className="text-right">
                  <div className="text-gray-400 text-sm mb-1">
                    {previousValue !== null && operation ? `${previousValue} ${operation}` : ''}
                  </div>
                  <div className="text-white text-3xl font-mono break-all">
                    {display}
                  </div>
                </div>
              </div>

              {/* Scientific Functions */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {scientificButtons.map((button, index) => (
                  <motion.button
                    key={button.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={button.action}
                    className={`${button.className} text-white font-bold py-3 px-2 rounded-lg transition-all duration-200`}
                  >
                    {button.label}
                  </motion.button>
                ))}
              </div>

              {/* Main Calculator Buttons */}
              <div className="grid grid-cols-4 gap-2">
                {buttons.map((button, index) => (
                  <motion.button
                    key={button.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={button.action}
                    className={`${button.className} text-white font-bold py-3 px-2 rounded-lg transition-all duration-200`}
                  >
                    {button.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RoboticCalculator; 