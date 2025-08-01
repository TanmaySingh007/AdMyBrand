'use client';

import React, { useState } from 'react';
import ContactForm from '@/components/ui/ContactForm';
import PricingCalculator from '@/components/ui/PricingCalculator';
import { ScrollAnimation } from '@/components/ui/ScrollAnimation';
import { submitContactForm, ContactFormData } from '@/lib/formHandlers';
import Button from '@/components/ui/Button';

interface PricingResult {
  total: number;
  breakdown: {
    basePrice: number;
    userCost: number;
    storageCost: number;
    integrationCost: number;
    supportCost: number;
  };
}

const FormsDemoPage: React.FC = () => {
  const [pricingResult, setPricingResult] = useState<PricingResult | null>(null);

  // Handle contact form submission
  const handleContactSubmit = async (data: ContactFormData) => {
    try {
      const response = await submitContactForm(data);
      if (response.success) {
        // Handle success - could show a toast notification
        console.log('Form submitted successfully');
      } else {
        // Handle error - could show an error message
        console.log('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  // Handle pricing calculator calculation
  const handlePricingCalculate = (total: number, breakdown: PricingResult['breakdown']) => {
    setPricingResult({ total, breakdown });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-h4 text-gray-900">Forms & Functionality Demo</h1>
            <nav className="flex space-x-8">
              <a href="#contact" className="text-body-small text-gray-600 hover:text-primary-600 transition-colors">Contact Form</a>
              <a href="#pricing" className="text-body-small text-gray-600 hover:text-primary-600 transition-colors">Pricing Calculator</a>
              <a href="/" className="text-body-small text-gray-600 hover:text-primary-600 transition-colors">← Back to Home</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideUp" className="text-center mb-16">
            <h1 className="text-display text-gray-900 mb-6">
              Forms &
              <span className="text-primary-600 block">Functionality</span>
            </h1>
            <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
              Explore interactive forms with real-time validation, submission handling, 
              and dynamic pricing calculations.
            </p>
          </ScrollAnimation>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <ScrollAnimation animation="slideLeft" delay={0.1}>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                    📝
                  </div>
                  <h3 className="text-h5 text-gray-900 mb-2">Contact Form</h3>
                  <p className="text-body-small text-gray-600">
                    Fully validated contact form with real-time error checking and submission handling.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                    💰
                  </div>
                  <h3 className="text-h5 text-gray-900 mb-2">Pricing Calculator</h3>
                  <p className="text-body-small text-gray-600">
                    Interactive pricing calculator with sliders and real-time cost updates.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideUp" className="text-center mb-16">
            <h2 className="text-h2 text-gray-900 mb-4">Contact Form</h2>
            <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
              A fully functional contact form with client-side validation, real-time error feedback, 
              and submission handling with success/error states.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollAnimation animation="slideLeft">
              <ContactForm 
                onSubmit={handleContactSubmit}
                className="w-full"
              />
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-h4 text-gray-900 mb-6">Form Features</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Real-time Validation</h4>
                      <p className="text-sm text-gray-600">Fields validate on blur with immediate feedback</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email Format Validation</h4>
                      <p className="text-sm text-gray-600">Proper email format checking with regex</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Loading States</h4>
                      <p className="text-sm text-gray-600">Spinner and disabled state during submission</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Success/Error Messages</h4>
                      <p className="text-sm text-gray-600">Animated feedback for form submission results</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Accessibility</h4>
                      <p className="text-sm text-gray-600">Proper labels, focus states, and keyboard navigation</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideUp" className="text-center mb-16">
            <h2 className="text-h2 text-gray-900 mb-4">Interactive Pricing Calculator</h2>
            <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
              Dynamic pricing calculator with real-time cost updates based on user selections 
              for plan, users, storage, integrations, and support level.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp">
            <PricingCalculator 
              onCalculate={handlePricingCalculate}
              className="max-w-6xl mx-auto"
            />
          </ScrollAnimation>

          {/* Calculator Results Display */}
          {pricingResult && (
            <ScrollAnimation animation="fadeIn" delay={0.2} className="mt-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-h4 text-gray-900 mb-4 text-center">Calculation Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Total Cost</h4>
                    <p className="text-3xl font-bold text-primary-600">
                      ${pricingResult.total}
                    </p>
                    <p className="text-sm text-gray-500">per month</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Breakdown</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Base Plan:</span>
                        <span>${pricingResult.breakdown.basePrice}</span>
                      </div>
                      {pricingResult.breakdown.userCost > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Users:</span>
                          <span>${pricingResult.breakdown.userCost}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-600">Storage:</span>
                        <span>${pricingResult.breakdown.storageCost}</span>
                      </div>
                      {pricingResult.breakdown.integrationCost > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Integrations:</span>
                          <span>${pricingResult.breakdown.integrationCost}</span>
                        </div>
                      )}
                      {pricingResult.breakdown.supportCost > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Support:</span>
                          <span>${pricingResult.breakdown.supportCost}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          )}
        </div>
      </section>

      {/* Form Submission Demo */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideUp" className="text-center mb-16">
            <h2 className="text-h2 text-gray-900 mb-4">Form Submission Handling</h2>
            <p className="text-body-large text-gray-600">
              See how form submissions are handled with proper error handling, 
              loading states, and user feedback.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="slideUp" delay={0.1}>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-h5 text-gray-900 mb-2">Loading States</h3>
                <p className="text-sm text-gray-600">
                  Spinner animations and disabled buttons during form submission
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.2}>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-h5 text-gray-900 mb-2">Success Handling</h3>
                <p className="text-sm text-gray-600">
                  Clear success messages and form reset after successful submission
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.3}>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-h5 text-gray-900 mb-2">Error Handling</h3>
                <p className="text-sm text-gray-600">
                  Graceful error handling with user-friendly error messages
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-h2 text-white mb-6">
              Ready to Implement These Forms?
            </h2>
            <p className="text-body-large text-primary-100 mb-8">
              All form components are fully functional and ready for production use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="large"
                onClick={() => window.location.href = '/ui-demo'}
              >
                View UI Demo
              </Button>
              <Button 
                variant="outline" 
                size="large" 
                className="bg-white text-primary-600 hover:bg-gray-50"
                onClick={() => window.location.href = '/'}
              >
                Back to Home
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default FormsDemoPage; 