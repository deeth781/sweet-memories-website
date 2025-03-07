
import { useState, useEffect } from 'react';
import { Clock, Heart } from 'lucide-react';

interface CountdownTimerProps {
  targetDate: Date;
  eventName: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate, eventName }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-love p-6 max-w-md mx-auto">
      <div className="flex items-center justify-center mb-4">
        <Clock className="h-6 w-6 mr-2 text-love-500" />
        <h3 className="text-xl font-bold text-love-800">Đếm ngược đến {eventName}</h3>
      </div>
      
      <div className="bg-love-50 rounded-lg p-4 mb-4">
        <div className="flex justify-around text-center">
          <div className="flex-1">
            <div className="bg-white rounded-lg p-2 mb-1 shadow-sm">
              <span className="text-3xl font-bold text-love-700">{formatNumber(timeLeft.days)}</span>
            </div>
            <span className="text-sm text-love-600">Ngày</span>
          </div>
          
          <div className="flex-1 mx-1">
            <div className="bg-white rounded-lg p-2 mb-1 shadow-sm">
              <span className="text-3xl font-bold text-love-700">{formatNumber(timeLeft.hours)}</span>
            </div>
            <span className="text-sm text-love-600">Giờ</span>
          </div>
          
          <div className="flex-1 mx-1">
            <div className="bg-white rounded-lg p-2 mb-1 shadow-sm">
              <span className="text-3xl font-bold text-love-700">{formatNumber(timeLeft.minutes)}</span>
            </div>
            <span className="text-sm text-love-600">Phút</span>
          </div>
          
          <div className="flex-1">
            <div className="bg-white rounded-lg p-2 mb-1 shadow-sm">
              <span className="text-3xl font-bold text-love-700">{formatNumber(timeLeft.seconds)}</span>
            </div>
            <span className="text-sm text-love-600">Giây</span>
          </div>
        </div>
      </div>
      
      <div className="text-center text-love-600 flex items-center justify-center">
        <Heart className="h-4 w-4 mr-2 fill-love-400" />
        <span>Mỗi khoảnh khắc bên em đều đáng trân trọng</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
