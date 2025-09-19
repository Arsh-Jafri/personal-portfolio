import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoadingContextType {
  isImageLoaded: boolean;
  setImageLoaded: (loaded: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  return (
    <LoadingContext.Provider value={{ isImageLoaded, setImageLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
};
