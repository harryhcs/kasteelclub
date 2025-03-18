"use client";
import { Context } from "@/worker";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const trades = [
  "Plumber",
  "Electrician",
  "Carpenter",
  "Painter",
  "Mason",
  "Mechanic",
  "Landscaper",
];

export function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen p-4 text-gray-900 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">KasteelClub</h1>
        <p className="mb-6">Find skilled workers in the Riebeek Valley.</p>

        <div className="flex gap-2 mb-4">
          <Input
            type="text"
            placeholder="Search for a tradesman..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1"
          />
          <Button>Search</Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {trades.map((trade) => (
            <Button key={trade} variant="outline" className="w-full">
              {trade}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

