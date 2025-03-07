
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeartsProps {
  count?: number;
}

const FloatingHearts = ({ count = 20 }: FloatingHeartsProps) => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; size: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: count }).map((_, index) => ({
      id: index,
      left: Math.random() * 100, // Random position (0-100%)
      size: Math.random() * 20 + 10, // Random size (10-30px)
      delay: Math.random() * 5, // Random delay (0-5s)
      duration: Math.random() * 6 + 4, // Random duration (4-10s)
    }));
    setHearts(newHearts);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-heart-float"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            animationIterationCount: 'infinite',
          }}
        >
          <Heart 
            size={heart.size} 
            className="text-love-500 fill-love-400" 
            style={{ opacity: Math.random() * 0.5 + 0.5 }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
