'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: '🎨',
    title: 'Brand Identity Design',
    description: 'Create stunning logos, color palettes, and brand guidelines with our AI-powered design tools.',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 2,
    icon: '📱',
    title: 'Social Media Management',
    description: 'Schedule posts, analyze performance, and manage all your social accounts from one dashboard.',
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 3,
    icon: '📊',
    title: 'Analytics & Insights',
    description: 'Track your brand performance with detailed analytics and AI-powered recommendations.',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 4,
    icon: '🤖',
    title: 'AI Content Generation',
    description: 'Generate engaging content, captions, and copy with our advanced AI writing assistant.',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 5,
    icon: '🎯',
    title: 'Campaign Management',
    description: 'Plan, execute, and track marketing campaigns across multiple channels seamlessly.',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    id: 6,
    icon: '🔗',
    title: 'Multi-Platform Integration',
    description: 'Connect with 50+ platforms including Instagram, Facebook, Twitter, LinkedIn, and more.',
    color: 'from-teal-500 to-green-600'
  },
  {
    id: 7,
    icon: '📈',
    title: 'ROI Tracking',
    description: 'Measure the real impact of your brand efforts with comprehensive ROI analytics.',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    id: 8,
    icon: '🛡️',
    title: 'Brand Protection',
    description: 'Monitor your brand mentions, protect your reputation, and respond to feedback instantly.',
    color: 'from-red-500 to-pink-600'
  }
];

const FeaturesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-white" id="features">
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
            Everything You Need to
            <span className="text-primary-600"> Build Your Brand</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to help you create, manage, and scale your brand presence across all channels.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300 h-full">
                {/* Icon */}
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Brand?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses that have already revolutionized their brand presence with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-300">
                View All Features
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection; 