import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Code } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";
import { CodeLanguage } from "@/data/codeLanguages";

interface CodeEditorProps {
  code: string;
  onCodeChange: (code: string) => void;
  selectedLanguage: string;
  onLanguageChange: (languageId: string) => void;
  languages: CodeLanguage[];
}

export const CodeEditor = ({ 
  code, 
  onCodeChange,
  selectedLanguage,
  onLanguageChange,
  languages
}: CodeEditorProps) => {
  const currentLanguage = languages.find(lang => lang.id === selectedLanguage);

  return (
    <div className="flex-1 flex flex-col bg-white">
      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Code className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Code Editor</span>
        </div>
        <div className="flex items-center space-x-2">
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={onLanguageChange}
            languages={languages}
          />
          <Badge variant="outline" className="text-xs">
            {currentLanguage?.extension || ".py"}
          </Badge>
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