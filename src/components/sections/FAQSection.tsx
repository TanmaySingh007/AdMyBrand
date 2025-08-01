'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "How does the AI content generation work?",
    answer: "Our AI analyzes your brand guidelines, target audience, and industry trends to generate relevant content suggestions. It learns from your preferences and improves over time to create more engaging posts that match your brand voice.",
    category: "AI & Content"
  },
  {
    id: 2,
    question: "Can I connect multiple social media accounts?",
    answer: "Yes! You can connect unlimited social media accounts across all major platforms including Instagram, Facebook, Twitter, LinkedIn, TikTok, and YouTube. Each plan has different limits on the number of accounts you can manage.",
    category: "Integration"
  },
  {
    id: 3,
    question: "What analytics and insights do you provide?",
    answer: "We provide comprehensive analytics including engagement rates, follower growth, best posting times, content performance, competitor analysis, and ROI tracking. All data is presented in easy-to-understand dashboards with actionable insights.",
    category: "Analytics"
  },
  {
    id: 4,
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started. You can upgrade, downgrade, or cancel at any time during or after the trial period.",
    category: "Pricing"
  },
  {
    id: 5,
    question: "How does brand monitoring work?",
    answer: "Our brand monitoring tool tracks mentions of your brand across social media, news sites, and blogs in real-time. You'll receive instant alerts for any mentions, allowing you to respond quickly to both positive and negative feedback.",
    category: "Brand Protection"
  },
  {
    id: 6,
    question: "Can I schedule posts in advance?",
    answer: "Absolutely! Our content calendar allows you to schedule posts weeks or months in advance. You can also set up recurring posts and use our AI to suggest optimal posting times for maximum engagement.",
    category: "Content Management"
  },
  {
    id: 7,
    question: "Do you offer team collaboration features?",
    answer: "Yes! Our Pro and Enterprise plans include team collaboration features like role-based permissions, approval workflows, team activity tracking, and shared content libraries. Perfect for agencies and larger organizations.",
    category: "Team Features"
  },
  {
    id: 8,
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 customer support through live chat, email, and phone (Enterprise plan). Our knowledge base includes detailed guides, video tutorials, and best practices. We also offer onboarding sessions for new customers.",
    category: "Support"
  }
];

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI & Content', 'Integration', 'Analytics', 'Pricing', 'Brand Protection', 'Content Management', 'Team Features', 'Support'];

  const filteredItems = activeCategory === 'All' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked
            <span className="text-primary-600"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about AdMyBrand. Can&apos;t find what you&apos;re looking for? Contact our support team.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className="w-6 h-6 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openItems.includes(item.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of AdMyBrand. 
              We&apos;re available 24/7 to answer any questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300">
                Contact Support
              </button>
              <button className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection; 