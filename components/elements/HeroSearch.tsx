'use client';

import { useState, useEffect } from 'react';
import MyDatePicker from './MyDatePicker';

interface Address {
  id: string;
  formatted: string;
  street: string;
  postcode: string;
  lat: number;
  lng: number;
}
interface Vehicle {
  id: string;
  title: string;
  seats: number;
  wheelchairAccessible: boolean;
  executive: boolean;
  saloon: boolean;
  luggageCapacity: number;
  image: string;
}
export default function HeroSearch() {
  const [pickupSearch, setPickupSearch] = useState('');
  const [dropoffSearch, setDropoffSearch] = useState('');
  const [selectedPickup, setSelectedPickup] = useState<Address | null>(null);
  const [selectedDropoff, setSelectedDropoff] = useState<Address | null>(null);
  const [pickupResults, setPickupResults] = useState<Address[]>([]);
  const [dropoffResults, setDropoffResults] = useState<Address[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<string>('');
  const [estimatedFare, setEstimatedFare] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [availableVehicles, setAvailableVehicles] = useState<Vehicle[]>([]);

  console.log('Selected Pickup:', selectedPickup);
console.log('Selected Dropoff:', selectedDropoff);
console.log('Selected Date:', selectedDate);
console.log('Selected Vehicle:', selectedVehicle);


  useEffect(() => {
    
    const fetchVehicleGroups = async () => {
      try {
        const response = await fetch('/api/config/vehiclemap', { method: 'GET' });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log('Fetched Vehicle Data:', data); // Debugging: Log the entire API response

        // Check if vehicle data exists at the correct path
        if (!data?.vehicles || !Array.isArray(data.vehicles)) {
          throw new Error('Vehicle list is missing or invalid format');
        }

        setAvailableVehicles(data.vehicles); // Update the state with the correct vehicle list
      } catch (error) {
        console.error('Error fetching vehicle groups:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch vehicle groups');
      }
    };

    fetchVehicleGroups();
  }, []);

  // Function to search addresses
  const searchAddresses = async (query: string, isPickup: boolean = true) => {
    if (query.length < 2) return;

    try {
      const response = await fetch(`/api/addresses/search?q=${query}`);
      if (!response.ok) throw new Error('Address search failed');

      const data = await response.json();
      if (!data.body || !data.body.addresses) throw new Error('No addresses found');

      const addresses = data.body.addresses.map((item: any) => ({
        id: item.id,
        formatted: `${item.building_number ? item.building_number + ' ' : ''}${item.street}, ${item.area}, ${item.postcode}`,
        street: item.street,
        postcode: item.postcode,
        lat: parseFloat(item.lat),
        lng: parseFloat(item.lng),
      }));

      isPickup ? setPickupResults(addresses) : setDropoffResults(addresses);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to search addresses');
      console.error('Error searching addresses:', error);
    }
  };

  // Address search debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (pickupSearch) searchAddresses(pickupSearch, true);
    }, 300);
    return () => clearTimeout(timer);
  }, [pickupSearch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (dropoffSearch) searchAddresses(dropoffSearch, false);
    }, 300);
    return () => clearTimeout(timer);
  }, [dropoffSearch]);

  const calculateFare = async () => {
    console.log("Selected Date Before Validation:", selectedDate);
  
    if (!selectedPickup || !selectedDropoff || !selectedDate || !selectedVehicle) {
      console.error('Validation failed:', {
        selectedPickup,
        selectedDropoff,
        selectedDate,
        selectedVehicle,  
      });
  
      setError('⚠️ Please select a pickup, dropoff, date, and vehicle type before calculating the fare.');
      return;
    }
  
    try {
      setLoading(true);
      setError(null);
  
      const formattedDate = new Date(selectedDate).toISOString();
      console.log("Formatted Date for API:", formattedDate); 
  
      const requestBody = {
        address_id: selectedPickup.id,
        destination_id: selectedDropoff.id,
        postcode: selectedPickup.postcode,
        destination_postcode: selectedDropoff.postcode,
        date: formattedDate,
        locations: [`${selectedPickup.lat},${selectedPickup.lng}`, `${selectedDropoff.lat},${selectedDropoff.lng}`],
        vehicle_group: selectedVehicle,
      };
  
      console.log("Fare Request Payload:", requestBody);
  
      const response = await fetch('/api/fares', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error Response:", errorData);
        throw new Error(errorData.message || 'Fare calculation failed');
      }
  
      const data = await response.json();
      console.log('Fare Response:', data);
      setEstimatedFare(data.fare);
    } catch (error) {
      setError(error instanceof Error ? `🚨 Error: ${error.message}` : '❌ Failed to calculate fare');
      console.error('Error calculating fare:', error);
    } finally {
      setLoading(false);
    }
  };
  
  
  

  return (
    <div className="box-bottom-search background-card">
      <div className="item-search">
        <label className="text-sm-bold neutral-500">Pick Up Location</label>
        <input
          type="text"
          value={pickupSearch}
          onChange={(e) => setPickupSearch(e.target.value)}
          placeholder="Search pickup location..."
          className="form-control"
        />
        {pickupResults.length > 0 && (
          <div className="dropdown-menu show">
            {pickupResults.map((address) => (
              <div
                key={address.id}
                className="dropdown-item cursor-pointer"
                onClick={() => {
                  setSelectedPickup(address);
                  setPickupSearch(address.formatted);
                  setPickupResults([]);
                }}
              >
                {address.formatted}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="item-search item-search-2">
        <label className="text-sm-bold neutral-500">Drop Off Location</label>
        <input
          type="text"
          value={dropoffSearch}
          onChange={(e) => setDropoffSearch(e.target.value)}
          placeholder="Search dropoff location..."
          className="form-control"
        />
        {dropoffResults.length > 0 && (
          <div className="dropdown-menu show">
            {dropoffResults.map((address) => (
              <div
                key={address.id}
                className="dropdown-item cursor-pointer"
                onClick={() => {
                  setSelectedDropoff(address);
                  setDropoffSearch(address.formatted);
                  setDropoffResults([]);
                }}
              >
                {address.formatted}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
  <label className="text-sm-bold neutral-500">Pick Up Date & Time</label>
  <div className="relative w-full">
      <MyDatePicker onChange={(date) => setSelectedDate(date)} />
  </div>
</div>


      {/* Vehicle Selection */}
      <div className="item-search">
        <label className="text-sm-bold neutral-500">Select Vehicle</label>
        <select
  className="form-control"
  value={selectedVehicle}
  onChange={(e) => {
    console.log("Vehicle Selected:", e.target.value); // ✅ Debug selected vehicle
    setSelectedVehicle(e.target.value);
  }}
>
  <option value="">Select a Vehicle</option>
  {availableVehicles.map((vehicle) => (
    <option key={vehicle.id} value={vehicle.id}>
      {vehicle.title}
    </option>
  ))}
</select>

      </div>

            {/* Calculate Fare Button */}
              <div className="item-search">
              <button className="btn btn-primary w-100" onClick={calculateFare} disabled={loading}>
                {loading ? 'Calculating...' : 'Calculate Fare'}
              </button>
              </div>

            {/* Display Errors Below the Button */}
            {error && (
              <div className="alert alert-danger mt-2 text-center">
                {error}
              </div>
            )}

            {/* Display Fare Below the Error Message */}
            {estimatedFare !== null && estimatedFare !== undefined && !isNaN(estimatedFare) && (
              <div className="alert alert-success mt-2 text-center">
                Estimated Fare: <strong>£{Number(estimatedFare).toFixed(2)}</strong>
              </div>
            )}


    </div>
    
  );
}
