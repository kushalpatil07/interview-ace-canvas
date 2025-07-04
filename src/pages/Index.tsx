
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Mic, MicOff, Video, VideoOff, Phone, PhoneOff, ScreenShare, Code, User, Bot, Settings, MoreVertical, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
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

// Sample transcript data
const sampleTranscript = [
  { speaker: "AI", text: "Hello! Welcome to your technical interview. Let's start with the first coding question.", timestamp: "2:30 PM" },
  { speaker: "You", text: "Hi there! I'm ready to begin.", timestamp: "2:30 PM" },
  { speaker: "AI", text: "Great! I've given you a Two Sum problem. Can you walk me through your approach?", timestamp: "2:31 PM" },
  { speaker: "You", text: "Sure, I think I can solve this using a hash map to store the complements...", timestamp: "2:31 PM" },
  { speaker: "AI", text: "That sounds like a good approach. What would be the time complexity?", timestamp: "2:32 PM" },
  { speaker: "You", text: "It should be O(n) time and O(n) space complexity.", timestamp: "2:32 PM" },
];

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [code, setCode] = useState("# Write your solution here\n\ndef solution():\n    pass");
  const [isRecording, setIsRecording] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [aiSpeaking, setAiSpeaking] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiInput, setShowApiInput] = useState(true);
  const [micEnabled, setMicEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [transcript, setTranscript] = useState(sampleTranscript);

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
      description: "Hello! Welcome to your technical interview. Let's start with the first coding question.",
    });
    setTimeout(() => setAiSpeaking(false), 3000);
  };

  const nextQuestion = () => {
    if (currentQuestion < interviewQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setCode("# Write your solution here\n\ndef solution():\n    pass");
      toast({
        title: "Next Question",
        description: "Moving to the next coding challenge.",
      });
    }
  };

  const endCall = () => {
    setInterviewStarted(false);
    setShowApiInput(true);
    toast({
      title: "Interview Ended",
      description: "Thank you for participating in the interview.",
    });
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
            <p className="text-gray-600">Join your technical interview session</p>
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
            Join Interview
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Minimal Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm h-16">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-semibold text-gray-900">Technical Interview</h1>
          <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">
            LIVE
          </Badge>
        </div>
        
        {/* Participant Avatars */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              aiSpeaking ? 'bg-blue-500 animate-pulse' : 'bg-gray-400'
            }`}>
              <Bot className={`w-4 h-4 text-white`} />
            </div>
            <span className="text-sm text-gray-600">AI Interviewer</span>
            {aiSpeaking && (
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-gray-600">You</span>
          </div>

          <div className="flex items-center space-x-1">
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0"
              onClick={() => setShowTranscript(!showTranscript)}
            >
              <MessageSquare className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Question Panel */}
        <div className="w-80 bg-white border-r border-gray-200 p-6 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-semibold text-gray-900">{question.title}</h3>
              <Badge className={getDifficultyColor(question.difficulty)}>
                {question.difficulty}
              </Badge>
            </div>
            
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 leading-relaxed">{question.description}</p>
              
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
                <h4 className="font-medium text-gray-900 mb-2">Example:</h4>
                <pre className="text-sm text-gray-700 whitespace-pre-wrap">{question.example}</pre>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {interviewQuestions.length}
              </div>
              <Button variant="outline" size="sm" onClick={nextQuestion}>
                Next Question
              </Button>
            </div>
          </div>
        </div>

        {/* Transcript Panel - Collapsible */}
        {showTranscript && (
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
                onClick={() => setShowTranscript(false)}
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
        )}

        {/* Code Editor */}
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
                  onClick={() => setShowTranscript(true)}
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
              onChange={(e) => setCode(e.target.value)}
              placeholder="Write your solution here..."
              className="w-full h-full resize-none border-0 rounded-none font-mono text-sm leading-relaxed p-4 focus:ring-0 bg-white"
              style={{ minHeight: '100%' }}
            />
          </div>
        </div>
      </div>

      {/* Floating Meeting Controls */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="bg-gray-800 rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center space-x-3">
            <Button
              variant={micEnabled ? "secondary" : "destructive"}
              size="sm"
              onClick={() => setMicEnabled(!micEnabled)}
              className="rounded-full w-10 h-10 p-0"
            >
              {micEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            </Button>

            <Button
              variant={videoEnabled ? "secondary" : "destructive"}
              size="sm"
              onClick={() => setVideoEnabled(!videoEnabled)}
              className="rounded-full w-10 h-10 p-0"
            >
              {videoEnabled ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
            </Button>

            <Button
              variant={screenSharing ? "default" : "secondary"}
              size="sm"
              onClick={() => setScreenSharing(!screenSharing)}
              className="rounded-full w-10 h-10 p-0"
            >
              <ScreenShare className="w-4 h-4" />
            </Button>

            <Button
              variant="destructive"
              size="sm"
              onClick={endCall}
              className="rounded-full w-10 h-10 p-0 bg-red-600 hover:bg-red-700"
            >
              <PhoneOff className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
