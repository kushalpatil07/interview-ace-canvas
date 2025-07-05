import {
  InterviewWelcome,
  InterviewHeader,
  QuestionPanel,
  TranscriptPanel,
  CodeEditor,
  MeetingControls,
} from "@/components/interview";
import { useInterview } from "@/hooks/useInterview";

const Index = () => {
  const {
    // State
    currentQuestion,
    code,
    interviewStarted,
    aiSpeaking,
    apiKey,
    micEnabled,
    videoEnabled,
    screenSharing,
    showTranscript,
    transcript,
    question,
    totalQuestions,
    
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
  } = useInterview();

  if (!interviewStarted) {
    return (
      <InterviewWelcome
        apiKey={apiKey}
        onApiKeyChange={setApiKey}
        onStartInterview={startInterview}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <InterviewHeader
        aiSpeaking={aiSpeaking}
        onToggleTranscript={toggleTranscript}
      />

      {/* Main Content */}
      <div className="flex-1 flex">
        <QuestionPanel
          question={question}
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
          onNextQuestion={nextQuestion}
        />

        {showTranscript && (
          <TranscriptPanel
            transcript={transcript}
            onClose={() => toggleTranscript()}
          />
        )}

        <CodeEditor
          code={code}
          onCodeChange={setCode}
          showTranscript={showTranscript}
          onToggleTranscript={toggleTranscript}
        />
      </div>

      <MeetingControls
        micEnabled={micEnabled}
        videoEnabled={videoEnabled}
        screenSharing={screenSharing}
        onToggleMic={toggleMic}
        onToggleVideo={toggleVideo}
        onToggleScreenShare={toggleScreenShare}
        onEndCall={endCall}
      />
    </div>
  );
};

export default Index;
