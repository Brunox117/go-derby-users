'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  MessageSquare, 
  Send, 
  TrendingUp, 
  Trophy, 
  Clock, 
  Users, 
  ChevronDown, 
  ChevronUp,
  History,
  BarChart3
} from 'lucide-react';
import { mockBettingHistory, mockStatistics, getRecentFights } from '@/lib/mockData';

export default function Sidebar() {
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [isHistoryOpen, setIsHistoryOpen] = useState(true);
  const [chatMessage, setChatMessage] = useState('');
  const [activeTab, setActiveTab] = useState<'chat' | 'history' | 'stats'>('chat');

  const recentFights = getRecentFights();

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // Send message logic would go here
      console.log('Sending message:', chatMessage);
      setChatMessage('');
    }
  };

  return (
    <div className="w-full h-full flex flex-col space-y-4">
      {/* Tab Navigation */}
      <div className="flex border-b border-border">
        <Button
          variant={activeTab === 'chat' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('chat')}
          className="flex-1 rounded-none"
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Chat
        </Button>
        <Button
          variant={activeTab === 'history' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('history')}
          className="flex-1 rounded-none"
        >
          <History className="h-4 w-4 mr-2" />
          History
        </Button>
        <Button
          variant={activeTab === 'stats' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('stats')}
          className="flex-1 rounded-none"
        >
          <BarChart3 className="h-4 w-4 mr-2" />
          Stats
        </Button>
      </div>

      {/* Chat Tab */}
      {activeTab === 'chat' && (
        <div className="flex flex-col h-full">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-3 border-b border-border">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Live Chat</span>
              <Badge variant="secondary" className="text-xs">1,247 online</Badge>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsChatOpen(!isChatOpen)}
            >
              {isChatOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronUp className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Chat Messages */}
          {isChatOpen && (
            <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-96">
              {[
                { user: 'RoosterFan99', message: 'Thunder Strike looking strong!', time: '2m ago' },
                { user: 'BetMaster', message: 'Odds are shifting fast', time: '3m ago' },
                { user: 'DerbyKing', message: 'This is going to be epic', time: '4m ago' },
                { user: 'LiveBet', message: 'Golden Feather has the speed advantage', time: '5m ago' }
              ].map((msg, index) => (
                <div key={index} className="text-sm">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-accent">{msg.user}</span>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <p className="text-foreground">{msg.message}</p>
                </div>
              ))}
            </div>
          )}

          {/* Chat Input */}
          {isChatOpen && (
            <div className="p-3 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* History Tab */}
      {activeTab === 'history' && (
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-3 border-b border-border">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">Recent Fights</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsHistoryOpen(!isHistoryOpen)}
            >
              {isHistoryOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronUp className="h-4 w-4" />
              )}
            </Button>
          </div>

          {isHistoryOpen && (
            <div className="flex-1 overflow-y-auto space-y-3 p-3">
              {recentFights.map((fight) => (
                <Card key={fight.id} className="p-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        {fight.rooster1.name} vs {fight.rooster2.name}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {fight.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Winner: {fight.winner}</span>
                      <span>Score: {fight.score1} - {fight.score2}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Odds:</span>
                      <span>{fight.odds1} / {fight.odds2}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Stats Tab */}
      {activeTab === 'stats' && (
        <div className="space-y-4 p-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Today&apos;s Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Fights</span>
                <span className="font-semibold">{mockStatistics.totalFights}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Bets</span>
                <span className="font-semibold">{mockStatistics.totalBets}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Win Rate</span>
                <span className="font-semibold text-accent">{mockStatistics.winRate}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Avg Odds</span>
                <span className="font-semibold">{mockStatistics.averageOdds}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center">
                <Trophy className="h-4 w-4 mr-2" />
                Your Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Bets</span>
                <span className="font-semibold">{mockBettingHistory.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Won</span>
                <span className="font-semibold text-accent">
                  {mockBettingHistory.filter(bet => bet.result === 'won').length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Lost</span>
                <span className="font-semibold text-destructive">
                  {mockBettingHistory.filter(bet => bet.result === 'lost').length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Pending</span>
                <span className="font-semibold">
                  {mockBettingHistory.filter(bet => bet.result === 'pending').length}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
