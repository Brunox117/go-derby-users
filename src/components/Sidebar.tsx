"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, Clock, Users, History } from "lucide-react";
import { getRecentFights } from "@/lib/mockData";

export default function Sidebar() {
  const [chatMessage, setChatMessage] = useState("");
  const [activeTab, setActiveTab] = useState<"chat" | "history">("chat");

  const recentFights = getRecentFights();

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // Send message logic would go here
      console.log("Sending message:", chatMessage);
      setChatMessage("");
    }
  };

  return (
    <div className="w-full h-full flex flex-col space-y-4">
      {/* Tab Navigation */}
      <div className="flex border-b border-border">
        <Button
          variant={activeTab === "chat" ? "default" : "ghost"}
          size="sm"
          onClick={() => setActiveTab("chat")}
          className="flex-1 rounded-none"
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Chat
        </Button>
        <Button
          variant={activeTab === "history" ? "default" : "ghost"}
          size="sm"
          onClick={() => setActiveTab("history")}
          className="flex-1 rounded-none"
        >
          <History className="h-4 w-4 mr-2" />
          Historial
        </Button>
      </div>

      {/* Chat Tab */}
      {activeTab === "chat" && (
        <div className="flex flex-col h-full bg-white rounded-lg">
          {/* Chat Header */}
          <div className="flex items-center p-3 border-b border-border">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Chat en Vivo</span>
              <Badge variant="secondary" className="text-xs">
                1,247 online
              </Badge>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-96">
            {[
              {
                user: "RoosterFan99",
                message: "Thunder Strike looking strong!",
                time: "2m ago",
              },
              {
                user: "BetMaster",
                message: "Odds are shifting fast",
                time: "3m ago",
              },
              {
                user: "BetMaster",
                message: "Odds are shifting fast",
                time: "3m ago",
              },
              {
                user: "BetMaster",
                message: "Odds are shifting fast",
                time: "3m ago",
              },
              {
                user: "BetMaster",
                message: "Odds are shifting fast",
                time: "3m ago",
              },
              {
                user: "BetMaster",
                message: "Odds are shifting fast",
                time: "3m ago",
              },
              {
                user: "BetMaster",
                message: "Odds are shifting fast",
                time: "3m ago",
              },
              {
                user: "DerbyKing",
                message: "This is going to be epic",
                time: "4m ago",
              },
              {
                user: "LiveBet",
                message: "Golden Feather has the speed advantage",
                time: "5m ago",
              },
            ].map((msg, index) => (
              <div key={index} className="text-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium text-accent">{msg.user}</span>
                  <span className="text-xs text-muted-foreground">
                    {msg.time}
                  </span>
                </div>
                <p className="text-foreground">{msg.message}</p>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-3 border-t border-border">
            <div className="flex space-x-2">
              <Input
                placeholder="Escribe tu mensaje..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* History Tab */}
      {activeTab === "history" && (
        <div className="flex flex-col h-full">
          <div className="flex items-center p-3 border-b border-border">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">Peleas recientes</span>
            </div>
          </div>

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
                    <span>Ganador: {fight.winner}</span>
                    <span>
                      Marcador: {fight.score1} - {fight.score2}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
