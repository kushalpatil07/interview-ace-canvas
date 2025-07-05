export interface Question {
  id: number;
  title: string;
  difficulty: string;
  description: string;
  example: string;
}

export const interviewQuestions: Question[] = [
  {
    id: 1,
    title: "Longest Common Subsequence",
    difficulty: "Medium",
    description: "Given two strings text1 and text2, return the length of their longest common subsequence. A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.",
    example: "Input: text1 = 'abcde', text2 = 'ace'\nOutput: 3\nExplanation: The longest common subsequence is 'ace' and its length is 3.\n\nInput: text1 = 'abc', text2 = 'abc'\nOutput: 3\nExplanation: The longest common subsequence is 'abc' and its length is 3.\n\nInput: text1 = 'abc', text2 = 'def'\nOutput: 0\nExplanation: There is no such common subsequence, so the result is 0.",
  },
]; 