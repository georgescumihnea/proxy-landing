"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import { IconBrandTelegram } from "@tabler/icons-react";
import Link from "next/link";
import { ScanEye, Database, DollarSign, Earth } from "lucide-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Amazing Privacy",
      description:
        "We provide exceptional privacy protection, ensuring that your data remains secure. Our strict no-logs policy guarantees no records of your activities.",
      skeleton: <SkeletonOne />,
      icon: (
        <ScanEye className="mr-2 w-12 h-12 text-blue-500" strokeWidth={0.35} />
      ),
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-blue-500",
    },
    {
      title: "80+M IPs Pool",
      description:
        "Access our extensive pool of over 80 million IP addresses, offering you unparalleled flexibility and coverage to meet all your connectivity needs.",
      skeleton: <SkeletonTwo />,
      icon: (
        <Database className="mr-2 w-12 h-12 text-blue-500" strokeWidth={0.35} />
      ), // Camera icon
      className: "border-b col-span-1 lg:col-span-2 border-blue-500",
    },
    {
      title: "Affordable",
      description:
        "We provide great quality at reasonable costs, find the best proxies at the best prices. Great for everyone, regardless of budget.",
      skeleton: <SkeletonThree />,
      icon: (
        <DollarSign
          className="mr-2 w-12 h-12 text-blue-500"
          strokeWidth={0.35}
        />
      ), // YouTube icon
      className: "col-span-1 lg:col-span-3 lg:border-r border-blue-500",
    },
    {
      title: "200+ Countries",
      description:
        "Benefit from our vast collection of IP addresses sourced from 200 countries around the globe, ensuring comprehensive and diverse geographic coverage.",
      skeleton: <SkeletonFour />,
      icon: (
        <Earth className="mr-2 w-12 h-12 text-blue-500" strokeWidth={0.35} />
      ), // Cloud icon
      className:
        "col-span-1 lg:col-span-3 border-b lg:border-none border-blue-500",
    },
  ];

  return (
    <div
      className="bg-black rounded border-t-[1px] border-[#1e40af]"
      id="features"
    >
      <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto bg-black rounded-xl">
        <motion.div
          className="px-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto tracking-tight font-medium text-white">
            Magic Features
          </h4>
          <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-300">
            Experience the power of our premium proxy service.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <FeatureTitle icon={feature.icon}>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className="h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `p-4 sm:p-8 relative overflow-hidden bg-black border-blue-500`,
        className
      )}
    >
      {children}
    </div>
  );
};

const FeatureTitle = ({
  children,
  icon,
}: {
  children?: React.ReactNode;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex items-center">
      {icon}
      <p className="text-left text-white text-xl md:text-2xl md:leading-snug">
        {children}
      </p>
    </div>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-sm md:text-base text-left text-neutral-300 my-2">
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full bg-black">
      <div className="flex flex-1 w-full h-full flex-col space-y-2">
        <motion.div
          animate={{
            x: [0, 10, -10, 0],
            y: [0, -10, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <Image
            src="/astr.svg"
            alt="Astronaut SVG"
            width={250}
            height={300}
            className="mx-auto"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-black to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = ["/test.png", "/test.png", "/test.png", "/test.png"];

  return (
    <div className="relative flex flex-col items-center p-8 gap-10 h-full bg-black overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            key={"image-" + idx}
            className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-900 border-2 border-blue-500 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="example"
              width={500}
              height={500}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const SkeletonThree = () => (
  <Link
    href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
    target="__blank"
    className="relative flex gap-10 h-full group/image"
  >
    <div className="w-full mx-auto bg-transparent group h-full">
      <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
        <IconBrandTelegram
          className="h-20 w-20 text-blue-500 absolute inset-0 m-auto antialiased hidden lg:block"
          strokeWidth={0.6}
        />
        <div className="text-white hover:underline hidden lg:block">
          Click to join the conversation on our telegram!
        </div>
      </div>
    </div>
  </Link>
);

export const SkeletonFour = () => (
  <div className="h-60 flex flex-col items-center relative bg-black mt-10">
    <Globe className="absolute -right-10 -bottom-72" />
  </div>
);

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [0.1, 1, 0.1],
      glowColor: [0.1, 0.8, 1],
      markers: [
        { location: [34.0522, -118.2437], size: 0.0 }, // Los Angeles, USA
      ],

      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
