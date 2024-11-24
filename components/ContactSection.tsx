import { Button } from "@/components/ui/button";

export const ContactSection = () => (
  <div className="bg-black border-t border-blue-800">
    <section id="contact" className="py-12 max-w-7xl mx-auto">
      <div className="container px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get in Touch with Us
        </h3>
        <p className="max-w-2xl mx-auto text-gray-400 mb-8">
          We're here to help. Reach out to us through our telegram support
          group. Where you can find support for your needs.
        </p>
        <a href="https://t.me/EnigmaProxiesSupport">
          <Button className="bg-blue-500 hover:bg-blue-600 mb-6 text-white font-semibold">
            {" "}
            Join Telegram{" "}
          </Button>
        </a>
        <div className="mt-6 flex flex-col items-center">
          <a
            href="https://t.me/EnigmaProxiesSupport"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-blue-500"
          >
            <svg
              className="h-6 w-6 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.5,2.47a1.23,1.23,0,0,0-1.34-.15L2.32,10.38a1.24,1.24,0,0,0,.05,2.29l5.29,1.76,2,6.46a1.23,1.23,0,0,0,2,.57l3-2.94,4.92,3.82a1.23,1.23,0,0,0,1.94-.85l3.08-16.6A1.23,1.23,0,0,0,22.5,2.47ZM9.44,12.5l8.82-5.71L10.4,13.23a.62.62,0,0,0-.18.39l-.23,2.61ZM12.8,18l-1.08-3.46,7.89-7.49Z" />
            </svg>
            Join our Telegram Support Group
          </a>
          <p className="text-gray-400 mt-2">
            Need help? Our support team is available 24/7 on Telegram.
          </p>
        </div>
      </div>
    </section>
  </div>
);
