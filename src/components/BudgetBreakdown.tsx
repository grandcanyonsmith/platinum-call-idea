import React from 'react';
import { BudgetCalculation } from '../types';
import { formatCurrency } from '../utils/budgetCalculator';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface BudgetBreakdownProps {
  budget: BudgetCalculation;
}

const BudgetBreakdown: React.FC<BudgetBreakdownProps> = ({ budget }) => {
  const [expandedCategories, setExpandedCategories] = React.useState<Set<string>>(new Set());

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const sortedCategories = budget.categories.sort((a, b) => 
    budget.breakdown[b.id].cost - budget.breakdown[a.id].cost
  );

  return (
    <div className="space-y-4">
      {/* Summary Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cost
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Percentage
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cost per Sq Ft
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedCategories.map((category) => {
              const categoryData = budget.breakdown[category.id];
              const costPerSqFt = categoryData.cost / (budget.totalCost / budget.costPerSqFt);
              const isExpanded = expandedCategories.has(category.id);
              
              return (
                <React.Fragment key={category.id}>
                  <tr 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {category.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {category.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {formatCurrency(categoryData.cost)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {categoryData.percentage}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatCurrency(costPerSqFt)}
                    </td>
                  </tr>
                  
                  {/* Expanded Details */}
                  {isExpanded && (
                    <tr>
                      <td colSpan={4} className="px-6 py-4 bg-gray-50">
                        <div className="space-y-3">
                          <h5 className="font-medium text-gray-900">Typical Items Included:</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {category.items.map((item) => (
                              <div key={item.id} className="flex justify-between items-center text-sm">
                                <div>
                                  <span className="font-medium text-gray-900">{item.name}</span>
                                  <div className="text-gray-500">{item.description}</div>
                                </div>
                                <div className="text-right">
                                  <div className="font-medium text-gray-900">
                                    {formatCurrency(item.costPerUnit)}
                                  </div>
                                  <div className="text-gray-500">per {item.unit}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Total Row */}
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-primary-900">Total Construction Cost</h3>
            <p className="text-sm text-primary-700">
              Includes all materials, labor, permits, and contractor overhead
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary-900">
              {formatCurrency(budget.totalCost)}
            </div>
            <div className="text-sm text-primary-700">
              {formatCurrency(budget.costPerSqFt)} per sq ft
            </div>
          </div>
        </div>
      </div>

      {/* Additional Notes */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-medium text-yellow-900 mb-2">Important Notes</h4>
        <ul className="text-sm text-yellow-800 space-y-1 list-disc list-inside">
          <li>This estimate does not include land costs, site preparation, or landscaping beyond basic requirements</li>
          <li>Prices are based on current market conditions and may fluctuate</li>
          <li>Local building codes and requirements may affect final costs</li>
          <li>Consider adding 10-15% contingency for unexpected expenses</li>
          <li>Consult with local contractors for more accurate estimates</li>
        </ul>
      </div>
    </div>
  );
};

export default BudgetBreakdown; 