'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Zap, Target } from 'lucide-react';

interface ScoreCardProps {
  roosterName: string;
  score: number;
  color: string;
  isWinning?: boolean;
  weight?: number;
  wins?: number;
  losses?: number;
  isCurrentRound?: boolean;
}

export default function ScoreCard({
  roosterName,
  score,
  color,
  isWinning = false,
  weight = 2.3,
  wins = 0,
  losses = 0,
  isCurrentRound = false
}: ScoreCardProps) {
  const winRate = wins + losses > 0 ? ((wins / (wins + losses)) * 100).toFixed(1) : '0.0';

  return (
    <Card className={`relative overflow-hidden transition-all duration-300 ${
      isWinning ? 'derby-glow border-accent' : 'border-border'
    } ${isCurrentRound ? 'ring-2 ring-primary' : ''}`}>
      {/* Color indicator bar */}
      <div 
        className="absolute top-0 left-0 w-full h-1"
        style={{ backgroundColor: color }}
      />
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">{roosterName}</CardTitle>
          {isWinning && (
            <Badge variant="default" className="bg-accent text-accent-foreground">
              <Trophy className="h-3 w-3 mr-1" />
              Leading
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Score Display */}
        <div className="text-center mb-4">
          <div className={`text-4xl font-bold ${
            isWinning ? 'text-accent derby-text-glow' : 'text-foreground'
          }`}>
            {score}
          </div>
          <p className="text-sm text-muted-foreground">Current Score</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="space-y-1">
            <div className="flex items-center justify-center">
              <Target className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground">Weight</p>
            <p className="text-sm font-medium">{weight}kg</p>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center justify-center">
              <Zap className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground">Win Rate</p>
            <p className="text-sm font-medium">{winRate}%</p>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center justify-center">
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground">Record</p>
            <p className="text-sm font-medium">{wins}-{losses}</p>
          </div>
        </div>

        {/* Performance Indicator */}
        <div className="mt-4 pt-3 border-t border-border">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Performance</span>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i < Math.min(Math.floor((wins / Math.max(wins + losses, 1)) * 5), 5)
                      ? 'bg-accent'
                      : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
