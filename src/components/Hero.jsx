import React, { useState } from "react";
import { motion } from "framer-motion";
import ReferralModal from "./ReferralModal";
import money from "../assets/money.png";
import dashboard from "../assets/dashboard.png";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const floatingMoney = {
    animate: {
      y: [0, -10, 0],
      rotate: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-[#f8fafc] relative">
      {/* Navigation Tabs */}
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex space-x-8 justify-center bg-blue-50/50 w-fit mx-auto px-6 py-2 rounded-full">
          <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
            Refer
          </button>
          <button className="text-gray-600">Benefits</button>
          <button className="text-gray-600">FAQs</button>
          <button className="text-gray-600">Support</button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative left-40">
            <div className="space-y-6">
              <h1 className="text-[2.75rem] font-bold text-gray-900 leading-tight">
                Let's Learn
                <br />& Earn
              </h1>

              <div className="space-y-2">
                <p className="text-xl text-gray-700">Get a chance to win</p>
                <p className="text-xl">
                  up-to{" "}
                  <span className="text-blue-600 font-semibold">
                    Rs. 15,000
                  </span>
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Refer Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative">
            {/* Floating Money 2 */}
            <img
              src={money}
              alt="money"
              className="absolute top-10 right-30 w-16 h-16"
              variants={floatingMoney}
              animate="animate"
              style={{ animationDelay: "1s" }}
            />
            <img
              src={money}
              alt="money"
              className="absolute top-0 right-110 w-16 h-16"
              variants={floatingMoney}
              animate="animate"
              style={{ animationDelay: "1s" }}
            />

            {/* Phone Mockup */}
            <div className="relative w-full h-full">
              <img
                src={dashboard}
                alt="App Interface"
                className="w-full h-full max-w-md "
              />

              {/* Company Logos */}
            </div>

            {/* Floating Money 3 */}
            <img
              src={money}
              alt="money"
              className="absolute bottom-0 right-25 w-16 h-16"
              variants={floatingMoney}
              animate="animate"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>
      </div>

      <ReferralModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Hero;
