export interface TranscriptEntry {
  speaker: string;
  text: string;
  timestamp: string;
}

export const sampleTranscript: TranscriptEntry[] = [
  { speaker: "AI", text: "Hello! Welcome to your technical interview. Let's start with the first coding question.", timestamp: "2:30 PM" },
  { speaker: "You", text: "Hi there! I'm ready to begin.", timestamp: "2:30 PM" },
  { speaker: "AI", text: "Great! I've given you a Two Sum problem. Can you walk me through your approach?", timestamp: "2:31 PM" },
  { speaker: "You", text: "Sure, I think I can solve this using a hash map to store the complements...", timestamp: "2:31 PM" },
  { speaker: "AI", text: "That sounds like a good approach. What would be the time complexity?", timestamp: "2:32 PM" },
  { speaker: "You", text: "It should be O(n) time and O(n) space complexity.", timestamp: "2:32 PM" },
]; 