// Form submission handlers and API integration utilities

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: Record<string, unknown>;
}

// Contact form submission handler
export const submitContactForm = async (data: ContactFormData): Promise<ApiResponse> => {
  try {
    // Simulate API call - replace with your actual API endpoint
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: true,
      message: 'Message sent successfully!',
      data: result
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again.',
    };
  }
};

// Email validation utility
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Form validation utilities
export const validateRequired = (value: string, fieldName: string): string | undefined => {
  if (!value.trim()) {
    return `${fieldName} is required`;
  }
  return undefined;
};

export const validateMinLength = (value: string, minLength: number, fieldName: string): string | undefined => {
  if (value.trim().length < minLength) {
    return `${fieldName} must be at least ${minLength} characters`;
  }
  return undefined;
};

export const validateMaxLength = (value: string, maxLength: number, fieldName: string): string | undefined => {
  if (value.trim().length > maxLength) {
    return `${fieldName} must be no more than ${maxLength} characters`;
  }
  return undefined;
};

// Generic form submission handler
export const handleFormSubmission = async <T>(
  data: T,
  submitFunction: (data: T) => Promise<ApiResponse>,
  onSuccess?: (response: ApiResponse) => void,
  onError?: (error: string) => void
): Promise<boolean> => {
  try {
    const response = await submitFunction(data);
    
    if (response.success) {
      onSuccess?.(response);
      return true;
    } else {
      onError?.(response.message);
      return false;
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    onError?.(errorMessage);
    return false;
  }
};

// Debounce utility for form inputs
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Form state management utilities
export interface FormState<T> {
  data: T;
  errors: Partial<Record<keyof T, string>>;
  isSubmitting: boolean;
  isDirty: boolean;
  isValid: boolean;
}

export const createFormState = <T>(initialData: T): FormState<T> => ({
  data: initialData,
  errors: {},
  isSubmitting: false,
  isDirty: false,
  isValid: false,
});

export const updateFormField = <T>(
  state: FormState<T>,
  field: keyof T,
  value: T[keyof T]
): FormState<T> => ({
  ...state,
  data: { ...state.data, [field]: value },
  isDirty: true,
  errors: { ...state.errors, [field]: undefined },
});

export const setFormErrors = <T>(
  state: FormState<T>,
  errors: Partial<Record<keyof T, string>>
): FormState<T> => ({
  ...state,
  errors,
  isValid: Object.keys(errors).length === 0,
});

export const setSubmitting = <T>(
  state: FormState<T>,
  isSubmitting: boolean
): FormState<T> => ({
  ...state,
  isSubmitting,
});

// API endpoint simulation (for development)
export const simulateApiCall = async (data: Record<string, unknown>, delay: number = 1000): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate random success/failure for testing
      const isSuccess = Math.random() > 0.1; // 90% success rate
      
      if (isSuccess) {
        resolve({
          success: true,
          message: 'Operation completed successfully',
          data: { id: Math.random().toString(36).substr(2, 9) }
        });
      } else {
        resolve({
          success: false,
          message: 'Something went wrong. Please try again.',
        });
      }
    }, delay);
  });
}; 