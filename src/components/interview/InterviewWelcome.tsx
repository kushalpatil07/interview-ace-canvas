import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Code } from "lucide-react";

interface InterviewWelcomeProps {
  onStartInterview: () => void;
}

const instructions = [
  "Ensure your microphone is working properly",
  "Find a quiet place to interview",
  "Have a stable internet connection",
  "Think out loud during problem solving",
];

export const InterviewWelcome = ({onStartInterview }: InterviewWelcomeProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 text-center space-y-6">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
          <Code className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">AI Interview Platform</h1>
          <p className="text-gray-600">Join your technical interview session</p>
        </div>
      
        {/* Instructions */}
        <div className="rounded -lg border bg-blue-50 p-6 mb-6">
          <div className="flex items-center mb-2">
            <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
            <span className="mr-2 text-blue-600">
              Before we start:
            </span>
          </div>
          <div className="space-y-2">
            {instructions.map((instruction, index) => (
              <div className="flex items-start" key={index}>
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm text-gray-600">{instruction}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Start Interview Button */}
        <Button 
          onClick={onStartInterview} 
          className="w-full bg-blue-600 hover:bg-blue-700"
          size="lg"
        >
          Join Interview
        </Button>
      </Card>
    </div>
  );
}; 