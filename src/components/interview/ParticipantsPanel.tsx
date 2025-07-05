import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Bot, User, ChevronUp, ChevronDown } from "lucide-react";

interface TranscriptEntry {
  speaker: string;
  text: string;
  timestamp: string;
}

interface ParticipantsPanelProps {
  aiSpeaking: boolean;
  transcript: TranscriptEntry[];
  showTranscript: boolean;
  onToggleTranscript: () => void;
}

export const ParticipantsPanel = ({ 
  aiSpeaking, 
  transcript, 
  showTranscript,
  onToggleTranscript
}: ParticipantsPanelProps) => {
  return (
    <div className="w-64 bg-white border-l border-gray-200 flex flex-col">
      {/* Participants Section */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Participants</h3>
        <div className="grid grid-cols-2 gap-3">
          {/* AI Interviewer */}
          <div className="text-center">
            <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-2 transition-all ${
              aiSpeaking ? 'bg-blue-500 animate-pulse' : 'bg-gray-400'
            }`}>
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center justify-center space-x-1">
              <span className="text-xs font-medium text-gray-700">AI Interviewer</span>
              {aiSpeaking && (
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              )}
            </div>
          </div>
          
          {/* User */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
              <User className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-medium text-gray-700">You</span>
          </div>
        </div>
      </div>

      {/* Transcript Section */}
      <div className="flex-1 flex flex-col">
        <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-700">Transcript</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 w-6 p-0"
            onClick={onToggleTranscript}
          >
            {showTranscript ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </Button>
        </div>
        
        {showTranscript && (
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-3">
              {transcript.map((entry, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      entry.speaker === 'AI' ? 'bg-blue-100' : 'bg-green-100'
                    }`}>
                      {entry.speaker === 'AI' ? (
                        <Bot className="w-2.5 h-2.5 text-blue-600" />
                      ) : (
                        <User className="w-2.5 h-2.5 text-green-600" />
                      )}
                    </div>
                    <span className="text-xs font-medium text-gray-700">{entry.speaker}</span>
                    <span className="text-xs text-gray-500">{entry.timestamp}</span>
                  </div>
                  <p className="text-xs text-gray-600 ml-7 leading-relaxed">{entry.text}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </div>
    </div>
  );
}; 