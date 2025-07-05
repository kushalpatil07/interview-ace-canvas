import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CodeLanguage } from "@/data/codeLanguages";

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (languageId: string) => void;
  languages: CodeLanguage[];
}

export const LanguageSelector = ({
  selectedLanguage,
  onLanguageChange,
  languages,
}: LanguageSelectorProps) => {
  const currentLanguage = languages.find(lang => lang.id === selectedLanguage);

  return (
    <Select value={selectedLanguage} onValueChange={onLanguageChange}>
      <SelectTrigger className="w-36 h-8 text-xs border-gray-300 hover:border-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        <SelectValue>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono text-gray-500">
              {currentLanguage?.extension || ".py"}
            </span>
            <span className="text-sm font-medium">
              {currentLanguage?.name || "Python"}
            </span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="max-h-60">
        {languages.map((language) => (
          <SelectItem key={language.id} value={language.id}>
            <div className="flex items-center space-x-3 py-1">
              <span className="text-xs font-mono text-gray-500 w-8">
                {language.extension}
              </span>
              <span className="text-sm font-medium">{language.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}; 