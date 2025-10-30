import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { BettingHistory, Fight } from "@/lib/mockData";

interface BetCardProps {
  bet: BettingHistory;
  fight?: Fight;
}

export function BetCard({ bet, fight }: BetCardProps) {
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadge = (result: BettingHistory["result"]) => {
    switch (result) {
      case "pending":
        return (
          <Badge
            variant="secondary"
            className="bg-yellow-100 text-yellow-800 border-yellow-300"
          >
            Pendiente
          </Badge>
        );
      case "won":
        return (
          <Badge
            variant="default"
            className="bg-green-100 text-green-800 border-green-300"
          >
            Ganada
          </Badge>
        );
      case "lost":
        return (
          <Badge
            variant="default"
            className="bg-red-50 text-red-900 border-red-300"
          >
            Perdida
          </Badge>
        );
    }
  };

  const potentialWinnings = bet.betAmount * bet.odds;
  const actualWinnings =
    bet.result === "won"
      ? bet.betAmount * bet.odds
      : bet.result === "lost"
      ? 0
      : null;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <CardTitle className="text-xl">
                {fight
                  ? `${fight.rooster1.name} vs ${fight.rooster2.name}`
                  : "Pelea"}
              </CardTitle>
              {getStatusBadge(bet.result)}
            </div>
            <p className="text-sm text-muted-foreground">
              {formatDate(bet.timestamp)}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Gallo Apostado</p>
            <p className="text-lg font-semibold">{bet.roosterName}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Monto Apostado</p>
            <p className="text-lg font-semibold">${bet.betAmount.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Cuotas</p>
            <p className="text-lg font-semibold">{bet.odds.toFixed(2)}x</p>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex justify-between items-center">
          {bet.result === "pending" ? (
            <>
              <div>
                <p className="text-sm text-muted-foreground">
                  Ganancia Potencial
                </p>
                <p className="text-xl font-bold text-green-500">
                  ${potentialWinnings.toFixed(2)}
                </p>
              </div>
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-800 border-blue-300"
              >
                En curso
              </Badge>
            </>
          ) : bet.result === "won" ? (
            <>
              <div>
                <p className="text-sm text-muted-foreground">
                  Ganancia Obtenida
                </p>
                <p className="text-xl font-bold text-green-500">
                  ${actualWinnings!.toFixed(2)}
                </p>
              </div>
              <Badge
                variant="default"
                className="bg-green-100 text-green-800 border-green-300"
              >
                Ganaste ${(actualWinnings! - bet.betAmount).toFixed(2)}
              </Badge>
            </>
          ) : (
            <>
              <div>
                <p className="text-sm text-muted-foreground">Resultado</p>
                <p className="text-xl font-bold text-red-500">
                  ${bet.betAmount.toFixed(2)}
                </p>
              </div>
              <Badge
                variant="default"
                className="bg-red-100 text-red-800 border-red-300"
              >
                Perdiste ${bet.betAmount.toFixed(2)}
              </Badge>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
