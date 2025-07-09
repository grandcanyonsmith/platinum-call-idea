import { HouseSpecs, BudgetCalculation, BudgetCategory } from '../types';
import { constructionItems, budgetCategories, regionalAdjustments, qualityMultipliers } from '../data/constructionData';

export function calculateBudget(specs: HouseSpecs): BudgetCalculation {
  const baseCostPerSqFt = 150; // Base cost per square foot for standard quality
  const baseTotalCost = specs.squareFootage * baseCostPerSqFt;
  
  // Apply quality multiplier
  const qualityMultiplier = qualityMultipliers[specs.quality];
  let adjustedCost = baseTotalCost * qualityMultiplier;
  
  // Apply regional adjustment
  const regionalAdjustment = regionalAdjustments.find(ra => ra.region === specs.location);
  if (regionalAdjustment) {
    adjustedCost *= regionalAdjustment.multiplier;
  }
  
  // Calculate foundation adjustment based on type
  let foundationMultiplier = 1.0;
  switch (specs.foundationType) {
    case 'slab':
      foundationMultiplier = 0.9;
      break;
    case 'crawlspace':
      foundationMultiplier = 1.0;
      break;
    case 'basement':
      foundationMultiplier = 1.3;
      break;
  }
  
  // Calculate roof adjustment
  let roofMultiplier = 1.0;
  switch (specs.roofType) {
    case 'gable':
      roofMultiplier = 1.0;
      break;
    case 'hip':
      roofMultiplier = 1.15;
      break;
    case 'flat':
      roofMultiplier = 0.95;
      break;
  }
  
  // Calculate exterior material adjustment
  let exteriorMultiplier = 1.0;
  switch (specs.exteriorMaterial) {
    case 'vinyl':
      exteriorMultiplier = 0.9;
      break;
    case 'brick':
      exteriorMultiplier = 1.25;
      break;
    case 'stucco':
      exteriorMultiplier = 1.1;
      break;
    case 'wood':
      exteriorMultiplier = 1.15;
      break;
    case 'fiber-cement':
      exteriorMultiplier = 1.2;
      break;
  }
  
  // Apply all multipliers
  adjustedCost *= foundationMultiplier * roofMultiplier * exteriorMultiplier;
  
  // Add garage cost
  const garageCost = specs.garageSpaces * 15000; // $15,000 per garage space
  adjustedCost += garageCost;
  
  // Calculate category breakdown
  const breakdown: { [categoryId: string]: { cost: number; percentage: number } } = {};
  
  budgetCategories.forEach(category => {
    const categoryCost = adjustedCost * (category.percentage / 100);
    breakdown[category.id] = {
      cost: categoryCost,
      percentage: category.percentage
    };
  });
  
  // Add contractor overhead
  const overheadCost = adjustedCost * 0.15; // 15% overhead
  adjustedCost += overheadCost;
  
  return {
    totalCost: adjustedCost,
    costPerSqFt: adjustedCost / specs.squareFootage,
    categories: budgetCategories,
    breakdown
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

export function getDetailedBreakdown(specs: HouseSpecs): any[] {
  const calculation = calculateBudget(specs);
  const breakdown = [];
  
  for (const category of budgetCategories) {
    const categoryData = calculation.breakdown[category.id];
    breakdown.push({
      category: category.name,
      cost: categoryData.cost,
      percentage: categoryData.percentage,
      formattedCost: formatCurrency(categoryData.cost)
    });
  }
  
  return breakdown;
}

export function getRegionalMultiplier(location: string): number {
  const adjustment = regionalAdjustments.find(ra => ra.region === location);
  return adjustment ? adjustment.multiplier : 1.0;
}

export function getQualityMultiplier(quality: string): number {
  return qualityMultipliers[quality as keyof typeof qualityMultipliers] || 1.0;
} 