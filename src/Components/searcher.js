import React, { useState } from 'react';
import './searcher.css';
import cities,{ states } from './cities';

function optionbuilder(x) {
  return <option value={x}>{x}</option>;
}

function Searcher() {
  const [stateval, setStateVal] = useState('');
  const [cityval, setCityVal] = useState('');

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
        <button id="searchButton">Search</button>
      </div>
    </div>
  );
}

export default Searcher;
