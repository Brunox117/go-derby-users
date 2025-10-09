import Header from '@/components/Header';
import StreamPlayer from '@/components/StreamPlayer';
import ScoreCard from '@/components/ScoreCard';
import BettingCard from '@/components/BettingCard';
import Sidebar from '@/components/Sidebar';
import { getCurrentFight } from '@/lib/mockData';

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
              title={currentFight ? 
                `${currentFight.rooster1.name} vs ${currentFight.rooster2.name}` : 
                "Derby Championship - Live Stream"
              }
              isLive={!!currentFight}
            />
            
            {/* Score and Betting Cards */}
            {currentFight && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Score Cards */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Current Scores</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <ScoreCard
                      roosterName={currentFight.rooster1.name}
                      score={currentFight.score1 || 0}
                      color={currentFight.rooster1.color}
                      isWinning={(currentFight.score1 || 0) > (currentFight.score2 || 0)}
                      weight={currentFight.rooster1.weight}
                      wins={currentFight.rooster1.wins}
                      losses={currentFight.rooster1.losses}
                      isCurrentRound={true}
                    />
                    <ScoreCard
                      roosterName={currentFight.rooster2.name}
                      score={currentFight.score2 || 0}
                      color={currentFight.rooster2.color}
                      isWinning={(currentFight.score2 || 0) > (currentFight.score1 || 0)}
                      weight={currentFight.rooster2.weight}
                      wins={currentFight.rooster2.wins}
                      losses={currentFight.rooster2.losses}
                      isCurrentRound={true}
                    />
                  </div>
                </div>

                {/* Betting Cards */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Live Betting</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <BettingCard
                      roosterName={currentFight.rooster1.name}
                      odds={currentFight.odds1}
                      color={currentFight.rooster1.color}
                      isFavorite={currentFight.odds1 < currentFight.odds2}
                      status="open"
                    />
                    <BettingCard
                      roosterName={currentFight.rooster2.name}
                      odds={currentFight.odds2}
                      color={currentFight.rooster2.color}
                      isFavorite={currentFight.odds2 < currentFight.odds1}
                      status="open"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* No Live Fight Message */}
            {!currentFight && (
              <div className="text-center py-12">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center">
                    <span className="text-2xl">🐓</span>
                  </div>
                  <h3 className="text-xl font-semibold">No Live Fights</h3>
                  <p className="text-muted-foreground">
                    Check back later for upcoming derby matches and live betting opportunities.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
