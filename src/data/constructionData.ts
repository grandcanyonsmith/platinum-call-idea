import { ConstructionItem, BudgetCategory, RegionalAdjustment } from '../types';

export const constructionItems: ConstructionItem[] = [
  // Site Preparation
  { id: 'site-clear', name: 'Site Clearing', description: 'Clearing and grading of building site', unit: 'sqft', costPerUnit: 2.50, category: 'site' },
  { id: 'excavation', name: 'Excavation', description: 'Foundation excavation and backfill', unit: 'sqft', costPerUnit: 8.00, category: 'site' },
  { id: 'utilities', name: 'Utility Connections', description: 'Water, sewer, electrical, gas connections', unit: 'lump', costPerUnit: 15000, category: 'site' },
  
  // Foundation
  { id: 'foundation-slab', name: 'Concrete Slab', description: '4-inch reinforced concrete slab', unit: 'sqft', costPerUnit: 12.00, category: 'foundation' },
  { id: 'foundation-crawl', name: 'Crawlspace Foundation', description: 'Concrete block or poured walls', unit: 'sqft', costPerUnit: 18.00, category: 'foundation' },
  { id: 'foundation-basement', name: 'Basement Foundation', description: 'Full basement with concrete walls', unit: 'sqft', costPerUnit: 35.00, category: 'foundation' },
  
  // Framing
  { id: 'framing-wood', name: 'Wood Framing', description: '2x4 and 2x6 wood stud walls', unit: 'sqft', costPerUnit: 15.00, category: 'framing' },
  { id: 'roof-trusses', name: 'Roof Trusses', description: 'Engineered roof truss system', unit: 'sqft', costPerUnit: 8.00, category: 'framing' },
  { id: 'sheathing', name: 'Wall & Roof Sheathing', description: 'OSB or plywood sheathing', unit: 'sqft', costPerUnit: 3.50, category: 'framing' },
  
  // Exterior
  { id: 'siding-vinyl', name: 'Vinyl Siding', description: 'Standard vinyl siding installation', unit: 'sqft', costPerUnit: 8.00, category: 'exterior' },
  { id: 'siding-brick', name: 'Brick Veneer', description: 'Brick veneer with mortar', unit: 'sqft', costPerUnit: 18.00, category: 'exterior' },
  { id: 'siding-stucco', name: 'Stucco Finish', description: 'Three-coat stucco system', unit: 'sqft', costPerUnit: 12.00, category: 'exterior' },
  { id: 'windows', name: 'Windows', description: 'Double-pane vinyl windows', unit: 'sqft', costPerUnit: 25.00, category: 'exterior' },
  { id: 'doors', name: 'Exterior Doors', description: 'Steel entry doors with hardware', unit: 'each', costPerUnit: 800, category: 'exterior' },
  
  // Roofing
  { id: 'roofing-asphalt', name: 'Asphalt Shingles', description: '30-year architectural shingles', unit: 'sqft', costPerUnit: 4.50, category: 'roofing' },
  { id: 'roofing-metal', name: 'Metal Roofing', description: 'Standing seam metal roof', unit: 'sqft', costPerUnit: 12.00, category: 'roofing' },
  { id: 'gutters', name: 'Gutters & Downspouts', description: 'Aluminum gutters with downspouts', unit: 'linear ft', costPerUnit: 15.00, category: 'roofing' },
  
  // Plumbing
  { id: 'plumbing-rough', name: 'Rough Plumbing', description: 'Water supply and drain lines', unit: 'sqft', costPerUnit: 8.00, category: 'plumbing' },
  { id: 'plumbing-fixtures', name: 'Plumbing Fixtures', description: 'Toilets, sinks, tubs, showers', unit: 'bathroom', costPerUnit: 2500, category: 'plumbing' },
  { id: 'water-heater', name: 'Water Heater', description: '50-gallon electric water heater', unit: 'each', costPerUnit: 1200, category: 'plumbing' },
  
  // Electrical
  { id: 'electrical-rough', name: 'Rough Electrical', description: 'Wiring, outlets, switches, panels', unit: 'sqft', costPerUnit: 6.00, category: 'electrical' },
  { id: 'electrical-fixtures', name: 'Electrical Fixtures', description: 'Light fixtures, ceiling fans', unit: 'sqft', costPerUnit: 3.00, category: 'electrical' },
  { id: 'appliances', name: 'Kitchen Appliances', description: 'Refrigerator, stove, dishwasher, microwave', unit: 'kitchen', costPerUnit: 3500, category: 'electrical' },
  
  // HVAC
  { id: 'hvac-system', name: 'HVAC System', description: 'Central air conditioning and heating', unit: 'sqft', costPerUnit: 12.00, category: 'hvac' },
  { id: 'ductwork', name: 'Ductwork', description: 'Supply and return air ducts', unit: 'sqft', costPerUnit: 4.00, category: 'hvac' },
  
  // Interior
  { id: 'drywall', name: 'Drywall', description: 'Wall and ceiling drywall installation', unit: 'sqft', costPerUnit: 3.50, category: 'interior' },
  { id: 'paint', name: 'Interior Paint', description: 'Two coats of interior paint', unit: 'sqft', costPerUnit: 2.00, category: 'interior' },
  { id: 'flooring-carpet', name: 'Carpet', description: 'Standard carpet with padding', unit: 'sqft', costPerUnit: 4.00, category: 'interior' },
  { id: 'flooring-hardwood', name: 'Hardwood Flooring', description: '3/4-inch solid hardwood', unit: 'sqft', costPerUnit: 12.00, category: 'interior' },
  { id: 'cabinets', name: 'Kitchen Cabinets', description: 'Stock kitchen cabinets with countertops', unit: 'linear ft', costPerUnit: 200, category: 'interior' },
  { id: 'trim', name: 'Interior Trim', description: 'Baseboards, door casings, crown molding', unit: 'sqft', costPerUnit: 2.50, category: 'interior' },
  
  // Garage
  { id: 'garage-door', name: 'Garage Door', description: '16x7 insulated garage door with opener', unit: 'each', costPerUnit: 1200, category: 'garage' },
  { id: 'garage-concrete', name: 'Garage Concrete', description: '4-inch concrete garage floor', unit: 'sqft', costPerUnit: 8.00, category: 'garage' },
  
  // Landscaping
  { id: 'landscaping', name: 'Basic Landscaping', description: 'Sod, shrubs, trees, irrigation', unit: 'sqft', costPerUnit: 3.00, category: 'landscaping' },
  { id: 'driveway', name: 'Concrete Driveway', description: '4-inch concrete driveway', unit: 'sqft', costPerUnit: 8.00, category: 'landscaping' },
  
  // Permits & Fees
  { id: 'permits', name: 'Building Permits', description: 'Municipal building permits and fees', unit: 'lump', costPerUnit: 8000, category: 'permits' },
  { id: 'inspections', name: 'Inspections', description: 'Building inspections and certifications', unit: 'lump', costPerUnit: 2000, category: 'permits' },
  
  // Contractor Overhead
  { id: 'overhead', name: 'Contractor Overhead', description: 'Project management, insurance, profit', unit: 'percentage', costPerUnit: 0.15, category: 'overhead' },
];

