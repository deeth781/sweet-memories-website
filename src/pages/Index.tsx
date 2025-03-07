
import { useState, useEffect } from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import LoveLetter from '../components/LoveLetter';
import PhotoAlbum from '../components/PhotoAlbum';
import MusicPlayer from '../components/MusicPlayer';
import LoveQuiz from '../components/LoveQuiz';
import CountdownTimer from '../components/CountdownTimer';
import GiftButton from '../components/GiftButton';
import FloatingHearts from '../components/FloatingHearts';
import { Heart, Image, Music, Gift, Brain, Clock, Mail } from 'lucide-react';

// Thay thế tên người yêu và các nội dung khác trong đây
const LOVED_ONE_NAME = "Em Yêu";
const COUNTDOWN_DATE = new Date("2023-04-20"); // Đổi thành ngày kỷ niệm của bạn
const EVENT_NAME = "Kỷ Niệm 100 Ngày Yêu";

// Nội dung thư tình
const LOVE_LETTER_CONTENT = `Em yêu dấu của anh,

Nhân dịp 8/3, anh muốn dành tặng em món quà đặc biệt này - một trang web chứa đựng tình yêu của anh dành cho em.

Mỗi ngày bên em là một ngày tuyệt vời trong cuộc đời anh. Em là điều tuyệt nhất mà anh có được, là động lực để anh cố gắng mỗi ngày.

Cảm ơn em vì đã luôn ở bên anh, chia sẻ những khoảnh khắc hạnh phúc và cả những lúc khó khăn.

Chúc em ngày 8/3 thật vui vẻ và hạnh phúc, người phụ nữ của anh!`;

// Danh sách câu hỏi quiz
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Chúng ta đã gặp nhau lần đầu ở đâu?",
    options: ["Quán cà phê", "Trường học", "Buổi tiệc của bạn chung", "Trên mạng xã hội"],
    correctAnswer: 2 // Index (0-based) của câu trả lời đúng
  },
  {
    id: 2,
    question: "Ngày kỷ niệm yêu của chúng ta là ngày nào?",
    options: ["20/04", "14/02", "01/01", "08/03"],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "Món ăn yêu thích của em là gì?",
    options: ["Lẩu", "Bánh mì", "Bún bò", "Cơm tấm"],
    correctAnswer: 3
  }
];

