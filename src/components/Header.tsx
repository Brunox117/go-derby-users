"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card">
      <div className=" flex h-16 items-center justify-between px-4">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                G
              </span>
            </div>
            <h1 className="text-xl font-bold derby-text-glow">Go Derby</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              className="text-foreground hover:text-accent"
            >
              Inicio
            </Button>
          </nav>
        </div>

        {/* User Actions */}
        <div className="flex items-end space-x-4">
          {/* User Menu */}
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
              <AvatarFallback className="bg-accent text-accent-foreground">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="text-sm font-medium">Bruno</p>
              <p className="text-xs text-muted-foreground">$1,250.00</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
