import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, ChevronLeft, Bot, User } from "lucide-react";

interface TranscriptEntry {
  speaker: string;
  text: string;
  timestamp: string;
}

interface TranscriptPanelProps {
  transcript: TranscriptEntry[];
  onClose: () => void;
}

export const TranscriptPanel = ({ transcript, onClose }: TranscriptPanelProps) => {
  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Transcript</span>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-6 w-6 p-0"
          onClick={onClose}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
      </div>
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-3">
          {transcript.map((entry, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  entry.speaker === 'AI' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  {entry.speaker === 'AI' ? (
                    <Bot className="w-3 h-3 text-blue-600" />
                  ) : (
                    <User className="w-3 h-3 text-green-600" />
                  )}
                </div>
                <span className="text-xs font-medium text-gray-700">{entry.speaker}</span>
                <span className="text-xs text-gray-500">{entry.timestamp}</span>
              </div>
              <p className="text-sm text-gray-600 ml-8 leading-relaxed">{entry.text}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}; 