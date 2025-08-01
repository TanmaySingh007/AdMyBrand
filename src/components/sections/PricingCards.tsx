'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  color: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$29',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 social media accounts',
      'Basic analytics and reporting',
      'Content calendar',
      'AI content suggestions',
      'Email support',
      'Mobile app access'
    ],
    cta: 'Start Free Trial',
    color: 'from-gray-500 to-gray-600'
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$79',
    period: '/month',
    description: 'Most popular choice for growing businesses',
    features: [
      'Up to 20 social media accounts',
      'Advanced analytics & insights',
      'AI content generation',
      'Campaign management',
      'Brand monitoring',
      'Priority support',
      'Custom integrations',
      'Team collaboration'
    ],
    cta: 'Start Free Trial',
    popular: true,
    color: 'from-primary-500 to-primary-600'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$199',
    period: '/month',
    description: 'For large organizations with advanced needs',
    features: [
      'Unlimited social media accounts',
      'Advanced AI & automation',
      'Custom brand guidelines',
      'Dedicated account manager',
      'API access',
      'White-label options',
      'Advanced security',
      '24/7 phone support'
    ],
    cta: 'Contact Sales',
    color: 'from-purple-500 to-purple-600'
  }
];

const PricingCards: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent
            <span className="text-primary-600"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Popular Badge */}
              {tier.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </motion.div>
              )}

              <div className={`
                relative bg-white rounded-2xl p-8 h-full border-2 transition-all duration-300 hover:shadow-xl
                ${tier.popular 
                  ? 'border-primary-200 shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
                }
              `}>
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-6">
                    Perfect for small teams and startups looking to get started with our platform.
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                      <span className="text-gray-500 ml-1">{tier.period}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={tier.popular ? 'primary' : 'outline'}
                    size="large"
                    className={`w-full ${tier.popular ? 'bg-gradient-to-r ' + tier.color : ''}`}
                  >
                    {tier.cta}
                  </Button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-4">What&apos;s included:</h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <svg 
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            tier.popular ? 'text-primary-600' : 'text-green-500'
                          }`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Popular highlight */}
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-t-2xl"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-xl p-6 border border-gray-200 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Need a custom plan?
            </h4>
            <p className="text-gray-600 mb-4">
              Contact our sales team for enterprise solutions and custom integrations.
            </p>
            <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300">
              Contact Sales →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCards; 