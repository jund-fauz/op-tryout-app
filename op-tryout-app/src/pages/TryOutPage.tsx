import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
    { id: 1, question: 'Berapakah 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
    { id: 2, question: 'Apakah ibukota Indonesia?', options: ['Jakarta', 'Surabaya', 'Bandung'], answer: 'Jakarta' },
    { id: 3, question: 'Siapakah presiden Indonesia?', options: ['Jokowi', 'Prabowo', 'Sby'], answer: 'Jokowi' },
]

function TryOutPage() {
    
    //   const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate(`/result/${score + 1}`);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-xl font-semibold">{questions[currentQuestion].question}</h2>
      <div className="mt-4">
        {questions[currentQuestion].options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="block bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )   
}

export default TryOutPage