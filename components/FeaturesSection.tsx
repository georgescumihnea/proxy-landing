"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScanEye, Database, DollarSign, Earth } from "lucide-react";
import { motion } from "framer-motion";

export const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <ScanEye className="h-12 w-12 text-blue-500 mb-4" strokeWidth={0.5} />
      ),
      title: "Amazing Privacy",
      description:
        "We provide exceptional privacy protection, ensuring that your data remains secure. Our strict no-logs policy guarantees no records of your activities.",
    },
    {
      icon: (
        <Database className="h-12 w-12 text-blue-500 mb-4" strokeWidth={0.5} />
      ),
      title: "80+M IPs Pool",
      description:
        "Access our extensive pool of over 80 million IP addresses, offering you unparalleled flexibility and coverage to meet all your connectivity needs.",
    },
    {
      icon: (
        <DollarSign
          className="h-12 w-12 text-blue-500 mb-4"
          strokeWidth={0.5}
        />
      ),
      title: "Affordable",
      description:
        "We provide great quality at reasonable costs, find the best proxies at the best prices. Great for everyone, regardless of budget.",
    },
    {
      icon: (
        <Earth className="h-12 w-12 text-blue-500 mb-4" strokeWidth={0.5} />
      ),
      title: "200+ Countries",
      description:
        "Benefit from our vast collection of IP addresses sourced from 200 countries around the globe, ensuring comprehensive and diverse geographic coverage.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="bg-black">
      <section id="features" className="py-24 max-w-7xl mx-auto">
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
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Card className="bg-black border-blue-800">
                  <CardContent className="p-6">
                    {feature.icon}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
