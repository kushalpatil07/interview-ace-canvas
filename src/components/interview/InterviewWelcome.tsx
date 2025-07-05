import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Code } from "lucide-react";

interface InterviewWelcomeProps {
  apiKey: string;
  onApiKeyChange: (key: string) => void;
  onStartInterview: () => void;
}

export const InterviewWelcome = ({ apiKey, onApiKeyChange, onStartInterview }: InterviewWelcomeProps) => {
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
        
        <div className="space-y-4">
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ElevenLabs API Key
            </label>
            <Textarea
              placeholder="Enter your ElevenLabs API key for voice features..."
              value={apiKey}
              onChange={(e) => onApiKeyChange(e.target.value)}
              className="w-full"
            />
            <p className="text-xs text-gray-500 mt-1">
              You'll need an ElevenLabs API key for the AI voice interviewer feature.
            </p>
          </div>
        </div>

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