'use client';

import React, { useState, useMemo } from 'react';
import { 
  blogPosts, 
  blogCategories, 
  getFeaturedPosts, 
  getRecentPosts, 
  searchBlogPosts
} from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import { ScrollAnimation } from '@/components/ui/ScrollAnimation';
import { StaggeredGrid } from '@/components/ui/AdvancedAnimations';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { UltraRealisticButton, UltraRealisticGlass, UltraRealisticNeon } from '@/components/ui/UltraRealisticEffects';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'title' | 'readTime'>('date');

  // Get featured and recent posts
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(3);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    // Filter by search query
    if (searchQuery) {
      posts = searchBlogPosts(searchQuery);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      const category = blogCategories.find(cat => cat.slug === selectedCategory);
      if (category) {
        posts = posts.filter(post => post.category === category.name);
      }
    }

    // Sort posts
    posts = [...posts].sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'readTime':
          return b.readTime - a.readTime;
        default:
          return 0;
      }
    });

    return posts;
  }, [searchQuery, selectedCategory, sortBy]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <UltraRealisticNeon>
                <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">AdMyBrand Blog</h1>
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
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideUp" className="text-center mb-16">
            <h1 className="text-h1 text-gray-900 dark:text-white mb-6">
              Latest Insights & Tutorials
            </h1>
            <p className="text-body-large text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Discover the latest trends in web development, design, and technology. 
              Learn from industry experts and stay ahead of the curve.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <UltraRealisticGlass className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
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

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="slideUp" className="mb-12">
              <h2 className="text-h2 text-gray-900 dark:text-white mb-4 text-center">
                Featured Articles
              </h2>
              <p className="text-body text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
                Our most popular and insightful articles handpicked for you.
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <ScrollAnimation 
                  key={post.id} 
                  animation="slideUp" 
                  delay={index * 0.1}
                >
                  <BlogCard post={post} variant="featured" />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
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
                    <UltraRealisticButton
                      onClick={() => setSelectedCategory('all')}
                      variant={selectedCategory === 'all' ? 'neon' : 'secondary'}
                      className="w-full text-left justify-start"
                    >
                      All Posts ({blogPosts.length})
                    </UltraRealisticButton>
                    {blogCategories.map((category) => (
                      <UltraRealisticButton
                        key={category.id}
                        onClick={() => setSelectedCategory(category.slug)}
                        variant={selectedCategory === category.slug ? 'neon' : 'secondary'}
                        className="w-full text-left justify-start"
                      >
                        {category.name} ({category.postCount})
                      </UltraRealisticButton>
                    ))}
                  </div>
                </UltraRealisticGlass>

                {/* Sort Options */}
                <UltraRealisticGlass className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Sort By
                  </h3>
                  <div className="space-y-2">
                    {[
                      { value: 'date', label: 'Latest First' },
                      { value: 'title', label: 'Alphabetical' },
                      { value: 'readTime', label: 'Read Time' },
                    ].map((option) => (
                      <UltraRealisticButton
                        key={option.value}
                        onClick={() => setSortBy(option.value as 'date' | 'title' | 'readTime')}
                        variant={sortBy === option.value ? 'neon' : 'secondary'}
                        className="w-full text-left justify-start"
                      >
                        {option.label}
                      </UltraRealisticButton>
                    ))}
                  </div>
                </UltraRealisticGlass>

                {/* Recent Posts */}
                <UltraRealisticGlass className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="group">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {formatDate(post.publishedAt)}
                        </p>
                      </div>
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
                    {searchQuery ? `Search Results for "${searchQuery}"` : 'All Articles'}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              {/* Posts Grid */}
              {filteredPosts.length > 0 ? (
                <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    No articles found
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
              Get the latest articles and insights delivered to your inbox.
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

export default BlogPage; 