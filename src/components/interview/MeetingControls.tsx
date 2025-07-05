import { Button } from "@/components/ui/button";
import { Mic, MicOff, Video, VideoOff, ScreenShare, PhoneOff } from "lucide-react";

interface MeetingControlsProps {
  micEnabled: boolean;
  videoEnabled: boolean;
  screenSharing: boolean;
  onToggleMic: () => void;
  onToggleVideo: () => void;
  onToggleScreenShare: () => void;
  onEndCall: () => void;
}

export const MeetingControls = ({
  micEnabled,
  videoEnabled,
  screenSharing,
  onToggleMic,
  onToggleVideo,
  onToggleScreenShare,
  onEndCall
}: MeetingControlsProps) => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
      <div className="bg-gray-800 rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center space-x-3">
          <Button
            variant={micEnabled ? "secondary" : "destructive"}
            size="sm"
            onClick={onToggleMic}
            className="rounded-full w-10 h-10 p-0"
          >
            {micEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
          </Button>

          <Button
            variant={videoEnabled ? "secondary" : "destructive"}
            size="sm"
            onClick={onToggleVideo}
            className="rounded-full w-10 h-10 p-0"
          >
            {videoEnabled ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
          </Button>

          <Button
            variant={screenSharing ? "default" : "secondary"}
            size="sm"
            onClick={onToggleScreenShare}
            className="rounded-full w-10 h-10 p-0"
          >
            <ScreenShare className="w-4 h-4" />
          </Button>

          <Button
            variant="destructive"
            size="sm"
            onClick={onEndCall}
            className="rounded-full w-10 h-10 p-0 bg-red-600 hover:bg-red-700"
          >
            <PhoneOff className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}; 