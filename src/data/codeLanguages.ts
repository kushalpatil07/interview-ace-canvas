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
    defaultCode: "class Solution:\n\tdef getLengthOfLCS(self, s1: str, s2: str) -> int:\n\t\t# add your logic here\n\t\tpass",
    syntaxHighlighting: "python",
  },
  {
    id: "javascript",
    name: "JavaScript",
    extension: ".js",
    defaultCode: "class Solution {\n    getLengthOfLCS(s1, s2) {\n        // add your logic here\n        \n    }\n}",
    syntaxHighlighting: "javascript",
  },
  {
    id: "typescript",
    name: "TypeScript",
    extension: ".ts",
    defaultCode: "class Solution {\n    getLengthOfLCS(s1: string, s2: string): number {\n        // add your logic here\n        \n    }\n}",
    syntaxHighlighting: "typescript",
  },
  {
    id: "java",
    name: "Java",
    extension: ".java",
    defaultCode: "class Solution {\n    public int getLengthOfLCS(String s1, String s2) {\n        // add your logic here\n        \n    }\n}",
    syntaxHighlighting: "java",
  },
  {
    id: "cpp",
    name: "C++",
    extension: ".cpp",
    defaultCode: "#include <iostream>\n#include <string>\n#include <vector>\n\nclass Solution {\npublic:\n    int getLengthOfLCS(string s1, string s2) {\n        // add your logic here\n        \n    }\n};",
    syntaxHighlighting: "cpp",
  },
  {
    id: "csharp",
    name: "C#",
    extension: ".cs",
    defaultCode: "using System;\n\npublic class Solution {\n    public int GetLengthOfLCS(string s1, string s2) {\n        // add your logic here\n        \n    }\n}",
    syntaxHighlighting: "csharp",
  },
  {
    id: "go",
    name: "Go",
    extension: ".go",
    defaultCode: "package main\n\ntype Solution struct{}\n\nfunc (s *Solution) getLengthOfLCS(s1 string, s2 string) int {\n    // add your logic here\n    \n}",
    syntaxHighlighting: "go",
  },
  {
    id: "rust",
    name: "Rust",
    extension: ".rs",
    defaultCode: "impl Solution {\n    pub fn get_length_of_lcs(s1: String, s2: String) -> i32 {\n        // add your logic here\n        \n    }\n}",
    syntaxHighlighting: "rust",
  },
  {
    id: "swift",
    name: "Swift",
    extension: ".swift",
    defaultCode: "class Solution {\n    func getLengthOfLCS(_ s1: String, _ s2: String) -> Int {\n        // add your logic here\n        \n    }\n}",
    syntaxHighlighting: "swift",
  },
  {
    id: "kotlin",
    name: "Kotlin",
    extension: ".kt",
    defaultCode: "class Solution {\n    fun getLengthOfLCS(s1: String, s2: String): Int {\n        // add your logic here\n        \n    }\n}",
    syntaxHighlighting: "kotlin",
  },
]; 