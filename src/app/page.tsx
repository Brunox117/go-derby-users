import Header from "@/components/Header";
import StreamPlayer from "@/components/StreamPlayer";
import Sidebar from "@/components/Sidebar";
import { getCurrentFight } from "@/lib/mockData";
import { ChatComponent } from "@/components/ChatComponent";
import { BetsComponent } from "@/components/BetsComponent";

export default function Home() {
  const currentFight = getCurrentFight();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Live Stream */}
            <StreamPlayer
              title={"Gallo 1 vs Gallo 2"}
              isLive={!!currentFight}
            />
            <BetsComponent />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ChatComponent />
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
