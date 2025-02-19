import React from "react";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import BenefitsTable from "./components/BenefitsTable";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">accredian</span>
            <button className="px-4 py-2 text-blue-600 font-medium">
              Login
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <HowItWorks />
        <BenefitsTable />
      </main>
    </div>
  );
}

export default App;
