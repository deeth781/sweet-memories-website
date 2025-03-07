
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  src: string;
  title: string;
  artist?: string;
}

const MusicPlayer = ({ src, title, artist }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        window.clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        if (progressIntervalRef.current) {
          window.clearInterval(progressIntervalRef.current);
          progressIntervalRef.current = null;
        }
      } else {
        audioRef.current.play();
        progressIntervalRef.current = window.setInterval(() => {
          if (audioRef.current) {
            setProgress(
              (audioRef.current.currentTime / audioRef.current.duration) * 100
            );
          }
        }, 1000);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    if (progressIntervalRef.current) {
      window.clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm shadow-love rounded-xl p-4 mx-auto max-w-sm">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
      
      <div className="flex items-center mb-3">
        <div className="bg-love-100 rounded-full p-2 mr-4">
          {isPlaying ? (
            <div className="w-10 h-10 rounded-full bg-love-400 flex items-center justify-center animate-pulse">
              <Pause className="text-white h-5 w-5" />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-love-500 flex items-center justify-center">
              <Play className="text-white h-5 w-5" />
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <h4 className="font-medium text-love-800 truncate">{title}</h4>
          {artist && <p className="text-love-600 text-sm">{artist}</p>}
        </div>
        
        <button
          onClick={toggleMute}
          className="ml-2 p-2 text-love-500 hover:text-love-600 transition-colors"
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      </div>
      
      <div className="relative h-2 bg-love-100 rounded-full overflow-hidden">
        <div
          className="absolute h-full bg-love-500 left-0 top-0 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <button
        onClick={togglePlay}
        className="w-full mt-3 bg-love-500 hover:bg-love-600 text-white rounded-full py-2 transition-all duration-300 flex items-center justify-center"
      >
        {isPlaying ? "Tạm dừng" : "Phát nhạc"} 
      </button>
    </div>
  );
};

export default MusicPlayer;
