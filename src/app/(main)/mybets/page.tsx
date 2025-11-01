"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BetCard } from "@/components/BetCard";
import { mockBettingHistory, mockFights } from "@/lib/mockData";

type FilterType = "all" | "pending" | "completed";

export default function MyBets() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredBets = useMemo(() => {
    if (filter === "pending") {
      return mockBettingHistory.filter(
        (bet) => bet.result.status === "pending"
      );
    }
    if (filter === "completed") {
      return mockBettingHistory.filter(
        (bet) => bet.result.status !== "pending"
      );
    }
    return mockBettingHistory;
  }, [filter]);

  const statistics = useMemo(() => {
    const total = mockBettingHistory.length;
    const pending = mockBettingHistory.filter(
      (b) => b.result.status === "pending"
    ).length;
    const won = mockBettingHistory.filter(
      (b) => b.result.status === "won"
    ).length;
    const lost = mockBettingHistory.filter(
      (b) => b.result.status === "lost"
    ).length;
    const totalWagered = mockBettingHistory.reduce(
      (sum, bet) => sum + bet.betAmount,
      0
    );
    const totalWon = mockBettingHistory
      .filter((b) => b.result.status === "won")
      .reduce((sum, bet) => sum + bet.result.amount, 0);
    const totalLost = mockBettingHistory
      .filter((b) => b.result.status === "lost")
      .reduce((sum, bet) => sum + bet.betAmount, 0);
    const netProfit = totalWon;
    const winRate = total > 0 ? ((won / (won + lost)) * 100).toFixed(1) : "0";

    return {
      total,
      pending,
      won,
      lost,
      totalWagered,
      totalWon,
      totalLost,
      netProfit,
      winRate,
    };
  }, []);

  const getFightInfo = (fightId: string) => {
    return mockFights.find((fight) => fight.id === fightId);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Mis Apuestas</h1>
        <p className="text-muted-foreground">
          Gestiona y revisa el historial de tus apuestas
        </p>
      </div>

      {/* Statistics Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              Total Apuestas
            </p>
            <div className="text-2xl font-bold">{statistics.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              Pendientes
            </p>
            <div className="text-2xl font-bold text-yellow-500">
              {statistics.pending}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              Ganadas
            </p>
            <div className="text-2xl font-bold text-green-500">
              {statistics.won}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              Ganancia
            </p>
            <div className={`text-2xl font-bold text-green-500`}>
              ${statistics.totalWon.toFixed(2)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
          className="rounded-full"
        >
          Todas ({statistics.total})
        </Button>
        <Button
          variant={filter === "pending" ? "default" : "outline"}
          onClick={() => setFilter("pending")}
          className="rounded-full"
        >
          Pendientes ({statistics.pending})
        </Button>
        <Button
          variant={filter === "completed" ? "default" : "outline"}
          onClick={() => setFilter("completed")}
          className="rounded-full"
        >
          Completadas ({statistics.won + statistics.lost})
        </Button>
      </div>

      {/* Bets List */}
      <div className="space-y-4">
        {filteredBets.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground text-lg">
                No hay apuestas {filter !== "all" && `con estado "${filter}"`}
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredBets.map((bet) => {
            const fight = getFightInfo(bet.fightId);
            return <BetCard key={bet.id} bet={bet} fight={fight} />;
          })
        )}
      </div>
    </div>
  );
}
