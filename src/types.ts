export interface ConstructionItem {
  id: string;
  name: string;
  description: string;
  unit: string;
  costPerUnit: number;
  category: string;
  subcategory?: string;
}

export interface BudgetCategory {
  id: string;
  name: string;
  description: string;
  percentage: number;
  items: ConstructionItem[];
}

export interface HouseSpecs {
  squareFootage: number;
  bedrooms: number;
  bathrooms: number;
  stories: number;
  garageSpaces: number;
  foundationType: 'slab' | 'crawlspace' | 'basement';
  roofType: 'gable' | 'hip' | 'flat';
  exteriorMaterial: 'vinyl' | 'brick' | 'stucco' | 'wood' | 'fiber-cement';
  quality: 'economy' | 'standard' | 'premium' | 'luxury';
  location: string;
}

export interface BudgetCalculation {
  totalCost: number;
  costPerSqFt: number;
  categories: BudgetCategory[];
  breakdown: {
    [categoryId: string]: {
      cost: number;
      percentage: number;
    };
  };
}

export interface RegionalAdjustment {
  region: string;
  multiplier: number;
  description: string;
} 