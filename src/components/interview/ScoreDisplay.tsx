import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Trophy, Star, MessageSquare } from "lucide-react";

interface CandidateScorePayload {
  score: number;
  feedback: string;
}

interface ScoreDisplayProps {
  scorePayload: CandidateScorePayload;
  onClose: () => void;
}

const getScoreColor = (score: number) => {
  if (score >= 8) return "text-green-600 bg-green-100";
  if (score >= 6) return "text-yellow-600 bg-yellow-100";
  return "text-red-600 bg-red-100";
};

const getScoreMessage = (score: number) => {
  if (score >= 9) return "Excellent! Outstanding performance!";
  if (score >= 8) return "Great job! Well done!";
  if (score >= 7) return "Good work! Keep improving!";
  if (score >= 6) return "Not bad! Room for improvement.";
  return "Keep practicing! You'll get better!";
};

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ scorePayload, onClose }) => {
  const { score, feedback } = scorePayload;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md p-6 relative">
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 h-8 w-8 p-0"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
        
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <Trophy className="w-8 h-8 text-blue-600" />
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Your Score</h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Badge className={`text-lg px-4 py-2 ${getScoreColor(score)}`}>
                {score}/10
              </Badge>
            </div>
            
            <p className="text-gray-600 mb-4">{getScoreMessage(score)}</p>
            
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(score / 2) 
                      ? "text-yellow-400 fill-current" 
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Feedback Section */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center space-x-2 mb-2">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-medium text-gray-900">AI Feedback</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed text-left">
                {feedback}
              </p>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <Button 
              onClick={onClose}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Continue Interview
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}; 