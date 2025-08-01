'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UltraRealisticGlass, UltraRealisticButton, UltraRealisticNeon } from './UltraRealisticEffects';

interface CalculatorState {
  display: string;
  previousValue: number | null;
  operation: string | null;
  waitingForOperand: boolean;
}

const AdvancedCalculator: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({
    display: '0',
    previousValue: null,
    operation: null,
    waitingForOperand: false,
  });

  const [isScientific, setIsScientific] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const inputDigit = (digit: string) => {
    if (state.waitingForOperand) {
      setState({
        ...state,
        display: digit,
        waitingForOperand: false,
      });
    } else {
      setState({
        ...state,
        display: state.display === '0' ? digit : state.display + digit,
      });
    }
  };

  const inputDecimal = () => {
    if (state.waitingForOperand) {
      setState({
        ...state,
        display: '0.',
        waitingForOperand: false,
      });
    } else if (state.display.indexOf('.') === -1) {
      setState({
        ...state,
        display: state.display + '.',
      });
    }
  };

  const clear = () => {
    setState({
      display: '0',
      previousValue: null,
      operation: null,
      waitingForOperand: false,
    });
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(state.display);

    if (state.previousValue === null) {
      setState({
        ...state,
        previousValue: inputValue,
        operation: nextOperation,
        waitingForOperand: true,
      });
    } else if (state.operation) {
      const currentValue = state.previousValue || 0;
      const newValue = calculate(currentValue, inputValue, state.operation);

      setHistory(prev => [...prev, `${currentValue} ${state.operation} ${inputValue} = ${newValue}`]);
      
      setState({
        display: String(newValue),
        previousValue: newValue,
        operation: nextOperation,
        waitingForOperand: true,
      });
    }
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '^':
        return Math.pow(firstValue, secondValue);
      default:
        return secondValue;
    }
  };

  const scientificFunction = (func: string) => {
    const value = parseFloat(state.display);
    let result: number;

    switch (func) {
      case 'sin':
        result = Math.sin(value * Math.PI / 180);
        break;
      case 'cos':
        result = Math.cos(value * Math.PI / 180);
        break;
      case 'tan':
        result = Math.tan(value * Math.PI / 180);
        break;
      case 'log':
        result = Math.log10(value);
        break;
      case 'ln':
        result = Math.log(value);
        break;
      case 'sqrt':
        result = Math.sqrt(value);
        break;
      case 'square':
        result = value * value;
        break;
      case 'cube':
        result = value * value * value;
        break;
      case 'factorial':
        result = factorial(value);
        break;
      case 'inverse':
        result = 1 / value;
        break;
      case 'abs':
        result = Math.abs(value);
        break;
      default:
        return;
    }

    setHistory(prev => [...prev, `${func}(${value}) = ${result}`]);
    setState({
      ...state,
      display: String(result),
      waitingForOperand: true,
    });
  };

  const factorial = (n: number): number => {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const buttons = [
    { label: 'C', action: 'clear', type: 'function' },
    { label: '±', action: 'plusMinus', type: 'function' },
    { label: '%', action: 'percent', type: 'function' },
    { label: '÷', action: 'divide', type: 'operator' },
    { label: '7', action: '7', type: 'number' },
    { label: '8', action: '8', type: 'number' },
    { label: '9', action: '9', type: 'number' },
    { label: '×', action: 'multiply', type: 'operator' },
    { label: '4', action: '4', type: 'number' },
    { label: '5', action: '5', type: 'number' },
    { label: '6', action: '6', type: 'number' },
    { label: '-', action: 'subtract', type: 'operator' },
    { label: '1', action: '1', type: 'number' },
    { label: '2', action: '2', type: 'number' },
    { label: '3', action: '3', type: 'number' },
    { label: '+', action: 'add', type: 'operator' },
    { label: '0', action: '0', type: 'number', span: 2 },
    { label: '.', action: 'decimal', type: 'decimal' },
    { label: '=', action: 'equals', type: 'equals' },
  ];

  const scientificButtons = [
    { label: 'sin', action: 'sin', type: 'scientific' },
    { label: 'cos', action: 'cos', type: 'scientific' },
    { label: 'tan', action: 'tan', type: 'scientific' },
    { label: 'log', action: 'log', type: 'scientific' },
    { label: 'ln', action: 'ln', type: 'scientific' },
    { label: '√', action: 'sqrt', type: 'scientific' },
    { label: 'x²', action: 'square', type: 'scientific' },
    { label: 'x³', action: 'cube', type: 'scientific' },
    { label: 'x^y', action: 'power', type: 'scientific' },
    { label: 'n!', action: 'factorial', type: 'scientific' },
    { label: '1/x', action: 'inverse', type: 'scientific' },
    { label: '|x|', action: 'abs', type: 'scientific' },
  ];

  const handleButtonClick = (action: string) => {
    switch (action) {
      case 'clear':
        clear();
        break;
      case 'decimal':
        inputDecimal();
        break;
      case 'add':
      case 'subtract':
      case 'multiply':
      case 'divide':
        performOperation(action === 'add' ? '+' : action === 'subtract' ? '-' : action === 'multiply' ? '×' : '÷');
        break;
      case 'equals':
        if (state.operation && state.previousValue !== null) {
          const inputValue = parseFloat(state.display);
          const result = calculate(state.previousValue, inputValue, state.operation);
          setHistory(prev => [...prev, `${state.previousValue} ${state.operation} ${inputValue} = ${result}`]);
          setState({
            display: String(result),
            previousValue: null,
            operation: null,
            waitingForOperand: true,
          });
        }
        break;
      default:
        if (action.match(/[0-9]/)) {
          inputDigit(action);
        } else if (scientificButtons.some(btn => btn.action === action)) {
          scientificFunction(action);
        }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8">
      {/* Calculator */}
      <UltraRealisticGlass className="w-full lg:w-96">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Advanced Calculator</h3>
            <UltraRealisticButton
              onClick={() => setIsScientific(!isScientific)}
              variant="neon"
              className="text-sm"
            >
              {isScientific ? 'Basic' : 'Scientific'}
            </UltraRealisticButton>
          </div>
          
          {/* Display */}
          <UltraRealisticNeon className="mb-4">
            <div className="bg-gray-900 dark:bg-gray-800 p-4 rounded-lg text-right">
              <div className="text-sm text-gray-400 dark:text-gray-500 mb-1">
                {state.operation && state.previousValue !== null
                  ? `${state.previousValue} ${state.operation}`
                  : ''}
              </div>
              <div className="text-3xl font-mono text-green-400">
                {state.display}
              </div>
            </div>
          </UltraRealisticNeon>
        </div>

        {/* Scientific buttons */}
        <AnimatePresence>
          {isScientific && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4"
            >
              <div className="grid grid-cols-4 gap-2">
                {scientificButtons.map((button) => (
                  <UltraRealisticButton
                    key={button.label}
                    onClick={() => handleButtonClick(button.action)}
                    variant="secondary"
                    className="text-sm"
                  >
                    {button.label}
                  </UltraRealisticButton>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Number pad */}
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((button) => (
            <UltraRealisticButton
              key={button.label}
              onClick={() => handleButtonClick(button.action)}
              variant={button.type === 'operator' ? 'neon' : 'primary'}
              className={`text-lg ${button.span ? 'col-span-2' : ''}`}
            >
              {button.label}
            </UltraRealisticButton>
          ))}
        </div>
      </UltraRealisticGlass>

      {/* History */}
      <UltraRealisticGlass className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Calculation History</h3>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {history.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center py-8">
              No calculations yet. Start calculating to see history!
            </p>
          ) : (
            history.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg font-mono text-sm"
              >
                {entry}
              </motion.div>
            ))
          )}
        </div>
        
        {history.length > 0 && (
          <UltraRealisticButton
            onClick={() => setHistory([])}
            variant="secondary"
            className="mt-4 w-full"
          >
            Clear History
          </UltraRealisticButton>
        )}
      </UltraRealisticGlass>
    </div>
  );
};

export default AdvancedCalculator; 