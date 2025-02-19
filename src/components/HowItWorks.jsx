import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, ClipboardEdit, Wallet } from "lucide-react";
import ReferralModal from "./ReferralModal";
const HowItWorks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">
            How Do I <span className="text-blue-600">Refer</span>?
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Background Elements */}
          <motion.div
            className="absolute inset-0 opacity-20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0, 0.2, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
          </motion.div>

          {/* Steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <UserPlus className="w-8 h-8" />,
                title: "Submit Referrals",
                description: "Easily via our website's referral section",
              },
              {
                icon: <ClipboardEdit className="w-8 h-8" />,
                title: "Earn Rewards",
                description: "When your referral joins Accredian",
              },
              {
                icon: <Wallet className="w-8 h-8" />,
                title: "Get Bonus",
                description: "30 days after program enrollment",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                }}
                className="relative"
              >
                {/* Connecting Lines */}
                {index < 2 && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 -translate-y-1/2 z-0"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.2 + 0.5,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  />
                )}

                {/* Card */}
                <motion.div
                  className="relative bg-white rounded-2xl p-6 shadow-lg backdrop-blur-lg border border-blue-100 z-10"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
                    rotate: [0, -1, 1, 0],
                  }}
                  transition={{
                    rotate: {
                      duration: 0.3,
                      repeat: 0,
                    },
                  }}
                >
                  {/* Glowing Circle Behind Icon */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-100 rounded-full blur-lg"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative flex flex-col items-center text-center space-y-4">
                    <motion.div
                      className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>

                    {/* Decorative Dots */}
                    <motion.div
                      className="absolute top-2 right-2 flex space-x-1"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-50"
                        />
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-medium shadow-lg shadow-blue-200 cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Refer Now
          </motion.button>
        </motion.div>
        <ReferralModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default HowItWorks;
