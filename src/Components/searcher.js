import React, { useState } from 'react';
import '../Styling/searcher.css';
import cities, { states } from "../Components/cities";
import Products from "./Products";
import "../Styling/Searchfail.css";

function optionbuilder(x) {
  return <option key={x} value={x}>{x}</option>;
}

function Searcher() {
  const [stateval, setStateVal] = useState('');
  const [cityval, setCityVal] = useState('');
  const [showProducts, setShowProducts] = useState(false);

  function usestateChange(e) {
    const selectedState = e.target.value;
    setStateVal(selectedState);
    const selectedCities = cities[selectedState] || [];
    setCityVal('');
    var cityDropdown = document.getElementById('city');
    cityDropdown.innerHTML = '';
    selectedCities.forEach(function(city) {
      var option = document.createElement('option');
      option.value = city;
      option.text = city;
      cityDropdown.add(option);
    });
  }

  function handleSubmit() {
    // Check if state is Andhra Pradesh and city is Anantapur
    if (stateval === 'Andhra Pradesh' && cityval === 'Anantapur') {
      setShowProducts(true);
      console.log("success"); // Display the Products component;
    } else {
      setShowProducts(false); // Hide the Products component
      console.log(stateval);
      console.log(cityval);
    }
  }

  return (
    <div>
      <div className="boxes-container">
        <div className="box">
          <label htmlFor="state">Select State</label>
          <select id='state' value={stateval} onChange={usestateChange}>
             {states.map(optionbuilder)}
          </select>
        </div>
        <div className="box">
          <label htmlFor="city">Select City:</label>
          <select id="city" value={cityval} onChange={(e) => setCityVal(e.target.value)}>
          </select>
        </div>
      </div>
      <div className="search-box">
        <button id="searchButton" onClick={handleSubmit}>Search</button>
      </div>
      {showProducts ? (
        <Products /> // Render Products component if state is Andhra Pradesh and city is Anantapur
      ) : (
        <div className="noServices" ><p>Currently no services available in this city.</p></div> // Display message if condition not met
      )}
    </div>
  );
}

export default Searcher;
