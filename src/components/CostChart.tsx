import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { BudgetCalculation } from '../types';
import { formatCurrency } from '../utils/budgetCalculator';

interface CostChartProps {
  budget: BudgetCalculation;
}

const COLORS = [
  '#3B82F6', // Blue
  '#10B981', // Green
  '#F59E0B', // Yellow
  '#EF4444', // Red
  '#8B5CF6', // Purple
  '#06B6D4', // Cyan
  '#F97316', // Orange
  '#84CC16', // Lime
  '#EC4899', // Pink
  '#6366F1', // Indigo
  '#14B8A6', // Teal
  '#F43F5E', // Rose
];

const CostChart: React.FC<CostChartProps> = ({ budget }) => {
  const data = budget.categories.map((category, index) => ({
    name: category.name,
    value: budget.breakdown[category.id].cost,
    percentage: budget.breakdown[category.id].percentage,
    color: COLORS[index % COLORS.length]
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{data.name}</p>
          <p className="text-sm text-gray-600">
            Cost: {formatCurrency(data.value)}
          </p>
          <p className="text-sm text-gray-600">
            Percentage: {data.percentage}%
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }: any) => {
    return (
      <div className="flex flex-wrap gap-4 mt-4">
        {payload?.map((entry: any, index: number) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-700">
              {entry.value} ({data[index]?.percentage}%)
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.slice(0, 4).map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-lg font-semibold text-gray-900">
              {formatCurrency(item.value)}
            </div>
            <div className="text-sm text-gray-600">{item.name}</div>
            <div className="text-xs text-gray-500">{item.percentage}%</div>
          </div>
        ))}
      </div>

      {/* Additional Categories */}
      {data.length > 4 && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">Additional Categories</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {data.slice(4).map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <div className="text-sm">
                  <div className="font-medium text-gray-900">{item.name}</div>
                  <div className="text-gray-600">
                    {formatCurrency(item.value)} ({item.percentage}%)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CostChart; 