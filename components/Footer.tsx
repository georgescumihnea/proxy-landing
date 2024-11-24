// components/Footer.tsx
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className=" bg-black">
    <div className="container px-4 py-8 max-w-7xl mx-auto">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Company Info */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-blue-500">Logo</span>
            <span className="text-2xl font-bold text-gray-400">Here</span>
          </Link>
          <p className="text-gray-400 mb-4 max-w-md">
            LogoHere offers top-notch proxy solutions tailored to your
            requirements. Enhance your online privacy and security with our
            reliable services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/#features"
                className="text-gray-400 hover:text-blue-500"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/#pricing"
                className="text-gray-400 hover:text-blue-500"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-gray-400 hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-400 hover:text-blue-500">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-blue-500"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-blue-500 mr-2" />
              <span>support@proxygate.com</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-blue-500 mr-2" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-start">
              <MapPin className="w-5 h-5 text-blue-500 mr-2 mt-1" />
              <span>
                123 Proxy Lane,
                <br />
                Privacy City, Internet
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="mt-8 border-t  pt-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} ProxyGate. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
