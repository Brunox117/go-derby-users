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

  const getStatusBadge = (result: BettingHistory["result"]["status"]) => {
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
              {getStatusBadge(bet.result.status)}
            </div>
            <p className="text-sm text-muted-foreground">
              {formatDate(bet.timestamp)}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Gallo Apostado</p>
            <p className="text-lg font-semibold">{bet.roosterName}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Monto Apostado</p>
            <p className="text-lg font-semibold">${bet.betAmount.toFixed(2)}</p>
          </div>
        </div>

        {bet.result.status === "won" && (
          <>
            <Separator className="my-4" />
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">
                  Ganancia Obtenida
                </p>
                <p className="text-xl font-bold text-green-500">
                  ${bet.result.amount.toFixed(2)}
                </p>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
