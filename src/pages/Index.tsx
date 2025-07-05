import {
  InterviewWelcome,
  InterviewHeader,
  QuestionPanel,
  ParticipantsPanel,
  CodeEditor,
  MeetingControls,
  ConvaiWidget,
  ScoreDisplay,
  ConvaiTestPanel,
} from "@/components/interview";
import { useInterview } from "@/hooks/useInterview";

const Index = () => {
  const {
    // State
    currentQuestion,
    code,
    selectedLanguage,
    interviewStarted,
    aiSpeaking,
    micEnabled,
    videoEnabled,
    screenSharing,
    showTranscript,
    transcript,
    question,
    totalQuestions,
    languages,
    candidateScore,
    showScore,
    
    // Actions
    setCode,
    onLanguageChange,
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
  } = useInterview();

  if (!interviewStarted) {
    return (
      <InterviewWelcome
        onStartInterview={startInterview}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <InterviewHeader
        onToggleTranscript={toggleTranscript}
      />

      {/* Test Panel - Remove in production */}
      {/* <div className="px-4 pt-4">
        <ConvaiTestPanel
          onTestScore={() => console.log('Score test completed')}
          onTestCode={() => console.log('Code test completed')}
        />
      </div> */}

      {/* Main Content */}
      <div className="flex-1 flex">
        <QuestionPanel
          question={question}
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
          onNextQuestion={nextQuestion}
        />

        <CodeEditor
          code={code}
          onCodeChange={setCode}
          selectedLanguage={selectedLanguage}
          onLanguageChange={onLanguageChange}
          languages={languages}
        />

        {/* <ParticipantsPanel
          aiSpeaking={aiSpeaking}
          transcript={transcript}
          showTranscript={showTranscript}
          onToggleTranscript={toggleTranscript}
        /> */}
      </div>

      {/* <MeetingControls
        micEnabled={micEnabled}
        videoEnabled={videoEnabled}
        screenSharing={screenSharing}
        onToggleMic={toggleMic}
        onToggleVideo={toggleVideo}
        onToggleScreenShare={toggleScreenShare}
        onEndCall={endCall}
      /> */}

      {/* ElevenLabs Convai Widget */}
      <div className="fixed bottom-4 right-4 z-50">
        <ConvaiWidget
          agentId="agent_01jzaxpmnsehqtsn5hc3bjqftt"
          actionText="Need assistance?"
          startCallText="Begin conversation"
          endCallText="End call"
          expandText="Open chat"
          listeningText="Listening..."
          speakingText="Assistant speaking"
          onCandidateScore={handleCandidateScore}
          getCandidateCode={getCandidateCode}
        />
      </div>

      {/* Score Display Modal */}
      {showScore && candidateScore !== null && (
        <ScoreDisplay
          scorePayload={candidateScore}
          onClose={hideScore}
        />
      )}
    </div>
  );
};

export default Index;
