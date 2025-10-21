import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export const BetsComponent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">
          Gallo 1 vs Gallo 2
        </CardTitle>
        <CardContent className="px-0 sm:px-6">
          <div className="mt-4 flex justify-center flex-col items-center">
            <h2 className="text-lg font-bold text-center bg-green-700 text-white rounded-md p-2 max-w-md">
              Apuestas abiertas
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2 flex-col justify-around mt-5">
            <div className="justify-center items-center border rounded-md p-2">
              <p className="mb-4 text-md font-bold text-center bg-green-700 text-white rounded-md p-1 max-w-lg">
                Apuestas al verde
              </p>
              <div className="grid  gap-2">
                <Button>Parejo</Button>
                <Button>Doy 80</Button>
                <Button>Tomo 80</Button>
              </div>
            </div>
            <div className="justify-center items-center border rounded-md p-2">
              <p className="mb-4 text-md font-bold text-center bg-red-700 text-white rounded-md p-1 max-w-lg">
                Apuestas al rojo
              </p>
              <div className="grid  gap-2">
                <Button>Parejo</Button>
                <Button>Doy 80</Button>
                <Button>Tomo 80</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
