import React, { useRef, useEffect } from 'react';

// Declare the custom element for TypeScript
// (We will cast as any in JSX to avoid prop errors)

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': any;
    }
  }
  
  interface Window {
    convaiCallbacks: {
      onCandidateScore: ((scorePayload: { score: number; feedback: string }) => void) | null;
      getCandidateCode: (() => any) | null;
    };
  }
}

interface ConvaiWidgetProps {
  agentId: string;
  actionText?: string;
  startCallText?: string;
  endCallText?: string;
  expandText?: string;
  listeningText?: string;
  speakingText?: string;
  onCandidateScore?: (scorePayload: { score: number; feedback: string }) => void;
  getCandidateCode?: () => any;
}

const ConvaiWidget: React.FC<ConvaiWidgetProps> = ({
  agentId,
  actionText = "Need assistance?",
  startCallText = "Begin conversation",
  endCallText = "End call",
  expandText = "Open chat",
  listeningText = "Listening...",
  speakingText = "Assistant speaking",
  onCandidateScore,
  getCandidateCode
}) => {
  const widgetRef = useRef<any>(null);

  useEffect(() => {
    const el = widgetRef.current;
    if (el) {
      el.setAttribute('agent-id', agentId);
      el.setAttribute('action-text', actionText);
      el.setAttribute('start-call-text', startCallText);
      el.setAttribute('end-call-text', endCallText);
      el.setAttribute('expand-text', expandText);
      el.setAttribute('listening-text', listeningText);
      el.setAttribute('speaking-text', speakingText);
    }
  }, [agentId, actionText, startCallText, endCallText, expandText, listeningText, speakingText]);

  // Set up global callbacks for client tools
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize global callbacks if they don't exist
      if (!window.convaiCallbacks) {
        window.convaiCallbacks = {
          onCandidateScore: null,
          getCandidateCode: null
        };
      }
      
      // Set the callback functions
      window.convaiCallbacks.onCandidateScore = onCandidateScore || null;
      window.convaiCallbacks.getCandidateCode = getCandidateCode || null;
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined' && window.convaiCallbacks) {
        window.convaiCallbacks.onCandidateScore = null;
        window.convaiCallbacks.getCandidateCode = null;
      }
    };
  }, [onCandidateScore, getCandidateCode]);

  return (
    <div className="w-full h-full">
      {React.createElement('elevenlabs-convai', { ref: widgetRef })}
    </div>
  );
};

export default ConvaiWidget; 