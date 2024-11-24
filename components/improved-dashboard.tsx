"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clipboard, Download, Copy } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function ImprovedDashboard() {
  const [protocol, setProtocol] = useState("http");
  const [rotation, setRotation] = useState("default");
  const [quantity, setQuantity] = useState(1);
  const [country, setCountry] = useState("rotating");

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Generating proxies with:", {
      protocol,
      rotation,
      quantity,
      country,
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white  mx-auto max-w-6xl">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <GeneratorControls
          protocol={protocol}
          setProtocol={setProtocol}
          rotation={rotation}
          setRotation={setRotation}
          quantity={quantity}
          setQuantity={setQuantity}
          country={country}
          setCountry={setCountry}
          onGenerate={handleGenerate}
        />
        <GeneratedProxiesList />
      </div>
    </div>
  );
}

function Header() {
  const totalGB = 10;
  const usedGB = 9;
  const remainingGB = totalGB - usedGB;
  const usagePercentage = (usedGB / totalGB) * 100;

  return (
    <Card className="w-full bg-blue-600 text-white lg:mt-24 mt-2">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <CardTitle className="text-2xl font-semibold">
              Enigma Proxy Dashboard
            </CardTitle>
            <p className="text-sm mt-1">Secure Proxy Generator</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-blue-300 stroke-current"
                  strokeWidth="10"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                />
                <circle
                  className="text-blue-800 stroke-current"
                  strokeWidth="10"
                  strokeLinecap="round"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  strokeDasharray={`${usagePercentage * 2.51327} 251.327`}
                  transform="rotate(-90 50 50)"
                />
                <text
                  x="50"
                  y="50"
                  fontFamily="Verdana"
                  fontSize="20"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill="white"
                >
                  {remainingGB}GB
                </text>
              </svg>
            </div>
            <div className="text-right text-white">
              <p>
                Remaining: <strong>{remainingGB} GB</strong>
              </p>
              <p>
                Total Used: <strong>{usedGB} GB</strong>
              </p>
              <p>
                Expiration: <strong>01/28/2025</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-white font-semibold">
            User Token:{" "}
            <span className="font-mono bg-blue-700 px-2 py-1 rounded">
              ABC123XYZ789
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function GeneratorControls({
  protocol,
  setProtocol,
  rotation,
  setRotation,
  quantity,
  setQuantity,
  country,
  setCountry,
  onGenerate,
}: {
  protocol: string;
  setProtocol: (value: string) => void;
  rotation: string;
  setRotation: (value: string) => void;
  quantity: number;
  setQuantity: (value: number) => void;
  country: string;
  setCountry: (value: string) => void;
  onGenerate: (e: React.FormEvent) => void;
}) {
  return (
    <Card className="bg-neutral-900 border-blue-500 border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-blue-500">
          Generator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onGenerate} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Protocol</label>
            <div className="flex gap-2">
              <Button
                type="button"
                variant={protocol === "http" ? "default" : "secondary"}
                onClick={() => setProtocol("http")}
                className="w-full"
              >
                HTTP(s)
              </Button>
              <Button
                type="button"
                variant={protocol === "socks5" ? "default" : "secondary"}
                onClick={() => setProtocol("socks5")}
                className="w-full"
              >
                Socks5
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Rotation</label>
            <div className="flex gap-2">
              <Button
                type="button"
                variant={rotation === "default" ? "default" : "secondary"}
                onClick={() => setRotation("default")}
                className="w-full"
              >
                Default
              </Button>
              <Button
                type="button"
                variant={rotation === "sticky" ? "default" : "secondary"}
                onClick={() => setRotation("sticky")}
                className="w-full"
              >
                Sticky
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Quantity</label>
            <Input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="bg-neutral-800 text-white border-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Country</label>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger className="w-full bg-neutral-800 text-white border-blue-500">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rotating">Rotating</SelectItem>
                <SelectItem value="usa">USA</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="uk">UK</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-500 text-black hover:bg-blue-600"
          >
            Generate
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function GeneratedProxiesList() {
  const dummyProxies = [
    "192.168.1.1:8080:user1:pass1",
    "10.0.0.1:3128:user2:pass2",
    "172.16.0.1:1080:user3:pass3",
    "192.168.0.1:80:user4:pass4",
    "10.10.10.1:8888:user5:pass5",
  ];

  const handleCopy = () => {
    navigator.clipboard
      .writeText(dummyProxies.join("\n"))
      .then(() => alert("Proxies copied to clipboard!"))
      .catch((err) => console.error("Failed to copy: ", err));
  };

  const handleDownload = () => {
    const blob = new Blob([dummyProxies.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "proxies.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="bg-neutral-900 border-blue-500 border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-blue-500">
          Generated Proxies
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-neutral-800 p-4 rounded-md mb-4">
          {dummyProxies.map((proxy, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-2 last:mb-0"
            >
              <code className="text-blue-300 font-mono text-sm">{proxy}</code>
              <Button
                onClick={() => navigator.clipboard.writeText(proxy)}
                variant="ghost"
                size="sm"
                className="text-blue-500 hover:text-blue-400"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-4">
          <Button
            onClick={handleCopy}
            className="bg-blue-500 text-black hover:bg-blue-600"
          >
            <Clipboard className="mr-2 h-4 w-4" /> Copy All
          </Button>
          <Button
            onClick={handleDownload}
            className="bg-blue-500 text-black hover:bg-blue-600"
          >
            <Download className="mr-2 h-4 w-4" /> Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
