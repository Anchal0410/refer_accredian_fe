import React, { useState } from "react";
import { X, User, Mail, GraduationCap, Gift } from "lucide-react";

const ReferralModal = ({ isOpen, onClose }) => {
  const [formInputs, setFormInputs] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    courseInterest: "",
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((current) => ({
      ...current,
      [name]: value,
    }));
  };
  const API_URL =
    "https://refer-accredian-be.onrender.com" ||
    "http://localhost:5000/api/referrals";
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInputs),
      });

      if (response.ok) {
        alert("Success!");
        onClose();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit");
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 overflow-auto ">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 ">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-t-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Gift className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-white text-xl font-semibold">
                  Refer a Friend
                </h2>
                <p className="text-blue-100 text-sm">
                  Get rewards for both you and your friend
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/10 p-2 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Your Information */}
          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <User className="h-5 w-5 text-blue-600" />
              Your Information
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="referrerName"
                value={formInputs.referrerName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="referrerEmail"
                value={formInputs.referrerEmail}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Friend's Information */}
          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-600" />
              Friend's Information
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Friend's Name
              </label>
              <input
                type="text"
                name="refereeName"
                value={formInputs.refereeName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Friend's Email
              </label>
              <input
                type="email"
                name="refereeEmail"
                value={formInputs.refereeEmail}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Course Selection */}
          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              Course Selection
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Course
              </label>
              <select
                name="courseInterest"
                value={formInputs.courseInterest}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select a course</option>
                <option value="web-development">Web Development</option>
                <option value="data-science">Data Science</option>
                <option value="product-management">Product Management</option>
                <option value="digital-marketing">Digital Marketing</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-colors"
          >
            Submit Referral
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReferralModal;
