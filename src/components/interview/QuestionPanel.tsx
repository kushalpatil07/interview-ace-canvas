import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Question {
  id: number;
  title: string;
  difficulty: string;
  description: string;
  example: string;
}

interface QuestionPanelProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onNextQuestion: () => void;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "bg-green-100 text-green-800";
    case "Medium": return "bg-yellow-100 text-yellow-800";
    case "Hard": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export const QuestionPanel = ({ 
  question, 
  currentQuestion, 
  totalQuestions, 
  onNextQuestion 
}: QuestionPanelProps) => {
  return (
    <div className="w-96 bg-white border-r border-gray-200 p-6 overflow-y-auto">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <h3 className="text-xl font-semibold text-gray-900">{question.title}</h3>
          <Badge className={getDifficultyColor(question.difficulty)}>
            {question.difficulty}
          </Badge>
        </div>
        
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 leading-relaxed">{question.description}</p>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
            <h4 className="font-medium text-gray-900 mb-2">Example:</h4>
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">{question.example}</pre>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {totalQuestions}
          </div>
          {/* Next Question button hidden for now */}
          {/* <Button variant="outline" size="sm" onClick={onNextQuestion}>
            Next Question
          </Button> */}
        </div>
      </div>
    </div>
  );
}; 