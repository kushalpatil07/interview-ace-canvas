import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Code, Trophy } from "lucide-react";

interface ConvaiTestPanelProps {
  onTestScore: () => void;
  onTestCode: () => void;
}

export const ConvaiTestPanel: React.FC<ConvaiTestPanelProps> = ({ 
  onTestScore, 
  onTestCode 
}) => {
  const simulateConvaiCall = (toolName: string, data?: any) => {
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      // Simulate the Convai agent calling our client tools
      const event = new CustomEvent('elevenlabs-convai:call', {
        detail: {
          config: {
            clientTools: {
              [toolName]: data ? () => data : () => ({ status: 'success' })
            }
          }
        }
      });
      widget.dispatchEvent(event);
    }
  };

  const generateTestFeedback = (score: number): string => {
    if (score >= 9) {
      return "Excellent work! Your solution demonstrates a deep understanding of the problem. The approach is optimal and the implementation is clean and efficient. Great job on considering edge cases and providing clear explanations.";
    } else if (score >= 8) {
      return "Great job! Your solution shows good problem-solving skills. The approach is sound and the implementation is mostly correct. Consider optimizing for better time complexity in future attempts.";
    } else if (score >= 7) {
      return "Good effort! You have the right idea but there are some implementation issues. The logic is generally correct but needs refinement. Practice more to improve your coding skills.";
    } else if (score >= 6) {
      return "Not bad! You understand the basic concept but the solution needs work. The approach could be more efficient and the implementation has some bugs. Keep practicing!";
    } else {
      return "The solution needs significant improvement. The approach is not optimal and the implementation has major issues. Focus on understanding the problem better and practice more coding problems.";
    }
  };

  const testScore = () => {
    const randomScore = Math.floor(Math.random() * 10) + 1;
    const feedback = generateTestFeedback(randomScore);
    const scorePayload = { score: randomScore, feedback };
    
    console.log('Testing score payload:', scorePayload);
    
    // Simulate the candidate_score tool being called
    if (window.convaiCallbacks?.onCandidateScore) {
      window.convaiCallbacks.onCandidateScore(scorePayload);
    }
    
    onTestScore();
  };

  const testCode = () => {
    console.log('Testing code retrieval');
    
    // Simulate the candidate_code tool being called
    if (window.convaiCallbacks?.getCandidateCode) {
      const codeData = window.convaiCallbacks.getCandidateCode();
      console.log('Retrieved code data:', codeData);
    }
    
    onTestCode();
  };

  return (
    <Card className="p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Convai Integration Test</h3>
        <Badge variant="outline" className="bg-blue-100 text-blue-800">
          Test Panel
        </Badge>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="text-sm text-gray-700">Test Score Reception</span>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={testScore}
            className="ml-auto"
          >
            <Play className="w-4 h-4 mr-1" />
            Test Score
          </Button>
        </div>
        
        <div className="flex items-center space-x-3">
          <Code className="w-5 h-5 text-green-500" />
          <span className="text-sm text-gray-700">Test Code Retrieval</span>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={testCode}
            className="ml-auto"
          >
            <Play className="w-4 h-4 mr-1" />
            Test Code
          </Button>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600">
          This panel simulates Convai agent calls to test the client tools integration. 
          The score test generates realistic feedback based on the random score.
          Check the browser console for detailed logs.
        </p>
      </div>
    </Card>
  );
}; 