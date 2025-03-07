
import { useState } from 'react';
import { Heart, Mail } from 'lucide-react';

interface LoveLetterProps {
  content: string;
}

const LoveLetter = ({ content }: LoveLetterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-lg mx-auto my-8">
      <div className={`envelope relative ${isOpen ? 'open' : ''} bg-rose-100 rounded-lg overflow-hidden shadow-love`}>
        <div className="envelope-front p-4 rounded-t-lg bg-rose-300 flex items-center justify-center">
          <Mail className="text-rose-600 h-8 w-8 mr-2" />
          <span className="text-rose-800 font-medium">Thư tình dành cho em</span>
        </div>
        
        <div className="p-6 relative bg-white">
          <div className="letter bg-rose-50 p-6 rounded-lg shadow-sm">
            <div className="text-center mb-3">
              <Heart className="inline-block text-rose-500 fill-rose-400 mb-2" />
              <h3 className="text-3xl text-rose-700 font-bold mb-3">Em yêu của anh</h3>
            </div>
            
            <div className="font-dancing-script text-xl leading-relaxed text-gray-700 whitespace-pre-line">
              {content}
            </div>
            
            <div className="text-right mt-6 font-dancing-script text-2xl text-rose-600">
              Yêu em rất nhiều
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <button
          onClick={toggleLetter}
          className="inline-flex items-center justify-center bg-rose-500 hover:bg-rose-600 text-white px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-opacity-50"
        >
          <Mail className="h-5 w-5 mr-2" />
          {isOpen ? "Đóng thư" : "Mở thư"}
        </button>
      </div>
    </div>
  );
};

export default LoveLetter;
