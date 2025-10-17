"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
} from "lucide-react";

interface StreamPlayerProps {
  title?: string;
  isLive?: boolean;
}

export default function StreamPlayer({
  title = "Derby Championship - Live Stream",
  isLive = true,
}: StreamPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);

  return (
    <Card className="w-full derby-glow">
      <CardContent className="p-0">
        {/* Stream Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <h2 className="text-lg font-semibold">{title}</h2>
            {isLive && (
              <Badge variant="destructive" className="live-indicator">
                LIVE
              </Badge>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Maximize className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video bg-gradient-to-br from-background to-muted">
          {/* Placeholder Video Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Play className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Stream Controls */}
        <div className="flex items-center justify-between p-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>

            {!isMuted && (
              <div className="flex items-center space-x-2 ml-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-20 h-1 bg-muted rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-xs text-muted-foreground w-8">
                  {volume}%
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-xs">
              HD Quality
            </Badge>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-destructive rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-destructive rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
