import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { interviewQuestions } from "@/data/interviewQuestions";
import { sampleTranscript, TranscriptEntry } from "@/data/sampleTranscript";
import { codeLanguages, CodeLanguage } from "@/data/codeLanguages";

interface CandidateScorePayload {
  score: number;
  feedback: string;
}

export const useInterview = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const [code, setCode] = useState(codeLanguages[0].defaultCode);
  const [isRecording, setIsRecording] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [aiSpeaking, setAiSpeaking] = useState(false);
  const [showApiInput, setShowApiInput] = useState(true);
  const [micEnabled, setMicEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptEntry[]>(sampleTranscript);
  const [candidateScore, setCandidateScore] = useState<CandidateScorePayload | null>(null);
  const [showScore, setShowScore] = useState(false);

  const question = interviewQuestions[currentQuestion];

  const handleLanguageChange = (languageId: string) => {
    const newLanguage = codeLanguages.find(lang => lang.id === languageId);
    if (newLanguage) {
      setSelectedLanguage(languageId);
      setCode(newLanguage.defaultCode);
      toast({
        title: "Language Changed",
        description: `Switched to ${newLanguage.name}`,
      });
    }
  };

  const startInterview = () => {
    setInterviewStarted(true);
    setShowApiInput(false);
    // simulateAiGreeting();
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
      const currentLang = codeLanguages.find(lang => lang.id === selectedLanguage);
      setCode(currentLang?.defaultCode || codeLanguages[0].defaultCode);
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

  // New functions for Convai integration
  const handleCandidateScore = (scorePayload: CandidateScorePayload) => {
    setCandidateScore(scorePayload);
    setShowScore(true);
    toast({
      title: "Score Received",
      description: `Your score: ${scorePayload.score}/10`,
    });
  };

  const getCandidateCode = () => {
    return {
      code,
      language: selectedLanguage,
      question: question.title,
      timestamp: new Date().toISOString(),
    };
  };

  const hideScore = () => {
    setShowScore(false);
  };

  return {
    // State
    currentQuestion,
    code,
    selectedLanguage,
    isRecording,
    interviewStarted,
    aiSpeaking,
    showApiInput,
    micEnabled,
    videoEnabled,
    screenSharing,
    showTranscript,
    transcript,
    question,
    totalQuestions: interviewQuestions.length,
    languages: codeLanguages,
    candidateScore,
    showScore,
    
    // Actions
    setCode,
    onLanguageChange: handleLanguageChange,
    startInterview,
    nextQuestion,
    endCall,
    toggleMic,
    toggleVideo,
    toggleScreenShare,
    toggleTranscript,
    handleCandidateScore,
    getCandidateCode,
    hideScore,
  };
}; 