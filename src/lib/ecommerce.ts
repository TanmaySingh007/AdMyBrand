export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  tags: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  features: string[];
  specifications: Record<string, string>;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

// Mock product data
export const products: Product[] = [
  {
    id: '1',
    name: 'Premium SaaS Landing Page Template',
    description: 'Complete Next.js 14 landing page with dark mode, animations, and advanced components.',
    price: 99,
    originalPrice: 149,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    category: 'Templates',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    inStock: true,
    rating: 4.8,
    reviewCount: 127,
    features: [
      'Dark mode support',
      'Advanced animations',
      'Responsive design',
      'SEO optimized',
      'TypeScript ready',
      'Component library',
    ],
    specifications: {
      'Framework': 'Next.js 14',
      'Styling': 'Tailwind CSS',
      'Language': 'TypeScript',
      'Animations': 'Framer Motion',
      'Icons': 'Heroicons',
      'Deployment': 'Vercel Ready',
    },
  },
  {
    id: '2',
    name: 'E-commerce Dashboard Kit',
    description: 'Complete e-commerce dashboard with analytics, order management, and customer insights.',
    price: 199,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    category: 'Dashboards',
    tags: ['Dashboard', 'Analytics', 'E-commerce', 'React'],
    inStock: true,
    rating: 4.9,
    reviewCount: 89,
    features: [
      'Real-time analytics',
      'Order management',
      'Customer insights',
      'Inventory tracking',
      'Sales reports',
      'Mobile responsive',
    ],
    specifications: {
      'Framework': 'React 18',
      'Charts': 'Recharts',
      'State': 'Redux Toolkit',
      'UI': 'Material-UI',
      'Backend': 'Node.js',
      'Database': 'PostgreSQL',
    },
  },
  {
    id: '3',
    name: 'AI-Powered Chat Widget',
    description: 'Intelligent chat widget with AI responses, sentiment analysis, and multi-language support.',
    price: 149,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
    category: 'Widgets',
    tags: ['AI', 'Chat', 'Customer Support', 'Machine Learning'],
    inStock: true,
    rating: 4.7,
    reviewCount: 203,
    features: [
      'AI-powered responses',
      'Sentiment analysis',
      'Multi-language support',
      'Custom branding',
      'Analytics dashboard',
      'Integration ready',
    ],
    specifications: {
      'AI Model': 'GPT-4',
      'Languages': '50+',
      'Integration': 'REST API',
      'Analytics': 'Real-time',
      'Customization': 'Full',
      'Support': '24/7',
    },
  },
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'templates', name: 'Templates', count: products.filter(p => p.category === 'Templates').length },
  { id: 'dashboards', name: 'Dashboards', count: products.filter(p => p.category === 'Dashboards').length },
  { id: 'widgets', name: 'Widgets', count: products.filter(p => p.category === 'Widgets').length },
];

// Cart management
export class CartManager {
  private static instance: CartManager;
  private cart: Cart = { items: [], total: 0, itemCount: 0 };

  static getInstance(): CartManager {
    if (!CartManager.instance) {
      CartManager.instance = new CartManager();
    }
    return CartManager.instance;
  }

  getCart(): Cart {
    return { ...this.cart };
  }

  addItem(product: Product, quantity: number = 1): Cart {
    const existingItem = this.cart.items.find(item => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.items.push({ product, quantity });
    }
    
    this.updateCart();
    return this.getCart();
  }

  removeItem(productId: string): Cart {
    this.cart.items = this.cart.items.filter(item => item.product.id !== productId);
    this.updateCart();
    return this.getCart();
  }

  updateQuantity(productId: string, quantity: number): Cart {
    const item = this.cart.items.find(item => item.product.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId);
      } else {
        item.quantity = quantity;
        this.updateCart();
      }
    }
    return this.getCart();
  }

  clearCart(): Cart {
    this.cart = { items: [], total: 0, itemCount: 0 };
    return this.getCart();
  }

  private updateCart(): void {
    this.cart.total = this.cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    this.cart.itemCount = this.cart.items.reduce((sum, item) => sum + item.quantity, 0);
  }
}

// Product utilities
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.rating >= 4.5);
};

export const getDiscountedProducts = (): Product[] => {
  return products.filter(product => product.originalPrice && product.originalPrice > product.price);
}; 