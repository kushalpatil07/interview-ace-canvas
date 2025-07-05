import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, User, Settings, MoreVertical, MessageSquare } from "lucide-react";

interface InterviewHeaderProps {
  aiSpeaking: boolean;
  onToggleTranscript: () => void;
}

export const InterviewHeader = ({ aiSpeaking, onToggleTranscript }: InterviewHeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm h-16">
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-semibold text-gray-900">Technical Interview</h1>
        <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">
          LIVE
        </Badge>
      </div>
      
      {/* Participant Avatars */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            aiSpeaking ? 'bg-blue-500 animate-pulse' : 'bg-gray-400'
          }`}>
            <Bot className={`w-4 h-4 text-white`} />
          </div>
          <span className="text-sm text-gray-600">AI Interviewer</span>
          {aiSpeaking && (
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm text-gray-600">You</span>
        </div>

        <div className="flex items-center space-x-1">
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0"
            onClick={onToggleTranscript}
          >
            <MessageSquare className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Settings className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}; 