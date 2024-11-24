// components/PricingComponent.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Utility for conditional class names

const enigmaPricing = {
  TEN: { expression: (x: number) => x < 10, price: 2.75, discount: 0 },
  HUNDRED: {
    expression: (x: number) => x >= 10 && x < 100,
    price: 2.5,
    discount: 9,
  },
  THREEHUNDRED: {
    expression: (x: number) => x >= 100 && x < 300,
    price: 2.35,
    discount: 15,
  },
  FIVEHUNDRED: {
    expression: (x: number) => x >= 300 && x < 500,
    price: 2.25,
    discount: 18,
  },
  THOUSAND: {
    expression: (x: number) => x >= 500 && x < 1000,
    price: 2.1,
    discount: 23,
  },
  MORETHANTHOUSAND: {
    expression: (x: number) => x >= 1000,
    price: 1.9,
    discount: 30,
  },
};

// const packageOptions = [
//   {
//     id: 0,
//     minGb: 1,
//     maxGb: 10,
//     label: "1-10 GB",
//     discount: "0%",
//     price: "$2.75",
//   },
//   {
//     id: 10,
//     minGb: 10,
//     maxGb: 100,
//     label: "10-100 GB",
//     discount: "9%",
//     price: "$2.50",
//   },
//   {
//     id: 100,
//     minGb: 100,
//     maxGb: 300,
//     label: "100-300 GB",
//     discount: "15%",
//     price: "$2.35",
//   },
//   {
//     id: 300,
//     minGb: 300,
//     maxGb: 500,
//     label: "300-500 GB",
//     discount: "18%",
//     price: "$2.25",
//   },
//   {
//     id: 500,
//     minGb: 500,
//     maxGb: 1000,
//     label: "500-1000 GB",
//     discount: "23%",
//     price: "$2.10",
//   },
//   {
//     id: 1000,
//     minGb: 1000,
//     maxGb: 2000,
//     label: "1000+ GB",
//     discount: "30%",
//     price: "$1.90",
//   },
// ];

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

export const PricingComponent = ({
  initialGb = 1,
  onPurchase,
}: {
  initialGb?: number;
  onPurchase?: (gb: number, totalPrice: number) => void;
}) => {
  const [gb, setGb] = useState(initialGb);
  const [inputValue, setInputValue] = useState(initialGb.toString());
  const [selectedPackageId, setSelectedPackageId] = useState<number | null>(
    null
  );
  const maxGb = 2000;

  const { price, discount } = getPricingDetails(gb);

  const handleSliderChange = (value: number[]) => {
    setGb(value[0]);
    setInputValue(value[0].toString());
    setSelectedPackageId(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue >= 1 && numValue <= maxGb) {
      setGb(numValue);
      setSelectedPackageId(null);
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

  const handleBuyNow = () => {
    if (onPurchase) {
      onPurchase(gb, price * gb);
    }
    // Additional logic for purchase can be added here
  };

  return (
    <div className="rounded-xl border bg-black backdrop-blur-sm border-blue-800 p-4 sm:p-6 relative z-10">
      {/* Package Options */}
      {/* <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {packageOptions.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => handlePackageSelect(pkg)}
            className={cn(
              "p-4 border rounded cursor-pointer flex flex-col",
              selectedPackageId === pkg.id
                ? "border-blue-500 bg-neutral-800"
                : "border-neutral-700 hover:border-blue-500"
            )}
          >
            <div className="text-white text-lg font-semibold">{pkg.label}</div>
            <div className="text-blue-400">{pkg.discount} Discount</div>
            <div className="text-gray-400">{pkg.price} per GB</div>
          </div>
        ))}
      </div> */}

      {/* Pricing Controls */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
        <div className="flex items-center text-xl text-white mb-4 sm:mb-0">
          <span className="text-blue-500 font-bold mr-2">
            ${(price * gb).toFixed(2)}
          </span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-400 ml-2">{gb} GB</span>
        </div>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className="w-24 text-lg bg-neutral-800 border border-blue-500 text-white"
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
      <div className="text-right mb-6 text-gray-100 font-bold">
        Discount: {discount.toFixed(0)}%
      </div>
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2 text-gray-100">
            <Check className="h-5 w-5 text-blue-500 mt-1" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <Button
        onClick={handleBuyNow}
        className="w-full bg-blue-500 hover:bg-blue-600 font-bold text-white hover:scale-105 transition-transform duration-75 ease-linear text-lg"
      >
        Buy Now
      </Button>
    </div>
  );
};
