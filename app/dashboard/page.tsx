// app/dashboard/page.tsx
"use client";
import React from "react";
import { EnhancedBlackDashboard } from "@/components/enhanced-black-dashboard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white">
        <EnhancedBlackDashboard />
      </div>
      <Footer />
    </>
  );
}
