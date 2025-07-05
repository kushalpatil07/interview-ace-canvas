import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, MoreVertical, MessageSquare } from "lucide-react";

interface InterviewHeaderProps {
  onToggleTranscript: () => void;
}

export const InterviewHeader = ({ onToggleTranscript }: InterviewHeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm h-16">
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-semibold text-gray-900">Technical Interview</h1>
        <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">
          LIVE
        </Badge>
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
    </header>
  );
}; 