export interface CodeLanguage {
  id: string;
  name: string;
  extension: string;
  defaultCode: string;
  syntaxHighlighting: string;
}

export const codeLanguages: CodeLanguage[] = [
  {
    id: "python",
    name: "Python",
    extension: ".py",
    defaultCode: "# Write your solution here\n\ndef solution():\n    pass",
    syntaxHighlighting: "python",
  },
  {
    id: "javascript",
    name: "JavaScript",
    extension: ".js",
    defaultCode: "// Write your solution here\n\nfunction solution() {\n    \n}",
    syntaxHighlighting: "javascript",
  },
  {
    id: "typescript",
    name: "TypeScript",
    extension: ".ts",
    defaultCode: "// Write your solution here\n\nfunction solution(): any {\n    \n}",
    syntaxHighlighting: "typescript",
  },
  {
    id: "java",
    name: "Java",
    extension: ".java",
    defaultCode: "// Write your solution here\n\nclass Solution {\n    public void solution() {\n        \n    }\n}",
    syntaxHighlighting: "java",
  },
  {
    id: "cpp",
    name: "C++",
    extension: ".cpp",
    defaultCode: "// Write your solution here\n\n#include <iostream>\n#include <vector>\n\nclass Solution {\npublic:\n    void solution() {\n        \n    }\n};",
    syntaxHighlighting: "cpp",
  },
  {
    id: "csharp",
    name: "C#",
    extension: ".cs",
    defaultCode: "// Write your solution here\n\nusing System;\n\npublic class Solution {\n    public void solution() {\n        \n    }\n}",
    syntaxHighlighting: "csharp",
  },
  {
    id: "go",
    name: "Go",
    extension: ".go",
    defaultCode: "// Write your solution here\n\npackage main\n\nfunc solution() {\n    \n}",
    syntaxHighlighting: "go",
  },
  {
    id: "rust",
    name: "Rust",
    extension: ".rs",
    defaultCode: "// Write your solution here\n\nfn solution() {\n    \n}",
    syntaxHighlighting: "rust",
  },
  {
    id: "swift",
    name: "Swift",
    extension: ".swift",
    defaultCode: "// Write your solution here\n\nfunc solution() {\n    \n}",
    syntaxHighlighting: "swift",
  },
  {
    id: "kotlin",
    name: "Kotlin",
    extension: ".kt",
    defaultCode: "// Write your solution here\n\nfun solution() {\n    \n}",
    syntaxHighlighting: "kotlin",
  },
]; 