'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavigationBar from '../components/ui/NavigationBar';
import { NeuralParticles, AIDataStream, NeuralGrid, QuantumLoader, HolographicDisplay, FuturisticButton } from '../components/ui/Ultra8KEffects';
import { RoboticEyeScanner, TerminatorDataOverlay, TargetCrosshair, RoboticArm, TerminatorHUD, TerminatorVoice } from '../components/ui/TerminatorElements';
import RoboticCalculator from '../components/ui/RoboticCalculator';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showTerminator, setShowTerminator] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const terminatorTimer = setTimeout(() => {
      setShowTerminator(true);
    }, 5000);

    return () => clearTimeout(terminatorTimer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <QuantumLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary relative overflow-hidden">
      {/* Navigation */}
      <NavigationBar />

      {/* Terminator Elements */}
      <AnimatePresence>
        {showTerminator && (
          <>
            <RoboticEyeScanner />
            <TerminatorDataOverlay />
            <TargetCrosshair />
            <RoboticArm />
            <TerminatorHUD />
            <TerminatorVoice />
          </>
        )}
      </AnimatePresence>

      {/* Robotic Calculator */}
      <RoboticCalculator />

      {/* Background Effects */}
      <NeuralParticles />
      <AIDataStream />
      <NeuralGrid />

      {/* Main Content */}
      <div className="relative z-10 pt-20">
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="mb-12"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl text-8k">
                AdMyBrand AI
              </h1>
              <p className="text-xl md:text-2xl text-visible-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the future of digital branding with our advanced AI-powered platform. 
                Featuring 8K visuals, 4DX effects, and cutting-edge neural network technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <FuturisticButton 
                onClick={() => window.location.href = '/ui-demo'}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-lg px-8 py-4"
              >
                🚀 Explore UI Demo
              </FuturisticButton>
              <FuturisticButton 
                onClick={() => window.location.href = '/forms-demo'}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-lg px-8 py-4"
              >
                🎮 Try Forms
              </FuturisticButton>
            </motion.div>
          </div>
        </section>

        {/* 8K Visual Processing Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-bg-primary to-bg-secondary">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-8k">
                8K Visual Processing
              </h2>
              <p className="text-xl text-visible-secondary max-w-3xl mx-auto">
                Crystal clear visuals with advanced rendering technology and quantum processing power
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "8K Ultra HD",
                  description: "Crystal clear visuals with advanced rendering technology",
                  icon: "🎨",
                  color: "from-cyan-500 to-blue-600",
                  features: ["4K Resolution", "HDR Support", "Real-time Rendering"]
                },
                {
                  title: "Quantum Processing",
                  description: "Next-generation processing power for lightning-fast performance",
                  icon: "⚡",
                  color: "from-yellow-500 to-orange-600",
                  features: ["Quantum Algorithms", "Parallel Processing", "AI Optimization"]
                },
                {
                  title: "Neural Networks",
                  description: "Advanced artificial intelligence with machine learning capabilities",
                  icon: "🧠",
                  color: "from-green-500 to-cyan-600",
                  features: ["Deep Learning", "Pattern Recognition", "Predictive Analytics"]
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                  className="group"
                >
                  <HolographicDisplay>
                    <div className="p-8 h-full">
                      <div className="text-5xl mb-6">{feature.icon}</div>
                      <h3 className="text-2xl font-bold mb-4 text-visible group-hover:text-cyan-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-visible-secondary leading-relaxed mb-6">
                        {feature.description}
                      </p>
                      <div className={`w-16 h-1 bg-gradient-to-r ${feature.color} rounded-full mb-4`}></div>
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="text-visible-muted text-sm flex items-center">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </HolographicDisplay>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4DX Holographic Effects Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-bg-secondary to-bg-primary">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-8k">
                4DX Holographic Effects
              </h2>
              <p className="text-xl text-visible-secondary max-w-3xl mx-auto">
                Immersive holographic displays with real-time interaction and depth perception
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <HolographicDisplay>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-6 text-visible">Holographic Interface</h3>
                    <p className="text-visible-secondary mb-6 leading-relaxed">
                      Experience true 4DX immersion with our advanced holographic technology. 
                      Real-time depth perception and interactive elements create an unparalleled user experience.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-visible-secondary">Depth Perception</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                        <span className="text-visible-secondary">Real-time Interaction</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-visible-secondary">Spatial Audio</span>
                      </div>
                    </div>
                  </div>
                </HolographicDisplay>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <HolographicDisplay>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-6 text-visible">Terminator Interface</h3>
                    <p className="text-visible-secondary mb-6 leading-relaxed">
                      Futuristic robotic interface with scanning capabilities and advanced targeting systems. 
                      Inspired by cutting-edge AI technology and sci-fi aesthetics.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                        <span className="text-visible-secondary">Target Acquisition</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                        <span className="text-visible-secondary">Neural Scanning</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                        <span className="text-visible-secondary">Voice Recognition</span>
                      </div>
                    </div>
                  </div>
                </HolographicDisplay>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Assistant Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-bg-primary to-bg-secondary">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent text-8k">
                AI Assistant Interface
              </h2>
              <p className="text-xl text-visible-secondary max-w-3xl mx-auto">
                Advanced neural network interface with natural language processing and contextual responses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <HolographicDisplay>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-cyan-300">AI Assistant</h3>
                    <p className="text-visible-secondary mb-6">
                      Click the AI Assistant button in the navigation to chat with our advanced neural network interface. 
                      Get instant responses to your questions about our platform and technology.
                    </p>
                    <div className="flex justify-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-3xl">🤖</span>
                      </div>
                    </div>
                  </div>
                </HolographicDisplay>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                <HolographicDisplay>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-purple-300">Theme Modes</h3>
                    <p className="text-visible-secondary mb-6">
                      Switch between Dark, Bright, and Night Vision modes for different experiences. 
                      Each mode offers unique visual effects and optimized performance.
                    </p>
                    <div className="flex justify-center space-x-6">
                      <div className="w-10 h-10 bg-gray-800 rounded-full border border-gray-600"></div>
                      <div className="w-10 h-10 bg-blue-400 rounded-full border border-blue-300"></div>
                      <div className="w-10 h-10 bg-green-600 rounded-full border border-green-400"></div>
                    </div>
                  </div>
                </HolographicDisplay>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Features Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-bg-secondary to-bg-primary">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent text-8k">
                Interactive Features
              </h2>
              <p className="text-xl text-visible-secondary max-w-3xl mx-auto">
                Explore our cutting-edge interactive elements and futuristic simulations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Voice Recognition", icon: "🎤", color: "from-indigo-500 to-purple-600" },
                { title: "Neural Scanning", icon: "🔍", color: "from-green-500 to-cyan-600" },
                { title: "Quantum Computing", icon: "⚛️", color: "from-yellow-500 to-orange-600" },
                { title: "Holographic Display", icon: "🌟", color: "from-pink-500 to-red-600" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className="group"
                >
                  <HolographicDisplay>
                    <div className="p-6 text-center">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-lg font-bold mb-2 text-visible group-hover:text-cyan-300 transition-colors">
                        {feature.title}
                      </h3>
                      <div className={`w-12 h-1 bg-gradient-to-r ${feature.color} rounded-full mx-auto`}></div>
                    </div>
                  </HolographicDisplay>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-8k">
                Ready to Transform?
              </h2>
              <p className="text-xl text-visible-secondary mb-12 max-w-3xl mx-auto">
                Join the future of digital experiences with our cutting-edge AI platform. 
                Experience 8K visuals, 4DX effects, and Terminator-style interfaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <FuturisticButton 
                  onClick={() => window.location.href = '/shop'}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-lg px-8 py-4"
                >
                  🚀 Get Started
                </FuturisticButton>
                <FuturisticButton 
                  onClick={() => window.location.href = '/blog'}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-lg px-8 py-4"
                >
                  📚 Learn More
                </FuturisticButton>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
} 