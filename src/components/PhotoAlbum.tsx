
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Image } from 'lucide-react';

interface PhotoAlbumProps {
  photos: Array<{
    src: string;
    caption?: string;
  }>;
}

const PhotoAlbum = ({ photos }: PhotoAlbumProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'right' | 'left' | null>(null);

  const goToNextSlide = () => {
    setIsLoading(true);
    setSlideDirection('right');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    }, 300);
  };

  const goToPrevSlide = () => {
    setIsLoading(true);
    setSlideDirection('left');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
    }, 300);
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setSlideDirection(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const getSlideClass = () => {
    if (!slideDirection) return '';
    if (isLoading) {
      return slideDirection === 'right' 
        ? 'animate-fade-out translate-x-10 opacity-0' 
        : 'animate-fade-out -translate-x-10 opacity-0';
    }
    return 'animate-fade-in translate-x-0 opacity-100';
  };

  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-rose-50 rounded-xl shadow-love">
        <Image className="h-16 w-16 text-rose-300 mb-4" />
        <p className="text-rose-500">Chưa có ảnh nào trong album</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <div className="relative overflow-hidden rounded-xl shadow-love bg-rose-50">
        <div className="aspect-w-16 aspect-h-9 relative h-[50vh] overflow-hidden">
          <img
            src={photos[currentIndex].src}
            alt={photos[currentIndex].caption || 'Kỷ niệm của chúng ta'}
            className={`w-full h-full object-contain transition-all duration-300 ${getSlideClass()}`}
            onLoad={() => setIsLoading(false)}
          />
          
          {photos[currentIndex].caption && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white text-center">{photos[currentIndex].caption}</p>
            </div>
          )}
        </div>
        
        {/* Thumbnail navigation */}
        <div className="flex overflow-x-auto p-2 bg-white scrollbar-thin scrollbar-thumb-rose-300">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-16 h-16 mx-1 rounded-md overflow-hidden cursor-pointer hover:opacity-90 transition-all duration-200 ${
                index === currentIndex ? 'ring-2 ring-rose-500' : 'opacity-70'
              }`}
              onClick={() => {
                setSlideDirection(index > currentIndex ? 'right' : 'left');
                setIsLoading(true);
                setTimeout(() => setCurrentIndex(index), 300);
              }}
            >
              <img
                src={photo.src}
                alt={`thumbnail ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-rose-500 rounded-full p-2 shadow hover:shadow-md transition-all duration-200"
          aria-label="Previous photo"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={goToNextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-rose-500 rounded-full p-2 shadow hover:shadow-md transition-all duration-200"
          aria-label="Next photo"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-rose-600 font-medium">
          {currentIndex + 1} / {photos.length}
        </p>
      </div>
    </div>
  );
};

export default PhotoAlbum;
