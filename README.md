# Construction Budget Calculator

A comprehensive web application for estimating construction costs of standard US houses. This tool provides professional-grade cost estimates based on current market data and industry standards.

## Features

- **Real-time Cost Calculation**: Instant budget estimates as you modify house specifications
- **Comprehensive Cost Breakdown**: Detailed breakdown by construction category (foundation, framing, electrical, etc.)
- **Regional Adjustments**: Cost adjustments based on US geographic regions
- **Quality Level Options**: Economy, Standard, Premium, and Luxury quality levels
- **Interactive Visualizations**: Pie charts and detailed tables showing cost distribution
- **Professional UI**: Modern, responsive design with intuitive user interface

## Cost Categories Included

1. **Site Preparation** (8%) - Land clearing, excavation, utility connections
2. **Foundation** (12%) - Concrete slab, crawlspace, or basement
3. **Framing** (15%) - Wood framing, roof trusses, sheathing
4. **Exterior** (12%) - Siding, windows, doors, exterior finishes
5. **Roofing** (8%) - Roofing materials and gutters
6. **Plumbing** (8%) - Water supply, drainage, fixtures
7. **Electrical** (8%) - Wiring, fixtures, appliances
8. **HVAC** (8%) - Heating, ventilation, air conditioning
9. **Interior** (12%) - Drywall, paint, flooring, trim
10. **Garage** (4%) - Garage door and concrete floor
11. **Landscaping** (3%) - Basic landscaping and driveway
12. **Permits & Fees** (2%) - Building permits and inspections

## House Specifications

### Basic Information
- Square footage (500 - 10,000 sq ft)
- Number of bedrooms (1-6)
- Number of bathrooms (1-4)
- Number of stories (1-3)
- Garage spaces (0-4)

### Construction Details
- Foundation type: Slab, Crawlspace, Basement
- Roof type: Gable, Hip, Flat
- Exterior material: Vinyl, Brick, Stucco, Wood, Fiber Cement
- Quality level: Economy, Standard, Premium, Luxury

### Regional Adjustments
- Northeast (1.25x) - Higher labor and material costs
- Southeast (0.90x) - Lower labor costs, moderate materials
- Midwest (0.95x) - Moderate costs across the board
- Southwest (0.85x) - Lower costs, good availability
- West Coast (1.35x) - Highest labor and material costs
- Mountain States (1.10x) - Moderate to high costs
- National Average (1.00x) - Baseline national average

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: Hot reload with ESLint

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd construction-budget-calculator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. **Enter House Specifications**: Fill in the form on the left side with your house details
2. **View Real-time Results**: The budget calculation updates automatically as you change specifications
3. **Analyze Cost Breakdown**: Use the pie chart and detailed table to understand cost distribution
4. **Export Results**: Copy the results or take screenshots for your records

## Cost Estimation Methodology

The calculator uses a sophisticated algorithm that considers:

- **Base Cost**: $150 per square foot for standard quality
- **Quality Multipliers**: 
  - Economy: 0.80x
  - Standard: 1.00x
  - Premium: 1.25x
  - Luxury: 1.60x
- **Regional Adjustments**: Based on local labor and material costs
- **Foundation Adjustments**: Different costs for slab, crawlspace, and basement
- **Roof Adjustments**: Cost variations for different roof types
- **Exterior Material Adjustments**: Price differences for various siding materials
- **Garage Costs**: $15,000 per garage space
- **Contractor Overhead**: 15% for project management, insurance, and profit

## Data Sources

The cost estimates are based on:
- RSMeans construction cost data
- HomeAdvisor cost guides
- Industry surveys and reports
- Current market analysis

## Limitations

- Estimates are for new construction only
- Does not include land costs
- Assumes standard site conditions
- Prices may vary by ±15% based on local conditions
- Does not include custom features or high-end finishes beyond the selected quality level

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or support, please open an issue in the repository or contact the development team.

---

**Note**: This calculator provides estimates for planning purposes. Always consult with local contractors and professionals for actual construction costs and requirements. 