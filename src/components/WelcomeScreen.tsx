
import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import FloatingHearts from './FloatingHearts';

interface WelcomeScreenProps {
  name: string;
  onContinue: () => void;
}

const WelcomeScreen = ({ name, onContinue }: WelcomeScreenProps) => {
  const [visible, setVisible] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    setVisible(false);
    setTimeout(() => {
      onContinue();
    }, 1000);
  };

  if (!visible) {
    return (
      <div className="fixed inset-0 bg-love-500 bg-opacity-90 z-50 animate-fade-out"></div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-love-gradient z-50">
      <FloatingHearts count={30} />
      
      <div className={`relative z-10 text-center max-w-2xl px-6 ${showContent ? 'animate-scale-up' : 'opacity-0'}`}>
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 animate-float">
          <Sparkles className="text-white h-12 w-12" />
        </div>
        
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-6 text-shadow">
          Chào {name}
        </h1>
        
        <p className="text-xl sm:text-2xl text-white mb-8 opacity-90">
          Chào mừng đến với trang web đặc biệt dành riêng cho em trong ngày 8/3
        </p>
        
        <div className="flex justify-center mb-10">
          <Heart className="text-white h-8 w-8 animate-pulse mr-3 fill-white" />
          <Heart className="text-white h-10 w-10 animate-pulse fill-white" />
          <Heart className="text-white h-8 w-8 animate-pulse ml-3 fill-white" />
        </div>
        
        <button
          onClick={handleContinue}
          className="bg-white text-love-600 px-8 py-3 rounded-full text-xl font-medium transition-all duration-300 hover:bg-opacity-90 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30 shadow-lg"
        >
          Bắt đầu hành trình
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
