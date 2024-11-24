"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

export const DashboardPreviewSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.4 },
    },
  };

  return (
    <div className="bg-black border-b border-blue-800">
      <section className="py-24 max-w-7xl mx-auto">
        <div className="container px-4">
          <motion.div
            className="flex flex-col lg:flex-row gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="lg:w-1/2 space-y-4" variants={textVariants}>
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

              <div className="grid sm:grid-cols-2 gap-4 pt-8">
                <motion.div variants={cardVariants}>
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
                </motion.div>
                <motion.div variants={cardVariants}>
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
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="lg:w-1/2"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src="/Screenshot.png"
                width={800}
                height={600}
                alt="Dashboard Preview"
                className="rounded-xl border border-blue-800"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
