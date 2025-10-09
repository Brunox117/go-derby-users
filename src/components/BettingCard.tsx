'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, TrendingUp, DollarSign, Timer } from 'lucide-react';

interface BettingCardProps {
  roosterName: string;
  odds: number;
  color: string;
  isFavorite?: boolean;
  status?: 'open' | 'closed' | 'suspended';
}

export default function BettingCard({
  roosterName,
  odds,
  color,
  isFavorite = false,
  status = 'open'
}: BettingCardProps) {
  const [betAmount, setBetAmount] = useState(0);
  const [quickAmount, setQuickAmount] = useState(0);

  const potentialWin = betAmount > 0 ? (betAmount * odds).toFixed(2) : '0.00';
  const profit = betAmount > 0 ? (betAmount * (odds - 1)).toFixed(2) : '0.00';

  const handleQuickBet = (amount: number) => {
    setQuickAmount(amount);
    setBetAmount(amount);
  };

  const adjustBet = (increment: number) => {
    setBetAmount(prev => Math.max(0, prev + increment));
  };

  const isDisabled = status !== 'open';

  return (
    <Card className={`relative overflow-hidden transition-all duration-300 ${
      isFavorite ? 'derby-glow border-accent' : 'border-border'
    } ${isDisabled ? 'opacity-60' : ''}`}>
      {/* Color indicator bar */}
      <div 
        className="absolute top-0 left-0 w-full h-1"
        style={{ backgroundColor: color }}
      />
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">{roosterName}</CardTitle>
          <div className="flex items-center space-x-2">
            {isFavorite && (
              <Badge variant="default" className="bg-accent text-accent-foreground">
                Favorite
              </Badge>
            )}
            <Badge 
              variant={status === 'open' ? 'default' : 'secondary'}
              className={status === 'open' ? 'bg-primary text-primary-foreground' : ''}
            >
              {status.toUpperCase()}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Odds Display */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            <span className="text-sm text-muted-foreground">Current Odds</span>
          </div>
          <div className="text-3xl font-bold text-accent derby-text-glow">
            {odds.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground">
            {((1 / odds) * 100).toFixed(1)}% implied probability
          </p>
        </div>

        {/* Quick Bet Amounts */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">Quick Bet</p>
          <div className="grid grid-cols-3 gap-2">
            {[10, 25, 50, 100, 250, 500].map((amount) => (
              <Button
                key={amount}
                variant={quickAmount === amount ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleQuickBet(amount)}
                disabled={isDisabled}
                className="text-xs"
              >
                ${amount}
              </Button>
            ))}
          </div>
        </div>

        {/* Manual Bet Amount */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">Custom Amount</p>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => adjustBet(-10)}
              disabled={isDisabled || betAmount < 10}
            >
              <Minus className="h-4 w-4" />
            </Button>
            
            <Input
              type="number"
              value={betAmount}
              onChange={(e) => setBetAmount(Number(e.target.value) || 0)}
              placeholder="0.00"
              className="text-center"
              disabled={isDisabled}
              min="0"
              step="10"
            />
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => adjustBet(10)}
              disabled={isDisabled}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Potential Winnings */}
        {betAmount > 0 && (
          <div className="mb-4 p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Potential Win:</span>
              <span className="font-semibold text-accent">${potentialWin}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-muted-foreground">Profit:</span>
              <span className="font-semibold text-accent">${profit}</span>
            </div>
          </div>
        )}

        {/* Place Bet Button */}
        <Button 
          className="w-full" 
          disabled={isDisabled || betAmount <= 0}
          onClick={() => {
            // Place bet logic would go here
            console.log(`Placing bet: $${betAmount} on ${roosterName} at ${odds} odds`);
          }}
        >
          <DollarSign className="h-4 w-4 mr-2" />
          Place Bet ${betAmount}
        </Button>

        {/* Status Message */}
        {status !== 'open' && (
          <div className="mt-3 p-2 bg-destructive/10 rounded-lg">
            <div className="flex items-center space-x-2">
              <Timer className="h-4 w-4 text-destructive" />
              <span className="text-xs text-destructive">
                {status === 'closed' ? 'Betting closed' : 'Betting suspended'}
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
