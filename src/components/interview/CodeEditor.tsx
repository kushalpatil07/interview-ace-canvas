import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";
import { CodeLanguage } from "@/data/codeLanguages";
import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  code: string;
  onCodeChange: (code: string) => void;
  selectedLanguage: string;
  onLanguageChange: (languageId: string) => void;
  languages: CodeLanguage[];
}

// Map our language IDs to Monaco language IDs
const getMonacoLanguage = (languageId: string): string => {
  const languageMap: { [key: string]: string } = {
    python: "python",
    javascript: "javascript",
    typescript: "typescript",
    java: "java",
    cpp: "cpp",
    csharp: "csharp",
    go: "go",
    rust: "rust",
    swift: "swift",
    kotlin: "kotlin",
  };
  return languageMap[languageId] || "python";
};

export const CodeEditor = ({ 
  code, 
  onCodeChange,
  selectedLanguage,
  onLanguageChange,
  languages
}: CodeEditorProps) => {
  const currentLanguage = languages.find(lang => lang.id === selectedLanguage);

  const handleEditorChange = (value: string | undefined) => {
    onCodeChange(value || "");
  };

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
        <Editor
          height="100%"
          defaultLanguage="python"
          language={getMonacoLanguage(selectedLanguage)}
          value={code}
          onChange={handleEditorChange}
          theme="vs-light"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            roundedSelection: false,
            scrollBeyondLastLine: false,
            readOnly: false,
            automaticLayout: true,
            wordWrap: "on",
            tabSize: 4,
            insertSpaces: true,
            detectIndentation: true,
            trimAutoWhitespace: true,
            largeFileOptimizations: false,
            suggestOnTriggerCharacters: true,
            acceptSuggestionOnEnter: "on",
            tabCompletion: "on",
            wordBasedSuggestions: "allDocuments",
            parameterHints: {
              enabled: true,
            },
            hover: {
              enabled: true,
            },
            contextmenu: true,
            quickSuggestions: true,
            suggest: {
              insertMode: "replace",
            },
          }}
        />
      </div>
    </div>
  );
}; 