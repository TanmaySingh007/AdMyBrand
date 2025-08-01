'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

interface PricingOption {
  id: string;
  name: string;
  basePrice: number;
  features: string[];
  popular?: boolean;
}

interface CalculatorInputs {
  plan: string;
  users: number;
  storage: number;
  integrations: number;
  support: 'basic' | 'priority' | 'dedicated';
}

interface PricingBreakdown {
  basePrice: number;
  userCost: number;
  storageCost: number;
  integrationCost: number;
  supportCost: number;
  total: number;
}

interface PricingCalculatorProps {
  className?: string;
  onCalculate?: (_total: number, _breakdown: PricingBreakdown) => void;
}

const PricingCalculator: React.FC<PricingCalculatorProps> = ({ 
  className = '', 
  onCalculate 
}) => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    plan: 'pro',
    users: 10,
    storage: 50,
    integrations: 5,
    support: 'basic'
  });

  const [total, setTotal] = useState(0);
  const [breakdown, setBreakdown] = useState<PricingBreakdown>({
    basePrice: 0,
    userCost: 0,
    storageCost: 0,
    integrationCost: 0,
    supportCost: 0,
    total: 0
  });

  const pricingOptions: PricingOption[] = [
    {
      id: 'basic',
      name: 'Basic',
      basePrice: 29,
      features: ['Up to 5 users', 'Basic analytics', 'Email support']
    },
    {
      id: 'pro',
      name: 'Pro',
      basePrice: 79,
      features: ['Up to 20 users', 'Advanced analytics', 'Priority support'],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      basePrice: 199,
      features: ['Unlimited users', 'Custom analytics', 'Dedicated support']
    }
  ];

  const supportPricing = {
    basic: 0,
    priority: 25,
    dedicated: 100
  };

  const userPricing = {
    basic: 5,
    pro: 10,
    enterprise: 15
  };

  const storagePricing = 2; // $2 per GB
  const integrationPricing = 15; // $15 per integration

  // Calculate total price
  const calculateTotal = useCallback(() => {
    const selectedPlan = pricingOptions.find(plan => plan.id === inputs.plan);
    if (!selectedPlan) return;

    const basePrice = selectedPlan.basePrice;
    const userCost = Math.max(0, inputs.users - 5) * userPricing[inputs.plan as keyof typeof userPricing];
    const storageCost = inputs.storage * storagePricing;
    const integrationCost = inputs.integrations * integrationPricing;
    const supportCost = supportPricing[inputs.support];

    const totalCost = basePrice + userCost + storageCost + integrationCost + supportCost;

    const breakdownData: PricingBreakdown = {
      basePrice,
      userCost,
      storageCost,
      integrationCost,
      supportCost,
      total: totalCost
    };

    setTotal(totalCost);
    setBreakdown(breakdownData);

    if (onCalculate) {
      onCalculate(totalCost, breakdownData);
    }
  }, [inputs, onCalculate, pricingOptions, supportPricing, userPricing]);

  // Update calculations when inputs change
  useEffect(() => {
    calculateTotal();
  }, [calculateTotal]);

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-2xl shadow-xl p-8 ${className}`}
    >
      <div className="text-center mb-8">
        <h3 className="text-h3 text-gray-900 mb-2">Pricing Calculator</h3>
        <p className="text-body text-gray-600">
          Customize your plan and see the total cost in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculator Controls */}
        <div className="space-y-6">
          {/* Plan Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Choose Your Plan
            </label>
            <div className="grid grid-cols-1 gap-3">
              {pricingOptions.map((plan) => (
                <motion.div
                  key={plan.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    relative p-4 border-2 rounded-lg cursor-pointer transition-all duration-200
                    ${inputs.plan === plan.id 
                      ? 'border-primary-500 bg-primary-50' 
                      : 'border-gray-200 hover:border-gray-300'
                    }
                  `}
                  onClick={() => handleInputChange('plan', plan.id)}
                >
                  {plan.popular && (
                    <span className="absolute -top-2 -right-2 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  )}
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-900">{plan.name}</h4>
                      <p className="text-sm text-gray-600">{plan.basePrice}/month</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      inputs.plan === plan.id 
                        ? 'border-primary-500 bg-primary-500' 
                        : 'border-gray-300'
                    }`}>
                      {inputs.plan === plan.id && (
                        <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Number of Users */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Number of Users: {inputs.users}
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={inputs.users}
              onChange={(e) => handleInputChange('users', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span>50</span>
              <span>100</span>
            </div>
          </div>

          {/* Storage */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Storage (GB): {inputs.storage}GB
            </label>
            <input
              type="range"
              min="10"
              max="1000"
              step="10"
              value={inputs.storage}
              onChange={(e) => handleInputChange('storage', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>10GB</span>
              <span>500GB</span>
              <span>1000GB</span>
            </div>
          </div>

          {/* Integrations */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Integrations: {inputs.integrations}
            </label>
            <input
              type="range"
              min="0"
              max="50"
              value={inputs.integrations}
              onChange={(e) => handleInputChange('integrations', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0</span>
              <span>25</span>
              <span>50</span>
            </div>
          </div>

          {/* Support Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Support Level
            </label>
            <select
              value={inputs.support}
              onChange={(e) => handleInputChange('support', e.target.value as 'basic' | 'priority' | 'dedicated')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="basic">Basic Support (Free)</option>
              <option value="priority">Priority Support (+$25/month)</option>
              <option value="dedicated">Dedicated Support (+$100/month)</option>
            </select>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="text-h4 text-gray-900 mb-4">Price Breakdown</h4>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Base Plan</span>
              <span className="font-medium">{formatCurrency(breakdown.basePrice || 0)}</span>
            </div>
            
            {breakdown.userCost > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-600">Additional Users</span>
                <span className="font-medium">{formatCurrency(breakdown.userCost || 0)}</span>
              </div>
            )}
            
            <div className="flex justify-between">
              <span className="text-gray-600">Storage ({inputs.storage}GB)</span>
              <span className="font-medium">{formatCurrency(breakdown.storageCost || 0)}</span>
            </div>
            
            {breakdown.integrationCost > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-600">Integrations</span>
                <span className="font-medium">{formatCurrency(breakdown.integrationCost || 0)}</span>
              </div>
            )}
            
            {breakdown.supportCost > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-600">Support</span>
                <span className="font-medium">{formatCurrency(breakdown.supportCost || 0)}</span>
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900">Total Monthly</span>
              <span className="text-2xl font-bold text-primary-600">
                {formatCurrency(total)}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Billed monthly</p>
          </div>

          <div className="mt-6">
            <Button
              variant="primary"
              size="large"
              className="w-full"
            >
              Get Started
            </Button>
            <p className="text-xs text-gray-500 text-center mt-2">
              Free 14-day trial, no credit card required
            </p>
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="text-h5 text-gray-900 mb-4">What&apos;s Included</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricingOptions.find(p => p.id === inputs.plan)?.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-600">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCalculator; 