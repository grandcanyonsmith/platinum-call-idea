import React from 'react';
import { BudgetCalculation, HouseSpecs } from '../types';
import { formatCurrency } from '../utils/budgetCalculator';
import { DollarSign, Home, TrendingUp, MapPin } from 'lucide-react';

interface BudgetSummaryProps {
  budget: BudgetCalculation;
  specs: HouseSpecs;
}

const BudgetSummary: React.FC<BudgetSummaryProps> = ({ budget, specs }) => {
  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'economy': return 'text-green-600';
      case 'standard': return 'text-blue-600';
      case 'premium': return 'text-purple-600';
      case 'luxury': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getQualityLabel = (quality: string) => {
    switch (quality) {
      case 'economy': return 'Economy';
      case 'standard': return 'Standard';
      case 'premium': return 'Premium';
      case 'luxury': return 'Luxury';
      default: return quality;
    }
  };

  return (
    <div className="space-y-6">
      {/* Total Cost */}
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-900 mb-2">
          {formatCurrency(budget.totalCost)}
        </div>
        <div className="text-lg text-gray-600">
          Total Construction Cost
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="flex items-center justify-center w-8 h-8 bg-primary-100 rounded-lg mx-auto mb-2">
            <Home className="w-4 h-4 text-primary-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {formatCurrency(budget.costPerSqFt)}
          </div>
          <div className="text-sm text-gray-600">per sq ft</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-lg mx-auto mb-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {specs.squareFootage.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">square feet</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg mx-auto mb-2">
            <DollarSign className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {formatCurrency(budget.totalCost / specs.squareFootage * 1000)}
          </div>
          <div className="text-sm text-gray-600">per 1000 sq ft</div>
        </div>
      </div>

      {/* House Details */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-3">House Specifications</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Bedrooms:</span>
            <span className="ml-2 font-medium">{specs.bedrooms}</span>
          </div>
          <div>
            <span className="text-gray-600">Bathrooms:</span>
            <span className="ml-2 font-medium">{specs.bathrooms}</span>
          </div>
          <div>
            <span className="text-gray-600">Stories:</span>
            <span className="ml-2 font-medium">{specs.stories}</span>
          </div>
          <div>
            <span className="text-gray-600">Garage:</span>
            <span className="ml-2 font-medium">{specs.garageSpaces} spaces</span>
          </div>
        </div>
      </div>

      {/* Construction Details */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-3">Construction Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div>
              <span className="text-gray-600">Foundation:</span>
              <span className="ml-2 font-medium capitalize">{specs.foundationType}</span>
            </div>
            <div>
              <span className="text-gray-600">Roof Type:</span>
              <span className="ml-2 font-medium capitalize">{specs.roofType}</span>
            </div>
            <div>
              <span className="text-gray-600">Exterior:</span>
              <span className="ml-2 font-medium capitalize">{specs.exteriorMaterial.replace('-', ' ')}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <span className="text-gray-600">Quality Level:</span>
              <span className={`ml-2 font-medium ${getQualityColor(specs.quality)}`}>
                {getQualityLabel(specs.quality)}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Region:</span>
              <span className="ml-2 font-medium">{specs.location}</span>
            </div>
            <div>
              <span className="text-gray-600">Total Area:</span>
              <span className="ml-2 font-medium">{specs.squareFootage.toLocaleString()} sq ft</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Range Indicator */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">Cost Range</h4>
        <div className="text-sm text-blue-800">
          <p>
            This estimate represents a <strong>{getQualityLabel(specs.quality).toLowerCase()}</strong> quality home 
            in the <strong>{specs.location}</strong> region. Actual costs may vary by ±15% based on:
          </p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>Local material availability and pricing</li>
            <li>Site conditions and accessibility</li>
            <li>Contractor availability and rates</li>
            <li>Permit and inspection requirements</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BudgetSummary; 