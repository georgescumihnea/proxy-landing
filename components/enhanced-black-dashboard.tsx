// components/EnhancedBlackDashboard.tsx
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast, Toaster } from "react-hot-toast";
import { PricingComponent } from "@/components/PricingComponent";
import { motion } from "framer-motion";

export function EnhancedBlackDashboard() {
  // Dummy data for subusers
  const [userStats, setUserStats] = useState([
    {
      subuserName: "User1",
      gbAssigned: 200,
      gbUsed: 150,
      ordersCreated: 5,
    },
    {
      subuserName: "User2",
      gbAssigned: 300,
      gbUsed: 250,
      ordersCreated: 7,
    },
    {
      subuserName: "User3",
      gbAssigned: 500,
      gbUsed: 400,
      ordersCreated: 10,
    },
  ]);

  // Calculate total GB assigned and used
  const totalGBAssigned = userStats.reduce(
    (total, user) => total + user.gbAssigned,
    0
  );
  const totalGBUsed = userStats.reduce((total, user) => total + user.gbUsed, 0);

  const [totalGB, setTotalGB] = useState(totalGBAssigned); // Total GB assigned
  const [remainingGB, setRemainingGB] = useState(totalGBAssigned - totalGBUsed); // Remaining GB
  const [showExtendModal, setShowExtendModal] = useState(false);

  const handleExtendBandwidth = (gb: number, totalPrice: number) => {
    // Update total GB assigned and remaining GB
    setTotalGB((prev) => prev + gb);
    setRemainingGB((prev) => prev + gb);
    toast.success(
      `Successfully extended bandwidth by ${gb} GB for $${totalPrice.toFixed(
        2
      )}`
    );
    // Add your payment processing logic here
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8">
      <motion.div
        className="max-w-4xl mx-auto space-y-6 mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Header
          totalGB={totalGB}
          remainingGB={remainingGB}
          totalGBUsed={totalGBUsed}
          setShowExtendModal={setShowExtendModal}
        />
        <UserStatsTable userStats={userStats} />
      </motion.div>
      <ExtendBandwidthModal
        showModal={showExtendModal}
        setShowModal={setShowExtendModal}
        handleExtendBandwidth={handleExtendBandwidth}
      />
      <Toaster position="bottom-right" />
    </div>
  );
}

// Header Component
function Header({
  totalGB,
  remainingGB,
  totalGBUsed,
  setShowExtendModal,
}: {
  totalGB: number;
  remainingGB: number;
  totalGBUsed: number;
  setShowExtendModal: (show: boolean) => void;
}) {
  const [showApiKey, setShowApiKey] = useState(false);
  const usagePercentage = (remainingGB / totalGB) * 100;
  const apiKey = "YOUR_ACTUAL_API_KEY";

  return (
    <Card className="w-full bg-black border-blue-500 border">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <CardTitle className="text-xl sm:text-2xl font-semibold text-white">
              Usage Overview
            </CardTitle>
            <p className="text-sm mt-1 text-blue-400">Secure Proxy Dashboard</p>
            {/* Documentation Link */}
            <a
              href="https://yourdocumentationlink.com" // Replace with your actual documentation URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline mt-2 block"
            >
              View Documentation
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-0">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-neutral-700 stroke-current"
                  strokeWidth="10"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                />
                <circle
                  className="text-blue-500 stroke-current"
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
                  fontSize="16"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill="white"
                >
                  {remainingGB} GB
                </text>
              </svg>
            </div>
            <div className="text-center sm:text-right text-white">
              <p>
                Remaining: <strong>{remainingGB} GB</strong>
              </p>
              <p>
                Total Used: <strong>{totalGBUsed} GB</strong>
              </p>
              <p>
                Total Purchased: <strong>{totalGB} GB</strong>
              </p>
              <p>
                Expiration: <strong>01/28/2025</strong>
              </p>
              <Button
                onClick={() => setShowExtendModal(true)}
                className="mt-2 bg-blue-500 text-white hover:bg-blue-600 w-full sm:w-auto"
              >
                Extend Bandwidth
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center sm:text-left space-y-2 ">
          <p className="text-white font-semibold flex-col lg:flex-row items-center">
            User Token:{" "}
            <span className="font-mono bg-blue-700 px-2 py-1 rounded">
              ABC123XYZ789
            </span>
          </p>
          {/* Reveal API Key Field */}
          <div className="mt-2">
            <p className="text-white font-semibold flex items-center flex-col lg:flex-row">
              API Key:{" "}
              <span
                className={`font-mono bg-blue-700 px-2 py-1 rounded ml-2 ${
                  showApiKey ? "filter-none" : "filter blur-sm"
                }`}
                style={{ userSelect: showApiKey ? "text" : "none" }}
              >
                {showApiKey ? apiKey : "••••••••••••••••••••••"}
              </span>
              <Button
                onClick={() => setShowApiKey(!showApiKey)}
                variant="link"
                size="sm"
                className="ml-2 text-blue-500 hover:text-blue-400"
              >
                {showApiKey ? "Hide" : "Reveal"}
              </Button>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// UserStatsTable Component
function UserStatsTable({ userStats }: { userStats: Array<any> }) {
  return (
    <Card className="bg-black border-blue-500 border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white">
          User Statistics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-blue-400">Subuser Name</TableHead>
                <TableHead className="text-blue-400">GB Assigned</TableHead>
                <TableHead className="text-blue-400">GB Used</TableHead>
                <TableHead className="text-blue-400">
                  Total Orders Created
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userStats.map((user, index) => (
                <TableRow key={index}>
                  <TableCell className="font-mono text-white">
                    {user.subuserName}
                  </TableCell>
                  <TableCell className="font-mono text-white">
                    {user.gbAssigned} GB
                  </TableCell>
                  <TableCell className="font-mono text-white">
                    {user.gbUsed} GB
                  </TableCell>
                  <TableCell className="font-mono text-white">
                    {user.ordersCreated}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

// ExtendBandwidthModal Component
function ExtendBandwidthModal({
  showModal,
  setShowModal,
  handleExtendBandwidth,
}: {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  handleExtendBandwidth: (gb: number, totalPrice: number) => void;
}) {
  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent
        className="bg-black text-white border border-blue-500 max-w-lg w-full mx-auto p-4 sm:p-6 overflow-y-auto"
        style={{ maxHeight: "90vh" }}
      >
        <DialogHeader>
          <DialogTitle>Extend Bandwidth</DialogTitle>
          <DialogDescription>
            Choose the amount of bandwidth you wish to add.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <PricingComponent
            initialGb={1}
            onPurchase={(gb, totalPrice) => {
              handleExtendBandwidth(gb, totalPrice);
              setShowModal(false);
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
