import  { useState, useEffect } from 'react';

const SearchBox = () => {
    const [selectedType, setSelectedType] = useState('');
    const [selectedBedrooms, setSelectedBedrooms] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [currencySign, setCurrencySign] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
  
    const propertyTypes = ['For Rent', 'For Sale', 'Shared', 'For Lease'];
  
    // Mock data for filter options (you can replace it with your data)
    const bedroomsOptions = ['1', '2', '3', '4+'];
    const countryOptions = ['Country A', 'Country B', 'Country C'];
    const stateOptions = ['State X', 'State Y', 'State Z'];
    const cityOptions = ['City 1', 'City 2', 'City 3'];
  
    const currencySigns = {
      'Country A': '$',
      'Country B': '€',
      'Country C': '£',
      // Add more currencies as needed
    };
  
    useEffect(() => {
      // Update currency sign when selected country changes
      setCurrencySign(currencySigns[selectedCountry] || '');
    }, [selectedCountry]);
  
    const handleTypeChange = (event) => {
      setSelectedType(event);
      console.log(event)
    };
  
    const handleBedroomsChange = (event) => {
      setSelectedBedrooms(event.target.value);
    };
  
    const handleCountryChange = (event) => {
      setSelectedCountry(event.target.value);
    };
  
    const handleStateChange = (event) => {
      setSelectedState(event.target.value);
    };
  
    const handleCityChange = (event) => {
      setSelectedCity(event.target.value);
    };
  
    const handleMinPriceChange = (event) => {
      setMinPrice(event.target.value);
    };
  
    const handleMaxPriceChange = (event) => {
      setMaxPrice(event.target.value);
    };
  
    const handleSearchQueryChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSearch = () => {
      // Implement your search logic here
      console.log('Search Parameters:', {
        selectedType,
        selectedBedrooms,
        selectedCountry,
        selectedState,
        selectedCity,
        minPrice,
        maxPrice,
        searchQuery,
      });
    };
  
    return (
     
      <div className="bg-white text-black p-6 rounded-lg shadow-md absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                <div className="flex space-x-4 mb-4">
  {/* For Rent Button */}
  <button
    className={`${
      selectedType === 'For Rent' ? 'bg-[#FFCC00] text-black' : 'bg-black text-[#FFCC00]'
    } px-4 py-2 rounded focus:outline-none focus:shadow-outline`}
    onClick={() => handleTypeChange('For Rent')}
  >
    For Rent
  </button>

  {/* For Sale Button */}
  <button
    className={`${
      selectedType === 'For Sale' ? 'bg-[#FFCC00] text-black' : 'bg-black text-[#FFCC00]'
    } px-4 py-2 rounded focus:outline-none focus:shadow-outline`}
    onClick={() => handleTypeChange('For Sale')}
  >
    For Sale
  </button>

  {/* Shared Button */}
  <button
    className={`${
      selectedType === 'Shared' ? 'bg-[#FFCC00] text-black' : 'bg-black text-[#FFCC00]'
    } px-4 py-2 rounded focus:outline-none focus:shadow-outline`}
    onClick={() => handleTypeChange('Shared')}
  >
    Shared
  </button>

  {/* For Lease Button */}
  <button
    className={`${
      selectedType === 'For Lease' ? 'bg-[#FFCC00] text-black' : 'bg-black text-[#FFCC00]'
    } px-4 py-2 rounded focus:outline-none focus:shadow-outline`}
    onClick={() => handleTypeChange('For Lease')}
  >
    For Lease
  </button>
</div>
        {/* Search Field */}
        <div className="mb-4 flex flex-row items-center justify-between">
       
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            className="w-full p-2 border rounded focus:outline-none focus:shadow-outline"
            placeholder="Enter Keyword..."
          />
             {/* Search Button */}
             <button
            className="bg-black text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
  
        {/* Selection Boxes */}

  
        {/* Search Box with Filters */}
        <div className="flex flex-wrap space-x-4 mb-4">
          {/* Bedrooms Filter */}
          <label>
            Bedrooms:
            <select
              value={selectedBedrooms}
              onChange={handleBedroomsChange}
              className="border p-2 rounded focus:outline-none focus:shadow-outline"
            >
              <option value="">Any</option>
              {bedroomsOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
  
          {/* Country Filter */}
          <label>
            Country:
            <select
              value={selectedCountry}
              onChange={handleCountryChange}
              className="border p-2 rounded focus:outline-none focus:shadow-outline"
            >
              <option value="">Any</option>
              {countryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
  
          {/* State Filter */}
          <label>
            State:
            <select
              value={selectedState}
              onChange={handleStateChange}
              className="border p-2 rounded focus:outline-none focus:shadow-outline"
            >
              <option value="">Any</option>
              {stateOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
  
          {/* City Filter */}
          <label>
            City:
            <select
              value={selectedCity}
              onChange={handleCityChange}
              className="border p-2 rounded focus:outline-none focus:shadow-outline"
            >
              <option value="">Any</option>
              {cityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
  
          {/* Min Price Filter */}
          <label>
            Min Price ({currencySign}):
            <input
              type="number"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="border p-2 rounded focus:outline-none focus:shadow-outline"
            />
          </label>
  
          {/* Max Price Filter */}
          <label>
            Max Price ({currencySign}):
            <input
              type="number"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="border p-2 rounded focus:outline-none focus:shadow-outline"
            />
          </label>
  
       
        </div>
      </div>
      
    );
}

export default SearchBox