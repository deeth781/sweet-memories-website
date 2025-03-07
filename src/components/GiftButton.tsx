
import { useState } from 'react';
import { Gift, Heart, X } from 'lucide-react';

interface GiftButtonProps {
  message: string;
  image?: string;
}

const GiftButton = ({ message, image }: GiftButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpenGift = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(true);
      setIsAnimating(false);
    }, 1000);
  };

  const handleCloseGift = () => {
    setIsOpen(false);
  };

  return (
    <div className="my-8 text-center">
      {!isOpen && (
        <button
          onClick={handleOpenGift}
          disabled={isAnimating}
          className={`relative inline-flex items-center justify-center bg-love-500 hover:bg-love-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg transition-all duration-500 hover:scale-105 ${
            isAnimating ? 'animate-pulse' : ''
          }`}
        >
          <Gift className={`h-5 w-5 mr-2 ${isAnimating ? 'animate-spin' : ''}`} />
          <span>Nhấn để nhận quà</span>
          
          {isAnimating && (
            <div className="absolute -top-1 -right-1 h-3 w-3">
              <div className="animate-ping absolute h-full w-full rounded-full bg-love-400 opacity-75"></div>
              <div className="relative rounded-full h-3 w-3 bg-love-500"></div>
            </div>
          )}
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-up">
            <div className="relative bg-love-gradient p-6">
              <button 
                onClick={handleCloseGift}
                className="absolute top-2 right-2 text-white/80 hover:text-white bg-black/10 hover:bg-black/20 rounded-full p-1 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="flex justify-center mb-3">
                <div className="bg-white/20 p-3 rounded-full">
                  <Gift className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white text-center mb-1">Quà đặc biệt dành cho em!</h3>
            </div>
            
            <div className="p-6">
              {image && (
                <div className="mb-4 rounded-lg overflow-hidden shadow-sm">
                  <img src={image} alt="Gift" className="w-full h-auto" />
                </div>
              )}
              
              <div className="bg-love-50 p-4 rounded-lg border border-love-100 mb-4">
                <p className="text-love-800 whitespace-pre-line">{message}</p>
              </div>
              
              <div className="text-center text-love-600 flex items-center justify-center">
                <Heart className="h-4 w-4 mr-2 fill-love-400" />
                <span>Yêu em thật nhiều</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftButton;