// Nội dung quà tặng
const GIFT_MESSAGE = "Món quà đặc biệt dành tặng em nhân ngày 8/3 là...\n\nAnh đã đặt chỗ cho chúng ta có một buổi tối lãng mạn tại nhà hàng yêu thích của em vào cuối tuần này!\n\nHãy chuẩn bị xinh đẹp nhé, người yêu của anh!";

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeSection, setActiveSection] = useState("letter");
  const [isLoading, setIsLoading] = useState(true);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    // Hiệu ứng loading khi vào trang
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  const handleQuizComplete = (score: number) => {
    setQuizCompleted(true);
    setQuizScore(score);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "letter":
        return <LoveLetter content={LOVE_LETTER_CONTENT} />;
      case "photos":
        return (
          <PhotoAlbum
            photos={[
              {
                src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                caption: "Kỷ niệm ngày chúng ta gặp nhau"
              },
              {
                src: "https://images.unsplash.com/photo-1522673607200-164d1b3d254f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                caption: "Buổi hẹn hò đầu tiên của chúng ta"
              },
              {
                src: "https://images.unsplash.com/photo-1534089715435-d91056aa3d85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                caption: "Kỷ niệm 1 tháng yêu nhau"
              }
            ]}
          />
        );
      case "music":
        return (
          <MusicPlayer
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            title="Bài hát của chúng ta"
            artist="Ca sĩ yêu thích của em"
          />
        );
      case "quiz":
        return <LoveQuiz questions={QUIZ_QUESTIONS} onComplete={handleQuizComplete} />;
      case "countdown":
        return <CountdownTimer targetDate={COUNTDOWN_DATE} eventName={EVENT_NAME} />;
      case "gift":
        return (
          <GiftButton
            message={GIFT_MESSAGE}
            image="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          />
        );
      default:
        return <LoveLetter content={LOVE_LETTER_CONTENT} />;
    }
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className="love-loader">
        <div className="text-center">
          <Heart className="h-16 w-16 text-white heart-beat fill-white/80" />
          <p className="text-white mt-4 text-xl">Đang tải trang tình yêu...</p>
        </div>
      </div>
    );
  }

  // Welcome screen
  if (showWelcome) {
    return <WelcomeScreen name={LOVED_ONE_NAME} onContinue={handleWelcomeComplete} />;
  }

  return (
    <div className="min-h-screen bg-love-50 bg-pattern relative overflow-hidden">
      <FloatingHearts count={15} />
      
      {/* Header */}
      <header className="relative pt-8 pb-6 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block bg-love-100 text-love-700 rounded-full px-3 py-1 text-sm font-medium mb-3 animate-float">
            Chúc mừng ngày 8/3
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-love-800 mb-2 text-shadow">
            Gửi tới {LOVED_ONE_NAME}
          </h1>
          <p className="text-love-600 max-w-md mx-auto">
            Một trang web đặc biệt dành riêng cho người con gái anh yêu nhất
          </p>
        </div>
      </header>
      
      {/* Navigation */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex overflow-x-auto py-2 gap-1 md:gap-2 md:justify-center hide-scrollbar">
            <button
              onClick={() => setActiveSection("letter")}
              className={`flex items-center whitespace-nowrap px-3 md:px-4 py-2 rounded-full transition-colors ${
                activeSection === "letter" 
                  ? "bg-love-500 text-white" 
                  : "bg-white hover:bg-love-100 text-love-700"
              }`}
            >
              <Mail className="h-4 w-4 mr-1 md:mr-2" />
              <span>Thư tình</span>
            </button>
            
            <button
              onClick={() => setActiveSection("photos")}
              className={`flex items-center whitespace-nowrap px-3 md:px-4 py-2 rounded-full transition-colors ${
                activeSection === "photos"
                  ? "bg-love-500 text-white"
                  : "bg-white hover:bg-love-100 text-love-700"
              }`}
            >
              <Image className="h-4 w-4 mr-1 md:mr-2" />
              <span>Ảnh kỷ niệm</span>
            </button>
            
            <button
              onClick={() => setActiveSection("music")}
              className={`flex items-center whitespace-nowrap px-3 md:px-4 py-2 rounded-full transition-colors ${
                activeSection === "music"
                  ? "bg-love-500 text-white"
                  : "bg-white hover:bg-love-100 text-love-700"
              }`}
            >
              <Music className="h-4 w-4 mr-1 md:mr-2" />
              <span>Âm nhạc</span>
            </button>
            
            <button
              onClick={() => setActiveSection("quiz")}
              className={`flex items-center whitespace-nowrap px-3 md:px-4 py-2 rounded-full transition-colors ${
                activeSection === "quiz"
                  ? "bg-love-500 text-white"
                  : "bg-white hover:bg-love-100 text-love-700"
              }`}
            >
              <Brain className="h-4 w-4 mr-1 md:mr-2" />
              <span>Quiz tình yêu</span>
            </button>
            
            <button
              onClick={() => setActiveSection("countdown")}
              className={`flex items-center whitespace-nowrap px-3 md:px-4 py-2 rounded-full transition-colors ${
                activeSection === "countdown"
                  ? "bg-love-500 text-white"
                  : "bg-white hover:bg-love-100 text-love-700"
              }`}
            >
              <Clock className="h-4 w-4 mr-1 md:mr-2" />
              <span>Đếm ngược</span>
            </button>
            
            <button
              onClick={() => setActiveSection("gift")}
              className={`flex items-center whitespace-nowrap px-3 md:px-4 py-2 rounded-full transition-colors ${
                activeSection === "gift"
                  ? "bg-love-500 text-white"
                  : "bg-white hover:bg-love-100 text-love-700"
              }`}
            >
              <Gift className="h-4 w-4 mr-1 md:mr-2" />
              <span>Quà tặng</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-love p-6 mb-8 animate-fade-in">
          {renderSection()}
        </div>
        
        {/* Footer Message */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center">
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-love-500 fill-love-400 mr-2" />
              <p className="text-love-700 font-medium">
                Yêu em mãi mãi, {LOVED_ONE_NAME}
              </p>
              <Heart className="h-5 w-5 text-love-500 fill-love-400 ml-2" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
