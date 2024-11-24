"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  ChevronDown,
  Zap,
  Shield,
  DollarSign,
  Headphones,
  MessageSquare,
  BarChart3,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function LandingPage() {
  const [gb, setGb] = useState(1);
  const [inputValue, setInputValue] = useState("1");
  const [token, setToken] = useState("");
  const pricePerGb = 2.75;
  const maxGb = 2000;

  const handleSliderChange = (value: number[]) => {
    setGb(value[0]);
    setInputValue(value[0].toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= maxGb) {
      setGb(numValue);
    }
  };

  const handleInputBlur = () => {
    const numValue = parseInt(inputValue);
    if (isNaN(numValue) || numValue < 1) {
      setGb(1);
      setInputValue("1");
    } else if (numValue > maxGb) {
      setGb(maxGb);
      setInputValue(maxGb.toString());
    }
  };

  const features = [
    "Privacy-focused: We maintain zero logs.",
    "Lightning-fast connections.",
    "Largest IP pool in the industry across over 200 countries.",
    "Easy access via website dashboard or Telegram bot.",
    "Data retention for up to 90 days.",
    "HTTP/S and SOCKS5 Protocols.",
  ];

  return (
    <>
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-blue-800">
        <div className="container px-4 lg:px-6 h-14 flex items-center max-w-7-xl mx-auto">
          <Link className="flex items-center justify-center" href="/">
            <span className="text-2xl font-bold text-blue-500">Enigma</span>
            <span className="text-2xl font-bold text-gray-400">Proxy</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:text-blue-500 text-gray-400"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="text-sm font-medium hover:text-blue-500 text-gray-400"
              href="#pricing"
            >
              Pricing
            </Link>
            <Link
              className="text-sm font-medium hover:text-blue-500 text-gray-400"
              href="#contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}

      <section className="pt-20 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,255,80,0.1),rgba(255,255,255,0))]">
        <div className="container px-4 py-12 md:py-24 lg:py-32 max-w-7xl mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  The <span className="text-blue-500">Most Reliable</span>{" "}
                  Proxies Service
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  EnigmaProxy is an advanced proxy service that enhances online
                  privacy and security. It offers robust protection against
                  tracking, surveillance, and cyber threats, ensuring a safe and
                  anonymous browsing experience.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    Get Started
                  </Button>
                  <div className="flex items-center gap-2 text-gray-400 cursor-pointer group">
                    <span>Already have a token?</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5 stroke-[1.5px]" />
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <Input
                    type="text"
                    placeholder="Enter your token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    className="bg-black border-blue-800 text-white max-w-md"
                  />
                  <Button
                    asChild
                    className="bg-blue-500 hover:bg-blue-600 whitespace-nowrap"
                  >
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="rounded-xl border bg-black/40 backdrop-blur-sm border-blue-800 p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xl text-white">
                    Price:{" "}
                    <span className="text-blue-500">
                      ${(pricePerGb * gb).toFixed(2)}
                    </span>
                    <span className="text-gray-400 text-sm">/GB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={inputValue}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      className="w-24 bg-black/40 border-blue-800 text-white"
                      min={1}
                      max={maxGb}
                    />
                    <span className="text-gray-400">GB</span>
                  </div>
                </div>
                <Slider
                  className="mb-6"
                  value={[gb]}
                  onValueChange={handleSliderChange}
                  max={maxGb}
                  min={1}
                  step={1}
                />
                <div className="text-right mb-6 text-gray-400">
                  Discount: 0%
                </div>
                <div className="space-y-3 mb-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-400"
                    >
                      <Check className="h-5 w-5 text-blue-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24  max-w-7xl mx-auto">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Magic Features
            </h2>
            <p className="text-gray-400">
              Experience the power of our premium proxy service
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-black border-blue-800">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Instant Delivery
                </h3>
                <p className="text-gray-400">
                  Discover the unique instant-delivery experience. Upon payment
                  approval, expect your product to arrive swiftly within 1-2
                  minutes.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black border-blue-800">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Bandwidth Assurance
                </h3>
                <p className="text-gray-400">
                  When you purchase bandwidth from us, rest assured that 1GB
                  means exactly that – no hidden caps or throttling, no lies, no
                  bs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black border-blue-800">
              <CardContent className="p-6">
                <DollarSign className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Affordable
                </h3>
                <p className="text-gray-400">
                  We believe in providing great quality at reasonable costs,
                  allowing all users to have a positive experience at a lower
                  cost.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black border-blue-800">
              <CardContent className="p-6">
                <Headphones className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Active Support
                </h3>
                <p className="text-gray-400">
                  Our customer service representatives are available around the
                  clock to assist you whenever you need it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24 max-w-7xl mx-auto">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-4">
              <div className="flex items-center gap-2 text-blue-500 mb-4">
                <BarChart3 className="h-5 w-5" />
                <span className="font-medium">Dashboard</span>
              </div>
              <h2 className="text-3xl font-bold text-white">
                With a <span className="text-blue-500">Sleek</span> Dashboard
              </h2>
              <p className="text-gray-400">
                Experience a sleek, modern, and organized dashboard interface
                designed to streamline your navigation through proxies and
                payments. Our user-friendly design ensures effortless usability.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600">
                Explore Dashboard
              </Button>
              <div className="grid sm:grid-cols-2 gap-4 pt-8">
                <Card className="bg-black border-blue-800">
                  <CardContent className="p-4">
                    <h3 className="font-medium text-white mb-2">
                      Simplified Navigation
                    </h3>
                    <p className="text-sm text-gray-400">
                      Effortlessly centralize, store, and search through your
                      proxies at lightning speed.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-black border-blue-800">
                  <CardContent className="p-4">
                    <h3 className="font-medium text-white mb-2">
                      Comprehensive Observability
                    </h3>
                    <p className="text-sm text-gray-400">
                      Efficiently summarize metrics from various sources into
                      beautifully crafted dashboards.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                width={800}
                height={600}
                alt="Dashboard Preview"
                className="rounded-xl border border-blue-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24  max-w-7xl mx-auto">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Are You Waiting?
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Your Top-tier Proxies Today!
          </h3>
          <p className="max-w-2xl mx-auto text-gray-400 mb-8">
            Our proxies feature fast speeds, massive pools, and high-quality
            IPs, guaranteeing seamless control and effortless progress through
            your work.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600">Get Started</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-800 bg-black">
        <div className="container px-4 py-1 max-w-7xl mx-auto mt-2 ">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-blue-500">Enigma</span>
                <span className="text-2xl font-bold text-gray-400">Proxy</span>
              </Link>
              <p className="text-gray-400 mb-4 max-w-md">
                Eclipse Proxy offers top-notch proxy solutions tailored to your
                requirements. Our range includes residential proxies to suit
                diverse needs.
              </p>
              <p className="text-blue-500 mb-6">
                Please read our terms and conditions before purchasing.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="text-gray-400 border-blue-800"
                >
                  <MessageSquare className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="text-gray-400 border-blue-800"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-white font-medium mb-4">Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-blue-500"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-blue-500"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-blue-500"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-blue-500"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-4">Social</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-blue-500"
                    >
                      Discord
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-blue-500"
                    >
                      Telegram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
