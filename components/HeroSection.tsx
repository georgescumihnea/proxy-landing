"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Check } from "lucide-react";
import Link from "next/link";
import { Slider } from "./ui/slider";
import { EvervaultCard, Icon } from "./ui/evervault-card";
import { BackgroundGradient } from "./ui/bg-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { Cover } from "./ui/cover";

const enigmaPricing = {
  TEN: { expression: (x: number) => x < 10, price: 2.75 },
  HUNDRED: { expression: (x: number) => x >= 10 && x < 100, price: 2.5 },
  THREEHUNDRED: { expression: (x: number) => x >= 100 && x < 300, price: 2.35 },
  FIVEHUNDRED: { expression: (x: number) => x >= 300 && x < 500, price: 2.25 },
  THOUSAND: { expression: (x: number) => x >= 500 && x < 1000, price: 2.1 },
  MORETHANTHOUSAND: { expression: (x: number) => x >= 1000, price: 1.9 },
};

const getPricingDetails = (gb: number) => {
  const basePrice = 2.75;
  for (const tier of Object.values(enigmaPricing)) {
    if (tier.expression(gb)) {
      const discount = ((basePrice - tier.price) / basePrice) * 100;
      return { price: tier.price, discount };
    }
  }
  return { price: basePrice, discount: 0 };
};

export const HeroSection = () => {
  const [token, setToken] = useState("");
  const [gb, setGb] = useState(1);
  const [inputValue, setInputValue] = useState("1");
  const maxGb = 2000;

  const { price, discount } = getPricingDetails(gb);

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
      <section className="pt-20 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(10, 23, 186, 0.1),rgba(255,255,255,0))]">
        <div className="container px-4 py-12 md:py-24 lg:py-32 max-w-7xl mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-12">
              <div className="space-y-8">
                <TextGenerateEffect
                  words="The Most Reliable Proxies Service"
                  className="text-4xl sm:text-5xl xl:text-6xl"
                  duration={0.6}
                  coloredWords={{
                    Reliable: "#3b82f6", // yellow color for "Reliable"
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="max-w-[600px] text-white md:text-xl font-light"
                >
                  LogoHere is an advanced proxy service that enhances online
                  privacy and security. It offers robust protection against
                  tracking, surveillance, and cyber threats, ensuring a safe and
                  anonymous browsing experience, while maintaing the{" "}
                  <Cover>fastest connection</Cover>.
                </motion.div>
              </div>

              {/* Add fade-in effect for the button and token section */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button className="bg-blue-500 hover:bg-blue-600 font-bold text-white hover:scale-110 transition-transform duration-75 ease-linear text-lg">
                    Get Started
                  </Button>
                  <div className="flex items-center gap-2 text-gray-100 cursor-pointer group text-lg">
                    <span>Already have a token?</span>
                    <ChevronDown className="w-12 h-8 transition-transform group-hover:translate-y-0.5 stroke-[1.5px] group-hover:animate-bounce" />
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
                    className="bg-blue-500 hover:bg-blue-600 font-bold text-white hover:scale-110 transition-transform duration-75 ease-linear text-lg whitespace-nowrap"
                  >
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Pricing section with fade-in effect */}
            <BackgroundGradient containerClassName="" animate={true}>
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="rounded-xl border bg-black backdrop-blur-sm border-blue-800 p-6 relative z-10">
                  <div className="flex flex-row-reverse">
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        className="w-auto text-lg bg-black border-none text-white hover:select-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        min={1}
                        max={maxGb}
                      />
                      <span className="text-gray-400">GB</span>
                    </div>
                    <div className="text-gray-400 text-lg">/</div>
                    <div className="text-xl text-white">
                      <span className="text-blue-500 font-bold">
                        ${(price * gb).toFixed(2)}
                      </span>
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
                  <div className="text-right mb-6 text-gray-100 font-bold">
                    Discount: {discount.toFixed(0)}%
                  </div>
                  <div className="space-y-3 mb-6">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-gray-100"
                      >
                        <Check className="h-5 w-5 text-blue-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 font-bold text-white hover:scale-110 transition-transform duration-75 ease-linear text-lg">
                    Buy Now
                  </Button>
                </div>
              </motion.div>
            </BackgroundGradient>
          </div>
        </div>
      </section>
    </>
  );
};
