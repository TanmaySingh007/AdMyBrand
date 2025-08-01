export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  readTime: number;
  featured: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  postCount: number;
}

// Mock blog data
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Modern SaaS Landing Pages with Next.js 14',
    slug: 'building-modern-saas-landing-pages-nextjs-14',
    excerpt: 'Learn how to create stunning SaaS landing pages using Next.js 14, TypeScript, and Tailwind CSS with advanced animations and dark mode support.',
    content: `
# Building Modern SaaS Landing Pages with Next.js 14

In today's competitive digital landscape, having a compelling SaaS landing page is crucial for converting visitors into customers. This guide will walk you through building a modern, performant landing page using Next.js 14.

## Why Next.js 14?

Next.js 14 brings several improvements that make it perfect for SaaS landing pages:

- **App Router**: Improved routing and layout system
- **Server Components**: Better performance and SEO
- **TypeScript Support**: Enhanced developer experience
- **Built-in Optimization**: Automatic image and font optimization

## Key Features to Implement

### 1. Dark Mode Support
Implementing dark mode is essential for modern web applications:

\`\`\`typescript
// Theme management with Zustand
export const useTheme = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'system',
      isDark: false,
      setTheme: (theme: Theme) => {
        // Theme implementation
      },
    }),
    { name: 'theme-storage' }
  )
);
\`\`\`

### 2. Advanced Animations
Use Framer Motion for smooth, performant animations:

\`\`\`typescript
// Scroll-triggered animations
export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={animationVariants[animation]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
\`\`\`

### 3. Component System
Build reusable components for consistency:

\`\`\`typescript
// Button component with variants
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  className = '',
}) => {
  // Button implementation
};
\`\`\`

## Performance Optimization

### Image Optimization
Use Next.js Image component for automatic optimization:

\`\`\`typescript
import Image from 'next/image';

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
    />
  );
};
\`\`\`

### SEO Optimization
Implement proper SEO with metadata:

\`\`\`typescript
// SEO component
export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage,
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
    </>
  );
};
\`\`\`

## Deployment

### Vercel Deployment
Deploy your Next.js application to Vercel for optimal performance:

1. Connect your GitHub repository
2. Configure environment variables
3. Deploy with automatic CI/CD

### Performance Monitoring
Monitor your application's performance:

- Core Web Vitals
- Lighthouse scores
- Real User Monitoring (RUM)

## Conclusion

Building modern SaaS landing pages requires attention to detail, performance optimization, and user experience. Next.js 14 provides the tools needed to create fast, accessible, and engaging landing pages that convert visitors into customers.

Remember to:
- Implement dark mode for better user experience
- Use animations sparingly and purposefully
- Optimize for performance and SEO
- Test across different devices and browsers
- Monitor analytics and user behavior

Start building your next SaaS landing page with these modern techniques!
    `,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      bio: 'Senior Frontend Developer with 8+ years of experience in React and Next.js.',
    },
    publishedAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    tags: ['Next.js', 'React', 'TypeScript', 'SaaS', 'Landing Page'],
    category: 'Development',
    readTime: 8,
    featured: true,
    seo: {
      title: 'Building Modern SaaS Landing Pages with Next.js 14',
      description: 'Learn how to create stunning SaaS landing pages using Next.js 14, TypeScript, and Tailwind CSS with advanced animations and dark mode support.',
      keywords: ['Next.js', 'React', 'TypeScript', 'SaaS', 'Landing Page', 'Development'],
    },
  },
  {
    id: '2',
    title: 'The Future of Web Development: AI-Assisted Coding',
    slug: 'future-web-development-ai-assisted-coding',
    excerpt: 'Explore how AI is transforming web development and how developers can leverage AI tools to build better applications faster.',
    content: `
# The Future of Web Development: AI-Assisted Coding

Artificial Intelligence is revolutionizing how we write code, debug applications, and build web experiences. Let's explore the current state and future of AI-assisted development.

## Current AI Tools in Web Development

### 1. Code Generation
AI-powered code generators can create boilerplate code, components, and even entire applications:

\`\`\`typescript
// AI-generated component structure
interface UserProfileProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  user,
  onEdit,
  onDelete,
}) => {
  // AI-generated implementation
};
\`\`\`

### 2. Code Review
AI can analyze code quality, suggest improvements, and catch potential bugs:

- Automated code review
- Performance optimization suggestions
- Security vulnerability detection
- Best practice recommendations

### 3. Documentation Generation
AI tools can automatically generate documentation from code:

\`\`\`typescript
/**
 * @description Renders a user profile component with edit and delete functionality
 * @param user - The user object containing profile information
 * @param onEdit - Callback function triggered when edit button is clicked
 * @param onDelete - Callback function triggered when delete button is clicked
 * @returns JSX.Element - The rendered user profile component
 */
\`\`\`

## Benefits of AI-Assisted Development

### 1. Increased Productivity
- Faster code generation
- Reduced debugging time
- Automated testing
- Quick prototyping

### 2. Improved Code Quality
- Consistent coding standards
- Better error handling
- Optimized performance
- Enhanced security

### 3. Learning and Skill Development
- Code examples and explanations
- Best practice suggestions
- Technology recommendations
- Problem-solving assistance

## Challenges and Considerations

### 1. Code Quality
While AI can generate code quickly, human review is still essential:

- Verify logic and business requirements
- Ensure proper error handling
- Check for security vulnerabilities
- Validate performance implications

### 2. Over-reliance
Developers should use AI as a tool, not a replacement:

- Understand the generated code
- Learn from AI suggestions
- Maintain coding skills
- Think critically about solutions

### 3. Privacy and Security
Consider the implications of sharing code with AI services:

- Review privacy policies
- Avoid sharing sensitive information
- Use local AI tools when possible
- Implement proper security measures

## Best Practices for AI-Assisted Development

### 1. Start Small
Begin with simple tasks and gradually increase complexity:

- Code comments and documentation
- Simple utility functions
- Component structure generation
- Test case creation

### 2. Review and Understand
Always review AI-generated code:

- Read through the entire implementation
- Understand the logic and flow
- Test thoroughly
- Refactor if necessary

### 3. Combine with Human Expertise
Use AI to enhance, not replace, human skills:

- Leverage AI for repetitive tasks
- Focus on creative problem-solving
- Apply domain knowledge
- Make architectural decisions

## Future Trends

### 1. Integrated Development Environments
AI will become deeply integrated into IDEs:

- Real-time code suggestions
- Automated refactoring
- Intelligent debugging
- Context-aware assistance

### 2. Natural Language Programming
Developers will write code using natural language:

- "Create a user authentication system"
- "Add dark mode to the landing page"
- "Optimize images for web performance"

### 3. Collaborative AI
AI will facilitate better team collaboration:

- Shared coding standards
- Automated code reviews
- Knowledge sharing
- Team learning

## Conclusion

AI-assisted development is here to stay and will continue to evolve. The key is to embrace these tools while maintaining human expertise and critical thinking. By combining AI capabilities with human creativity and domain knowledge, developers can build better applications faster than ever before.

Remember:
- Use AI as a tool, not a replacement
- Always review and understand generated code
- Focus on learning and skill development
- Stay updated with AI development tools
- Maintain coding fundamentals

The future of web development is collaborative - humans and AI working together to create amazing digital experiences.
    `,
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: 'Tech Lead and AI enthusiast with expertise in machine learning and web development.',
    },
    publishedAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
    tags: ['AI', 'Web Development', 'Machine Learning', 'Productivity'],
    category: 'Technology',
    readTime: 12,
    featured: true,
    seo: {
      title: 'The Future of Web Development: AI-Assisted Coding',
      description: 'Explore how AI is transforming web development and how developers can leverage AI tools to build better applications faster.',
      keywords: ['AI', 'Web Development', 'Machine Learning', 'Productivity', 'Coding'],
    },
  },
  {
    id: '3',
    title: 'Optimizing React Performance: A Comprehensive Guide',
    slug: 'optimizing-react-performance-comprehensive-guide',
    excerpt: 'Learn advanced techniques for optimizing React applications, including memoization, code splitting, and performance monitoring.',
    content: `
# Optimizing React Performance: A Comprehensive Guide

Performance optimization is crucial for providing a smooth user experience in React applications. This guide covers advanced techniques and best practices for optimizing React performance.

## Understanding React Performance

### 1. React Rendering Process
React's rendering process involves several steps:

1. **Virtual DOM Creation**: React creates a virtual representation of the UI
2. **Diffing**: Compares virtual DOM with previous version
3. **Reconciliation**: Updates actual DOM efficiently
4. **Commit**: Applies changes to the browser

### 2. Performance Bottlenecks
Common performance issues in React:

- Unnecessary re-renders
- Large bundle sizes
- Inefficient data structures
- Memory leaks

## Optimization Techniques

### 1. Memoization
Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders:

\`\`\`typescript
// Memoized component
const ExpensiveComponent = React.memo(({ data }: { data: Data[] }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: heavyComputation(item)
    }));
  }, [data]);

  return (
    <div>
      {processedData.map(item => (
        <DataItem key={item.id} item={item} />
      ))}
    </div>
  );
});

// Memoized callback
const handleClick = useCallback((id: string) => {
  // Handle click logic
}, []);
\`\`\`

### 2. Code Splitting
Implement lazy loading to reduce initial bundle size:

\`\`\`typescript
// Lazy load components
const LazyComponent = lazy(() => import('./LazyComponent'));

// Route-based code splitting
const routes = [
  {
    path: '/dashboard',
    component: lazy(() => import('./Dashboard')),
  },
  {
    path: '/settings',
    component: lazy(() => import('./Settings')),
  },
];

// Dynamic imports
const loadModule = async (moduleName: string) => {
  const module = await import(\`./modules/\${moduleName}\`);
  return module.default;
};
\`\`\`

### 3. Bundle Optimization
Optimize your application bundle:

\`\`\`typescript
// Tree shaking
import { Button } from 'ui-library'; // Only imports Button

// Dynamic imports with webpack
const loadComponent = (componentName: string) => {
  return import(\`./components/\${componentName}\`);
};

// Bundle analysis
// Use webpack-bundle-analyzer to identify large dependencies
\`\`\`

### 4. State Management Optimization
Optimize state management for better performance:

\`\`\`typescript
// Selective state updates
const useOptimizedState = <T>(initialState: T) => {
  const [state, setState] = useState(initialState);
  
  const updateState = useCallback((updater: (prev: T) => T) => {
    setState(prev => {
      const newState = updater(prev);
      // Only update if state actually changed
      return JSON.stringify(prev) === JSON.stringify(newState) ? prev : newState;
    });
  }, []);
  
  return [state, updateState] as const;
};

// Context optimization
const OptimizedContext = createContext<AppState | null>(null);

export const OptimizedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState(initialState);
  
  const value = useMemo(() => ({
    state,
    setState,
  }), [state]);
  
  return (
    <OptimizedContext.Provider value={value}>
      {children}
    </OptimizedContext.Provider>
  );
};
\`\`\`

## Performance Monitoring

### 1. React DevTools Profiler
Use React DevTools to identify performance issues:

\`\`\`typescript
// Profiler component
import { Profiler } from 'react';

const onRenderCallback = (
  id: string,
  phase: string,
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
) => {
  console.log(\`Component \${id} took \${actualDuration}ms to render\`);
};

<Profiler id="App" onRender={onRenderCallback}>
  <App />
</Profiler>
\`\`\`

### 2. Performance Metrics
Monitor key performance indicators:

\`\`\`typescript
// Performance monitoring
const usePerformanceMonitor = () => {
  useEffect(() => {
    // First Contentful Paint
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('FCP:', entry.startTime);
      }
    });
    
    observer.observe({ entryTypes: ['paint'] });
    
    return () => observer.disconnect();
  }, []);
};
\`\`\`

### 3. Bundle Analysis
Analyze your bundle to identify optimization opportunities:

\`\`\`bash
# Install webpack-bundle-analyzer
npm install --save-dev webpack-bundle-analyzer

# Analyze bundle
npm run build
npx webpack-bundle-analyzer build/static/js/*.js
\`\`\`

## Advanced Optimization Techniques

### 1. Virtual Scrolling
Implement virtual scrolling for large lists:

\`\`\`typescript
// Virtual list component
const VirtualList: React.FC<VirtualListProps> = ({
  items,
  itemHeight,
  containerHeight,
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  
  const visibleItems = useMemo(() => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight),
      items.length
    );
    
    return items.slice(startIndex, endIndex);
  }, [scrollTop, itemHeight, containerHeight, items]);
  
  return (
    <div
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ height: items.length * itemHeight }}>
        <div style={{ transform: \`translateY(\${scrollTop}px)\` }}>
          {visibleItems.map((item, index) => (
            <div key={item.id} style={{ height: itemHeight }}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
\`\`\`

### 2. Web Workers
Use web workers for heavy computations:

\`\`\`typescript
// Web worker for heavy computation
const worker = new Worker('/workers/computation.js');

const useWorker = (callback: (result: any) => void) => {
  useEffect(() => {
    worker.onmessage = (event) => {
      callback(event.data);
    };
    
    return () => {
      worker.terminate();
    };
  }, [callback]);
  
  const postMessage = useCallback((data: any) => {
    worker.postMessage(data);
  }, []);
  
  return postMessage;
};
\`\`\`

## Best Practices

### 1. Component Design
- Keep components small and focused
- Use composition over inheritance
- Implement proper prop types
- Avoid inline objects and functions

### 2. State Management
- Minimize state updates
- Use appropriate state management solutions
- Implement proper data normalization
- Avoid prop drilling

### 3. Rendering Optimization
- Use React.memo for expensive components
- Implement proper key props
- Avoid unnecessary re-renders
- Optimize conditional rendering

## Conclusion

React performance optimization is an ongoing process that requires understanding of React's rendering mechanism and careful application of optimization techniques. By implementing these strategies, you can create fast, responsive applications that provide excellent user experiences.

Key takeaways:
- Profile your application regularly
- Use memoization strategically
- Implement code splitting
- Monitor performance metrics
- Stay updated with React best practices

Remember that premature optimization can lead to complex, hard-to-maintain code. Always measure performance first and optimize based on actual bottlenecks.
    `,
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      bio: 'Performance Engineer specializing in React optimization and web performance.',
    },
    publishedAt: '2024-01-05T09:15:00Z',
    updatedAt: '2024-01-05T09:15:00Z',
    tags: ['React', 'Performance', 'Optimization', 'JavaScript'],
    category: 'Development',
    readTime: 15,
    featured: false,
    seo: {
      title: 'Optimizing React Performance: A Comprehensive Guide',
      description: 'Learn advanced techniques for optimizing React applications, including memoization, code splitting, and performance monitoring.',
      keywords: ['React', 'Performance', 'Optimization', 'JavaScript', 'Web Development'],
    },
  },
];

export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'Development',
    slug: 'development',
    description: 'Articles about web development, programming, and technical topics.',
    postCount: 2,
  },
  {
    id: '2',
    name: 'Technology',
    slug: 'technology',
    description: 'Latest technology trends, AI, and innovation in the tech industry.',
    postCount: 1,
  },
  {
    id: '3',
    name: 'Design',
    slug: 'design',
    description: 'UI/UX design principles, design systems, and creative topics.',
    postCount: 0,
  },
  {
    id: '4',
    name: 'Business',
    slug: 'business',
    description: 'SaaS business insights, marketing strategies, and growth tips.',
    postCount: 0,
  },
];

// Utility functions
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (categorySlug: string): BlogPost[] => {
  return blogPosts.filter(post => {
    const category = blogCategories.find(cat => cat.slug === categorySlug);
    return category && post.category === category.name;
  });
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

export const searchBlogPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}; 