
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mic, MicOff, Play, Pause, Code, User, Bot } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Sample Google-style interview questions
const interviewQuestions = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    example: "Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].",
  },
  {
    id: 2,
    title: "Valid Parentheses",
    difficulty: "Easy",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    example: "Input: s = '()'\nOutput: true\n\nInput: s = '([)]'\nOutput: false",
  },
  {
    id: 3,
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    description: "Given the root of a binary tree, return the level order traversal of its nodes' values.",
    example: "Input: root = [3,9,20,null,null,15,7]\nOutput: [[3],[9,20],[15,7]]",
  },
];

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [code, setCode] = useState("// Write your solution here\n\n");
  const [isRecording, setIsRecording] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [aiSpeaking, setAiSpeaking] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiInput, setShowApiInput] = useState(true);

  const question = interviewQuestions[currentQuestion];

  const startInterview = () => {
    if (!apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter your ElevenLabs API key to start the interview",
        variant: "destructive",
      });
      return;
    }
    setInterviewStarted(true);
    setShowApiInput(false);
    simulateAiGreeting();
  };

  const simulateAiGreeting = () => {
    setAiSpeaking(true);
    toast({
      title: "AI Interviewer",
      description: "Hello! I'm your AI interviewer. Let's start with the first coding question.",
    });
    setTimeout(() => setAiSpeaking(false), 3000);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      toast({
        title: "Recording Started",
        description: "I'm listening to your explanation...",
      });
    } else {
      toast({
        title: "Recording Stopped",
        description: "Thank you for your explanation.",
      });
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < interviewQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setCode("// Write your solution here\n\n");
      toast({
        title: "Next Question",
        description: "Moving to the next coding challenge.",
      });
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  if (!interviewStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
            <Code className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">AI Interview Platform</h1>
            <p className="text-gray-600">Experience Google-style coding interviews with AI</p>
          </div>
          
          {showApiInput && (
            <div className="space-y-4">
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ElevenLabs API Key
                </label>
                <Textarea
                  placeholder="Enter your ElevenLabs API key for voice features..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="w-full"
                />
                <p className="text-xs text-gray-500 mt-1">
                  You'll need an ElevenLabs API key for the AI voice interviewer feature.
                </p>
              </div>
            </div>
          )}

          <Button 
            onClick={startInterview} 
            className="w-full bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            Start Interview
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-semibold text-gray-900">AI Interview Session</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-sm">
              Question {currentQuestion + 1} of {interviewQuestions.length}
            </Badge>
            <Button variant="outline" size="sm" onClick={nextQuestion}>
              Next Question
            </Button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* AI Interviewer Panel */}
        <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col">
          {/* AI Avatar */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                aiSpeaking ? 'bg-blue-600 animate-pulse' : 'bg-gray-200'
              }`}>
                <Bot className={`w-6 h-6 ${aiSpeaking ? 'text-white' : 'text-gray-600'}`} />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">AI Interviewer</h2>
                <p className="text-sm text-gray-500">
                  {aiSpeaking ? 'Speaking...' : 'Ready to help'}
                </p>
              </div>
            </div>
          </div>

          {/* Current Question */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold text-gray-900">{question.title}</h3>
                <Badge className={getDifficultyColor(question.difficulty)}>
                  {question.difficulty}
                </Badge>
              </div>
              
              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 leading-relaxed">{question.description}</p>
                
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Example:</h4>
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap">{question.example}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Voice Controls */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="space-y-3">
              <Button
                onClick={toggleRecording}
                className={`w-full ${
                  isRecording 
                    ? 'bg-red-600 hover:bg-red-700' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isRecording ? (
                  <>
                    <MicOff className="w-4 h-4 mr-2" />
                    Stop Recording
                  </>
                ) : (
                  <>
                    <Mic className="w-4 h-4 mr-2" />
                    Start Recording
                  </>
                )}
              </Button>
              <p className="text-xs text-gray-500 text-center">
                Use voice to explain your approach
              </p>
            </div>
          </div>
        </div>

        {/* Coding Canvas */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 bg-gray-100 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-900">Code Editor</h3>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">JavaScript</Badge>
                <Button variant="ghost" size="sm">
                  <Code className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Write your solution here..."
              className="w-full h-full resize-none border-0 rounded-none font-mono text-sm leading-relaxed p-6 focus:ring-0"
              style={{ minHeight: '100%' }}
            />
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Explain your approach while coding
              </p>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs text-green-600">
                  No execution needed
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
