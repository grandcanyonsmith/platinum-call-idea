import React from 'react';
import { HouseSpecs } from '../types';
import { regionalAdjustments } from '../data/constructionData';

interface HouseSpecsFormProps {
  specs: HouseSpecs;
  onSpecsChange: (specs: HouseSpecs) => void;
  onCalculate: () => void;
}

const HouseSpecsForm: React.FC<HouseSpecsFormProps> = ({ specs, onSpecsChange, onCalculate }) => {
  const handleInputChange = (field: keyof HouseSpecs, value: any) => {
    onSpecsChange({
      ...specs,
      [field]: value
    });
  };

  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <div>
        <h3 className="text-md font-medium text-gray-900 mb-4">Basic Information</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="squareFootage" className="block text-sm font-medium text-gray-700 mb-1">
              Square Footage
            </label>
            <input
              type="number"
              id="squareFootage"
              value={specs.squareFootage}
              onChange={(e) => handleInputChange('squareFootage', parseInt(e.target.value) || 0)}
              className="input-field"
              min="500"
              max="10000"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">
                Bedrooms
              </label>
              <select
                id="bedrooms"
                value={specs.bedrooms}
                onChange={(e) => handleInputChange('bedrooms', parseInt(e.target.value))}
                className="input-field"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-1">
                Bathrooms
              </label>
              <select
                id="bathrooms"
                value={specs.bathrooms}
                onChange={(e) => handleInputChange('bathrooms', parseInt(e.target.value))}
                className="input-field"
              >
                {[1, 1.5, 2, 2.5, 3, 3.5, 4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="stories" className="block text-sm font-medium text-gray-700 mb-1">
                Stories
              </label>
              <select
                id="stories"
                value={specs.stories}
                onChange={(e) => handleInputChange('stories', parseInt(e.target.value))}
                className="input-field"
              >
                {[1, 2, 3].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="garageSpaces" className="block text-sm font-medium text-gray-700 mb-1">
                Garage Spaces
              </label>
              <select
                id="garageSpaces"
                value={specs.garageSpaces}
                onChange={(e) => handleInputChange('garageSpaces', parseInt(e.target.value))}
                className="input-field"
              >
                {[0, 1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Construction Details */}
      <div>
        <h3 className="text-md font-medium text-gray-900 mb-4">Construction Details</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="foundationType" className="block text-sm font-medium text-gray-700 mb-1">
              Foundation Type
            </label>
            <select
              id="foundationType"
              value={specs.foundationType}
              onChange={(e) => handleInputChange('foundationType', e.target.value)}
              className="input-field"
            >
              <option value="slab">Concrete Slab</option>
              <option value="crawlspace">Crawlspace</option>
              <option value="basement">Basement</option>
            </select>
          </div>

          <div>
            <label htmlFor="roofType" className="block text-sm font-medium text-gray-700 mb-1">
              Roof Type
            </label>
            <select
              id="roofType"
              value={specs.roofType}
              onChange={(e) => handleInputChange('roofType', e.target.value)}
              className="input-field"
            >
              <option value="gable">Gable</option>
              <option value="hip">Hip</option>
              <option value="flat">Flat</option>
            </select>
          </div>

          <div>
            <label htmlFor="exteriorMaterial" className="block text-sm font-medium text-gray-700 mb-1">
              Exterior Material
            </label>
            <select
              id="exteriorMaterial"
              value={specs.exteriorMaterial}
              onChange={(e) => handleInputChange('exteriorMaterial', e.target.value)}
              className="input-field"
            >
              <option value="vinyl">Vinyl Siding</option>
              <option value="brick">Brick Veneer</option>
              <option value="stucco">Stucco</option>
              <option value="wood">Wood Siding</option>
              <option value="fiber-cement">Fiber Cement</option>
            </select>
          </div>

          <div>
            <label htmlFor="quality" className="block text-sm font-medium text-gray-700 mb-1">
              Quality Level
            </label>
            <select
              id="quality"
              value={specs.quality}
              onChange={(e) => handleInputChange('quality', e.target.value)}
              className="input-field"
            >
              <option value="economy">Economy</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>
        </div>
      </div>

      {/* Location */}
      <div>
        <h3 className="text-md font-medium text-gray-900 mb-4">Location</h3>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Region
          </label>
          <select
            id="location"
            value={specs.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="input-field"
          >
            {regionalAdjustments.map(region => (
              <option key={region.region} value={region.region}>
                {region.region} ({region.description})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Calculate Button */}
      <div className="pt-4">
        <button
          onClick={onCalculate}
          className="w-full btn-primary"
        >
          Calculate Budget
        </button>
      </div>

      {/* Quick Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="text-sm font-medium text-blue-900 mb-2">Quick Tips</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Standard quality includes mid-range materials and finishes</li>
          <li>• Premium quality includes high-end materials and custom features</li>
          <li>• Regional adjustments account for local labor and material costs</li>
          <li>• Garage costs are calculated separately at $15,000 per space</li>
        </ul>
      </div>
    </div>
  );
};

export default HouseSpecsForm; 