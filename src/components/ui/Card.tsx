import React from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';

export interface CardProps {
  image?: string;
  imageAlt?: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  ctaVariant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  image,
  imageAlt,
  title,
  description,
  ctaText,
  ctaHref,
  ctaVariant = 'primary',
  className,
  children,
}) => {
  return (
    <div className={cn(
      'bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300',
      className
    )}>
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        
        {children}
        
        {ctaText && (
          <div className="mt-4">
            {ctaHref ? (
              <Button
                variant={ctaVariant}
                size="medium"
                onClick={() => window.open(ctaHref, '_blank')}
                className="w-full sm:w-auto"
              >
                {ctaText}
              </Button>
            ) : (
              <Button
                variant={ctaVariant}
                size="medium"
                className="w-full sm:w-auto"
              >
                {ctaText}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card; 