import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Code, MessageSquare } from "lucide-react";

interface CodeEditorProps {
  code: string;
  onCodeChange: (code: string) => void;
  showTranscript: boolean;
  onToggleTranscript: () => void;
}

export const CodeEditor = ({ 
  code, 
  onCodeChange, 
  showTranscript, 
  onToggleTranscript 
}: CodeEditorProps) => {
  return (
    <div className="flex-1 flex flex-col bg-white">
      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Code className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Code Editor</span>
        </div>
        <div className="flex items-center space-x-2">
          {!showTranscript && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onToggleTranscript}
              className="text-xs"
            >
              <MessageSquare className="w-3 h-3 mr-1" />
              Show Transcript
            </Button>
          )}
          <Badge variant="outline" className="text-xs">Python</Badge>
        </div>
      </div>
      
      <div className="flex-1">
        <Textarea
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
          placeholder="Write your solution here..."
          className="w-full h-full resize-none border-0 rounded-none font-mono text-sm leading-relaxed p-4 focus:ring-0 bg-white"
          style={{ minHeight: '100%' }}
        />
      </div>
    </div>
  );
}; 