import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import ReferralModal from "./ReferralModal";

const programs = [
  {
    name: "Professional Certificate Program in Product Management",
    referrerBonus: "₹7,000",
    refereeBonus: "₹9,000",
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    referrerBonus: "₹9,000",
    refereeBonus: "₹11,000",
  },
  {
    name: "Executive Program in Data Driven Product Management",
    referrerBonus: "₹10,000",
    refereeBonus: "₹10,000",
  },
  {
    name: "Executive Program in Product Management and Digital Transformation",
    referrerBonus: "₹10,000",
    refereeBonus: "₹10,000",
  },
];

const BenefitsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Add
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold">
            What Are The{" "}
            <span className="text-blue-600">Referral Benefits</span>?
          </h2>
        </motion.div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-12 bg-gray-50 py-4 px-6">
            <div className="col-span-6 font-medium text-gray-700">Programs</div>
            <div className="col-span-3 text-center font-medium text-gray-700">
              Referrer Bonus
            </div>
            <div className="col-span-3 text-center font-medium text-gray-700">
              Referee Bonus
            </div>
          </div>

          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-12 py-4 px-6 border-t border-gray-100 hover:bg-blue-50/30 transition-colors"
            >
              <div className="col-span-6 flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-gray-600">{program.name}</span>
              </div>
              <div className="col-span-3 text-center text-sm font-medium text-gray-900">
                {program.referrerBonus}
              </div>
              <div className="col-span-3 text-center text-sm font-medium text-gray-900">
                {program.refereeBonus}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
          onClick={() => setIsModalOpen(true)}
        >
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
            Refer Now
          </button>
        </motion.div>
        <ReferralModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default BenefitsTable;
