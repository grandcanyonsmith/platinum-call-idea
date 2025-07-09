import React, { useState } from 'react';
import { HouseSpecs, BudgetCalculation } from './types';
import { calculateBudget, formatCurrency } from './utils/budgetCalculator';
import { regionalAdjustments } from './data/constructionData';
import HouseSpecsForm from './components/HouseSpecsForm';
import BudgetSummary from './components/BudgetSummary';
import BudgetBreakdown from './components/BudgetBreakdown';
import CostChart from './components/CostChart';
import { Calculator, Home, DollarSign, TrendingUp } from 'lucide-react';

function App() {
  const [houseSpecs, setHouseSpecs] = useState<HouseSpecs>({
    squareFootage: 2000,
    bedrooms: 3,
    bathrooms: 2,
    stories: 1,
    garageSpaces: 2,
    foundationType: 'slab',
    roofType: 'gable',
    exteriorMaterial: 'vinyl',
    quality: 'standard',
    location: 'National Average'
  });

  const [budget, setBudget] = useState<BudgetCalculation | null>(null);

  const handleCalculate = () => {
    const calculatedBudget = calculateBudget(houseSpecs);
    setBudget(calculatedBudget);
  };

  const handleSpecsChange = (newSpecs: HouseSpecs) => {
    setHouseSpecs(newSpecs);
    // Recalculate budget when specs change
    const calculatedBudget = calculateBudget(newSpecs);
    setBudget(calculatedBudget);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Construction Budget Calculator</h1>
                <p className="text-sm text-gray-500">Professional cost estimation for US homes</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Calculator className="w-4 h-4" />
                <span>Powered by industry data</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - House Specifications */}
          <div className="lg:col-span-1">
            <div className="card">
              <div className="flex items-center space-x-2 mb-6">
                <Home className="w-5 h-5 text-primary-600" />
                <h2 className="text-lg font-semibold text-gray-900">House Specifications</h2>
              </div>
              <HouseSpecsForm 
                specs={houseSpecs} 
                onSpecsChange={handleSpecsChange}
                onCalculate={handleCalculate}
              />
            </div>
          </div>

          {/* Right Column - Budget Results */}
          <div className="lg:col-span-2 space-y-6">
            {budget ? (
              <>
                {/* Budget Summary */}
                <div className="card">
                  <div className="flex items-center space-x-2 mb-6">
                    <DollarSign className="w-5 h-5 text-primary-600" />
                    <h2 className="text-lg font-semibold text-gray-900">Budget Summary</h2>
                  </div>
                  <BudgetSummary budget={budget} specs={houseSpecs} />
                </div>

                {/* Cost Chart */}
                <div className="card">
                  <div className="flex items-center space-x-2 mb-6">
                    <TrendingUp className="w-5 h-5 text-primary-600" />
                    <h2 className="text-lg font-semibold text-gray-900">Cost Breakdown</h2>
                  </div>
                  <CostChart budget={budget} />
                </div>

                {/* Detailed Breakdown */}
                <div className="card">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">Detailed Cost Breakdown</h2>
                  <BudgetBreakdown budget={budget} />
                </div>
              </>
            ) : (
              <div className="card">
                <div className="text-center py-12">
                  <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Calculate</h3>
                  <p className="text-gray-500 mb-6">
                    Enter your house specifications and click "Calculate Budget" to see your construction cost estimate.
                  </p>
                  <button
                    onClick={handleCalculate}
                    className="btn-primary"
                  >
                    Calculate Budget
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-sm text-gray-500">
            <p>
              This calculator provides estimates based on current US construction costs. 
              Actual costs may vary based on local conditions, material availability, and market fluctuations.
            </p>
            <p className="mt-2">
              Data sources: RSMeans, HomeAdvisor, and industry surveys. Last updated: 2024
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App; 