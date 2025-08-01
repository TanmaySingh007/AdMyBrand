'use client';

import React, { useState, useMemo } from 'react';
import { 
  products, 
  categories, 
  getFeaturedProducts, 
  getDiscountedProducts,
  searchProducts
} from '@/lib/ecommerce';
import ProductCard from '@/components/ecommerce/ProductCard';
import { ScrollAnimation } from '@/components/ui/ScrollAnimation';
import { StaggeredGrid } from '@/components/ui/AdvancedAnimations';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { UltraRealisticButton, UltraRealisticGlass, UltraRealisticNeon } from '@/components/ui/UltraRealisticEffects';

const ShopPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating'>('name');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  // Get featured and discounted products
  const featuredProducts = getFeaturedProducts();
  const discountedProducts = getDiscountedProducts();

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = searchProducts(searchQuery);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      const category = categories.find(cat => cat.id === selectedCategory);
      if (category) {
        filtered = filtered.filter(product => product.category.toLowerCase() === category.name.toLowerCase());
      }
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <UltraRealisticNeon>
                <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">AdMyBrand Shop</h1>
              </UltraRealisticNeon>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <UltraRealisticButton 
                variant="secondary"
                onClick={() => window.location.href = '/'}
                className="text-sm"
              >
                🏠 Back to Home
              </UltraRealisticButton>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideUp" className="text-center mb-16">
            <h1 className="text-h1 text-gray-900 dark:text-white mb-6">
              Premium Digital Products
            </h1>
            <p className="text-body-large text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Discover high-quality templates, components, and tools to accelerate your development workflow.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <UltraRealisticGlass className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 pr-4 text-gray-900 dark:text-white bg-transparent border-none outline-none"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </UltraRealisticGlass>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="slideUp" className="mb-12">
              <h2 className="text-h2 text-gray-900 dark:text-white mb-4 text-center">
                Featured Products
              </h2>
              <p className="text-body text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
                Our most popular and highly-rated products handpicked for you.
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProducts.map((product, index) => (
                <ScrollAnimation 
                  key={product.id} 
                  animation="slideUp" 
                  delay={index * 0.1}
                >
                  <ProductCard product={product} variant="featured" />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Discounted Products */}
      {discountedProducts.length > 0 && (
        <section className="py-16 bg-red-50 dark:bg-red-900/20 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="slideUp" className="mb-12">
              <h2 className="text-h2 text-gray-900 dark:text-white mb-4 text-center">
                Special Offers
              </h2>
              <p className="text-body text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
                Limited time discounts on premium products. Don&apos;t miss out!
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {discountedProducts.map((product, index) => (
                <ScrollAnimation 
                  key={product.id} 
                  animation="slideUp" 
                  delay={index * 0.1}
                >
                  <ProductCard product={product} />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Shop */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <UltraRealisticGlass className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <UltraRealisticButton
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        variant={selectedCategory === category.id ? 'neon' : 'secondary'}
                        className="w-full text-left justify-start"
                      >
                        {category.name} ({category.count})
                      </UltraRealisticButton>
                    ))}
                  </div>
                </UltraRealisticGlass>

                {/* Price Range */}
                <UltraRealisticGlass className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Price Range
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                </UltraRealisticGlass>

                {/* Sort Options */}
                <UltraRealisticGlass className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Sort By
                  </h3>
                  <div className="space-y-2">
                    {[
                      { value: 'name', label: 'Name A-Z' },
                      { value: 'price', label: 'Price Low to High' },
                      { value: 'rating', label: 'Highest Rated' },
                    ].map((option) => (
                      <UltraRealisticButton
                        key={option.value}
                        onClick={() => setSortBy(option.value as 'name' | 'price' | 'rating')}
                        variant={sortBy === option.value ? 'neon' : 'secondary'}
                        className="w-full text-left justify-start"
                      >
                        {option.label}
                      </UltraRealisticButton>
                    ))}
                  </div>
                </UltraRealisticGlass>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </StaggeredGrid>
              ) : (
                <UltraRealisticGlass className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 text-gray-400">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Try adjusting your search or filter criteria.
                  </p>
                </UltraRealisticGlass>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary-600 dark:bg-primary-700 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get notified about new products, updates, and exclusive offers.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 text-gray-900 bg-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <UltraRealisticButton variant="secondary">
                  Subscribe
                </UltraRealisticButton>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default ShopPage; 