export const budgetCategories: BudgetCategory[] = [
  {
    id: 'site',
    name: 'Site Preparation',
    description: 'Land clearing, excavation, and utility connections',
    percentage: 8,
    items: constructionItems.filter(item => item.category === 'site')
  },
  {
    id: 'foundation',
    name: 'Foundation',
    description: 'Concrete slab, crawlspace, or basement foundation',
    percentage: 12,
    items: constructionItems.filter(item => item.category === 'foundation')
  },
  {
    id: 'framing',
    name: 'Framing',
    description: 'Wood framing, roof trusses, and sheathing',
    percentage: 15,
    items: constructionItems.filter(item => item.category === 'framing')
  },
  {
    id: 'exterior',
    name: 'Exterior',
    description: 'Siding, windows, doors, and exterior finishes',
    percentage: 12,
    items: constructionItems.filter(item => item.category === 'exterior')
  },
  {
    id: 'roofing',
    name: 'Roofing',
    description: 'Roofing materials and gutters',
    percentage: 8,
    items: constructionItems.filter(item => item.category === 'roofing')
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    description: 'Water supply, drainage, and fixtures',
    percentage: 8,
    items: constructionItems.filter(item => item.category === 'plumbing')
  },
  {
    id: 'electrical',
    name: 'Electrical',
    description: 'Wiring, fixtures, and appliances',
    percentage: 8,
    items: constructionItems.filter(item => item.category === 'electrical')
  },
  {
    id: 'hvac',
    name: 'HVAC',
    description: 'Heating, ventilation, and air conditioning',
    percentage: 8,
    items: constructionItems.filter(item => item.category === 'hvac')
  },
  {
    id: 'interior',
    name: 'Interior',
    description: 'Drywall, paint, flooring, and trim',
    percentage: 12,
    items: constructionItems.filter(item => item.category === 'interior')
  },
  {
    id: 'garage',
    name: 'Garage',
    description: 'Garage door and concrete floor',
    percentage: 4,
    items: constructionItems.filter(item => item.category === 'garage')
  },
  {
    id: 'landscaping',
    name: 'Landscaping',
    description: 'Basic landscaping and driveway',
    percentage: 3,
    items: constructionItems.filter(item => item.category === 'landscaping')
  },
  {
    id: 'permits',
    name: 'Permits & Fees',
    description: 'Building permits and inspections',
    percentage: 2,
    items: constructionItems.filter(item => item.category === 'permits')
  }
];

export const regionalAdjustments: RegionalAdjustment[] = [
  { region: 'Northeast', multiplier: 1.25, description: 'Higher labor and material costs' },
  { region: 'Southeast', multiplier: 0.90, description: 'Lower labor costs, moderate materials' },
  { region: 'Midwest', multiplier: 0.95, description: 'Moderate costs across the board' },
  { region: 'Southwest', multiplier: 0.85, description: 'Lower costs, good availability' },
  { region: 'West Coast', multiplier: 1.35, description: 'Highest labor and material costs' },
  { region: 'Mountain States', multiplier: 1.10, description: 'Moderate to high costs' },
  { region: 'National Average', multiplier: 1.00, description: 'Baseline national average' }
];

export const qualityMultipliers = {
  economy: 0.80,
  standard: 1.00,
  premium: 1.25,
  luxury: 1.60
}; 