
import { useState } from 'react';
import { CheckCircle, XCircle, Gift } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface LoveQuizProps {
  questions: Question[];
  onComplete: (score: number) => void;
}

const LoveQuiz = ({ questions, onComplete }: LoveQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;

    const correct = selectedOption === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setShowResult(false);
      setSelectedOption(null);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setCompleted(true);
        onComplete(score + (correct ? 1 : 0));
      }
    }, 1500);
  };

  if (completed) {
    const finalScore = score;
    const totalQuestions = questions.length;
    const percentage = Math.round((finalScore / totalQuestions) * 100);
    
    return (
      <div className="bg-white rounded-xl shadow-love p-6 max-w-lg mx-auto text-center">
        <Gift className="h-16 w-16 mx-auto text-love-500 mb-4" />
        <h3 className="text-2xl font-bold text-love-700 mb-2">Chúc mừng!</h3>
        <p className="text-lg mb-4">
          Em đã hoàn thành bài quiz với số điểm: 
          <span className="font-bold text-love-600"> {finalScore}/{totalQuestions} ({percentage}%)</span>
        </p>
        
        {percentage >= 70 ? (
          <div className="p-4 bg-love-50 rounded-lg mb-4">
            <p className="text-love-700 font-medium">
              Em thật tuyệt vời! Em đã hiểu rõ về tình yêu của chúng ta!
            </p>
          </div>
        ) : percentage >= 40 ? (
          <div className="p-4 bg-love-50 rounded-lg mb-4">
            <p className="text-love-700 font-medium">
              Khá tốt! Chúng ta vẫn còn nhiều điều để khám phá về nhau!
            </p>
          </div>
        ) : (
          <div className="p-4 bg-love-50 rounded-lg mb-4">
            <p className="text-love-700 font-medium">
              Không sao! Điều quan trọng là chúng ta luôn có nhau!
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-love p-6 max-w-lg mx-auto">
      <div className="mb-6 flex items-center">
        <div className="bg-love-100 text-love-700 rounded-full px-3 py-1 text-sm font-medium">
          Câu hỏi {currentQuestion + 1}/{questions.length}
        </div>
        <div className="ml-auto text-love-600 font-medium">
          Điểm: {score}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        {questions[currentQuestion].question}
      </h3>
      
      <div className="space-y-3 mb-6">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
              selectedOption === index
                ? 'border-love-500 bg-love-50'
                : 'border-gray-200 hover:border-love-300 hover:bg-love-50/50'
            }`}
            onClick={() => handleOptionSelect(index)}
            disabled={showResult}
          >
            <span className="font-medium">{option}</span>
          </button>
        ))}
      </div>
      
      {showResult && (
        <div className={`p-4 rounded-lg mb-4 animate-fade-in ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
          {isCorrect ? (
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Chính xác! Em thật tuyệt vời!</span>
            </div>
          ) : (
            <div className="flex items-center text-red-500">
              <XCircle className="h-5 w-5 mr-2" />
              <span>Đáp án chưa đúng rồi!</span>
            </div>
          )}
        </div>
      )}
      
      <button
        onClick={handleCheckAnswer}
        disabled={selectedOption === null || showResult}
        className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
          selectedOption === null || showResult
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-love-500 hover:bg-love-600 text-white'
        }`}
      >
        Kiểm tra
      </button>
    </div>
  );
};

export default LoveQuiz;
