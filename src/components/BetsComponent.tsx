import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

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
          <div className="text-center text-md mt-2 font-semibold">
            <span className="text-gray-700">Tu saldo es: ${100}</span>{" "}
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
          <div className="flex justify-center mt-5">
            <div className="flex gap-2 flex-wrap justify-start w-full">
              <Button
                variant="outline"
                className="h-7 px-3 rounded-full border-2 border-blue-500 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold transition-colors text-sm"
              >
                $50
              </Button>
              <Button
                variant="outline"
                className="h-7 px-3 rounded-full border-2 border-blue-500 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold transition-colors text-sm"
              >
                $100
              </Button>
              <Button
                variant="outline"
                className="h-7 px-3 rounded-full border-2 border-blue-500 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold transition-colors text-sm"
              >
                $200
              </Button>
              <Button
                variant="outline"
                className="h-7 px-3 rounded-full border-2 border-blue-500 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold transition-colors text-sm"
              >
                $500
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 mt-5">
            <Input
              type="number"
              placeholder="Ingrese su apuesta"
              className="h-11"
            />
            <Button className="h-11 w-32">Apostar</Button>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
