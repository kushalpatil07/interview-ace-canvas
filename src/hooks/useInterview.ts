import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { interviewQuestions } from "@/data/interviewQuestions";
import { sampleTranscript, TranscriptEntry } from "@/data/sampleTranscript";

export const useInterview = () => {
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
  const [transcript, setTranscript] = useState<TranscriptEntry[]>(sampleTranscript);

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

  const toggleMic = () => setMicEnabled(!micEnabled);
  const toggleVideo = () => setVideoEnabled(!videoEnabled);
  const toggleScreenShare = () => setScreenSharing(!screenSharing);
  const toggleTranscript = () => setShowTranscript(!showTranscript);

  return {
    // State
    currentQuestion,
    code,
    isRecording,
    interviewStarted,
    aiSpeaking,
    apiKey,
    showApiInput,
    micEnabled,
    videoEnabled,
    screenSharing,
    showTranscript,
    transcript,
    question,
    totalQuestions: interviewQuestions.length,
    
    // Actions
    setApiKey,
    setCode,
    startInterview,
    nextQuestion,
    endCall,
    toggleMic,
    toggleVideo,
    toggleScreenShare,
    toggleTranscript,
  };
}; 