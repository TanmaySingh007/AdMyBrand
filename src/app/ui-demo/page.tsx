'use client';

import React from 'react';
import { ScrollAnimation, StaggeredContainer } from '@/components/ui/ScrollAnimation';
import GlassmorphismCard from '@/components/ui/GlassmorphismCard';
import { OptimizedImage, FeatureIcon } from '@/components/ui/OptimizedImage';
import Button from '@/components/ui/Button';

const UIDemoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary">
      {/* Header */}
      <header className="bg-bg-secondary/80 backdrop-blur-md border-b border-border-color/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-h4 text-text-primary">UI/UX Demo</h1>
            <nav className="flex space-x-8">
              <a href="#glassmorphism" className="text-body-small text-text-secondary hover:text-primary-cyan transition-colors">Glassmorphism</a>
              <a href="#animations" className="text-body-small text-text-secondary hover:text-primary-cyan transition-colors">Animations</a>
              <a href="#typography" className="text-body-small text-text-secondary hover:text-primary-cyan transition-colors">Typography</a>
              <a href="#images" className="text-body-small text-text-secondary hover:text-primary-cyan transition-colors">Images</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Glassmorphism */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideUp" className="text-center mb-16">
            <h1 className="text-display text-text-primary mb-6">
              UI/UX
              <span className="text-primary-cyan block">Enhancements</span>
            </h1>
            <p className="text-body-large text-text-secondary max-w-3xl mx-auto">
              Explore modern UI/UX patterns including glassmorphism effects, smooth animations, 
              optimized typography, and performance-optimized images.
            </p>
          </ScrollAnimation>

          {/* Glassmorphism Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <ScrollAnimation animation="slideLeft" delay={0.1}>
              <GlassmorphismCard>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                    ✨
                  </div>
                  <h3 className="text-h5 text-text-primary mb-2">Glassmorphism</h3>
                  <p className="text-body-small text-text-secondary">
                    Modern glass-like effects with backdrop blur and transparency.
                  </p>
                </div>
              </GlassmorphismCard>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.2}>
              <GlassmorphismCard>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                    🎬
                  </div>
                  <h3 className="text-h5 text-text-primary mb-2">Smooth Animations</h3>
                  <p className="text-body-small text-text-secondary">
                    Framer Motion powered animations with scroll triggers.
                  </p>
                </div>
              </GlassmorphismCard>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={0.3}>
              <GlassmorphismCard>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                    📝
                  </div>
                  <h3 className="text-h5 text-text-primary mb-2">Typography Scale</h3>
                  <p className="text-body-small text-text-secondary">
                    Consistent typography system with proper hierarchy.
                  </p>
                </div>
              </GlassmorphismCard>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section id="typography" className="py-20 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideUp" className="text-center mb-16">
            <h2 className="text-h2 text-text-primary mb-4">Typography Scale</h2>
            <p className="text-body-large text-text-secondary">
              A comprehensive typography system for consistent text hierarchy.
            </p>
          </ScrollAnimation>

          <div className="space-y-8">
            <ScrollAnimation animation="fadeIn" delay={0.1}>
              <div className="border-l-4 border-primary-cyan pl-6">
                <h1 className="text-display text-text-primary mb-4">Display Text</h1>
                <p className="text-caption text-text-muted">text-display class</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.2}>
              <div className="border-l-4 border-primary-cyan pl-6">
                <h1 className="text-h1 text-text-primary mb-4">Heading 1</h1>
                <p className="text-caption text-text-muted">text-h1 class</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.3}>
              <div className="border-l-4 border-primary-cyan pl-6">
                <h2 className="text-h2 text-text-primary mb-4">Heading 2</h2>
                <p className="text-caption text-text-muted">text-h2 class</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.4}>
              <div className="border-l-4 border-primary-cyan pl-6">
                <h3 className="text-h3 text-text-primary mb-4">Heading 3</h3>
                <p className="text-caption text-text-muted">text-h3 class</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.5}>
              <div className="border-l-4 border-primary-cyan pl-6">
                <h4 className="text-h4 text-text-primary mb-4">Heading 4</h4>
                <p className="text-caption text-text-muted">text-h4 class</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.6}>
              <div className="border-l-4 border-primary-cyan pl-6">
                <h5 className="text-h5 text-text-primary mb-4">Heading 5</h5>
                <p className="text-caption text-text-muted">text-h5 class</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.7}>
              <div className="border-l-4 border-primary-cyan pl-6">
                <h6 className="text-h6 text-text-primary mb-4">Heading 6</h6>
                <p className="text-caption text-text-muted">text-h6 class</p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <ScrollAnimation animation="slideUp" delay={0.8}>
                <div className="text-center">
                  <p className="text-body-large text-text-primary mb-2">Body Large</p>
                  <p className="text-body-large text-text-secondary">text-body-large class</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.9}>
                <div className="text-center">
                  <p className="text-body text-text-primary mb-2">Body</p>
                  <p className="text-body text-text-secondary">text-body class</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={1.0}>
                <div className="text-center">
                  <p className="text-body-small text-text-primary mb-2">Body Small</p>
                  <p className="text-body-small text-text-secondary">text-body-small class</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Optimized Images Section */}
      <section id="images" className="py-20 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideUp" className="text-center mb-16">
            <h2 className="text-h2 text-text-primary mb-4">Optimized Images</h2>
            <p className="text-body-large text-text-secondary">
              Next.js Image component with automatic optimization, lazy loading, and blur placeholders.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slideLeft">
              <div>
                <h3 className="text-h3 text-text-primary mb-6">Hero Image</h3>
                <p className="text-body text-text-secondary mb-8">
                  High-quality hero images with priority loading, blur placeholders, and responsive sizing.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-body-small text-text-secondary">Automatic WebP conversion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-body-small text-text-secondary">Blur placeholder while loading</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-body-small text-text-secondary">Responsive image sizing</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                  alt="Business analytics dashboard"
                  fill
                  priority
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-2xl"
                />
              </div>
            </ScrollAnimation>
          </div>

          {/* Feature Icons Grid */}
          <div className="mt-20">
                          <ScrollAnimation animation="slideUp" className="text-center mb-12">
                <h3 className="text-h3 text-text-primary mb-4">Feature Icons</h3>
                <p className="text-body text-text-secondary">
                  Optimized icons with different sizes and loading strategies.
                </p>
              </ScrollAnimation>

            <StaggeredContainer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=64&h=64&fit=crop", alt: "Analytics", size: 'sm' as const },
                { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=64&h=64&fit=crop", alt: "Development", size: 'md' as const },
                { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=64&h=64&fit=crop", alt: "Dashboard", size: 'lg' as const },
                { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=64&h=64&fit=crop", alt: "Analytics", size: 'sm' as const },
                { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=64&h=64&fit=crop", alt: "Development", size: 'md' as const },
                { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=64&h=64&fit=crop", alt: "Dashboard", size: 'lg' as const },
              ].map((icon, index) => (
                <div key={index} className="text-center">
                  <FeatureIcon
                    src={icon.src}
                    alt={icon.alt}
                    size={icon.size}
                    className="mx-auto mb-4"
                  />
                  <p className="text-caption text-text-secondary">{icon.alt}</p>
                </div>
              ))}
            </StaggeredContainer>
          </div>
        </div>
      </section>

      {/* Animation Showcase */}
      <section id="animations" className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideUp" className="text-center mb-16">
            <h2 className="text-h2 text-text-primary mb-4">Scroll Animations</h2>
            <p className="text-body-large text-text-secondary">
              Smooth animations triggered by scroll position using Framer Motion.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animation="fadeIn" delay={0.1}>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-h5 mb-2">Fade In</h3>
                <p className="text-body-small opacity-90">Smooth opacity transition</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.2}>
              <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-h5 mb-2">Slide Up</h3>
                <p className="text-body-small opacity-90">Slide from bottom</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideLeft" delay={0.3}>
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-h5 mb-2">Slide Left</h3>
                <p className="text-body-small opacity-90">Slide from right</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={0.4}>
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-h5 mb-2">Slide Right</h3>
                <p className="text-body-small opacity-90">Slide from left</p>
              </div>
            </ScrollAnimation>
          </div>

          {/* Staggered Animation Example */}
          <div className="mt-20">
            <ScrollAnimation animation="slideUp" className="text-center mb-12">
              <h3 className="text-h3 text-text-primary mb-4">Staggered Animations</h3>
              <p className="text-body text-text-secondary">
                Multiple elements animate in sequence with staggered delays.
              </p>
            </ScrollAnimation>

            <StaggeredContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-bg-primary rounded-xl p-6 text-center border border-border-color">
                  <div className="w-12 h-12 bg-primary-cyan rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 mx-auto">
                    {item}
                  </div>
                  <h4 className="text-h6 text-text-primary mb-2">Item {item}</h4>
                  <p className="text-caption text-text-secondary">
                    Animated with staggered delay
                  </p>
                </div>
              ))}
            </StaggeredContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-cyan to-primary-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-h2 text-white mb-6">
              Ready to Implement These Features?
            </h2>
            <p className="text-body-large text-white/90 mb-8">
              All these UI/UX enhancements are ready to use in your Next.js projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="large">
                View Documentation
              </Button>
              <Button variant="outline" size="large" className="bg-white text-primary-cyan hover:bg-gray-50">
                Get Started
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default UIDemoPage; 