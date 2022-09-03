import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';



  
const Search = () => {

const [countries, setCountries] = useState([]);
const [country, setCountry] = useState('');



useEffect(() => {
    axios
        .get("https://restcountries.com/v3.1/all")
        .then((response) => response.data)
        .then((data) => setCountries(data));
}, [])



      const handleOnchange = (event) => {
        setCountry(event.target.value);
    }
    const show = () => {
        console.log(country);
    }

    return(
        <div class="container text-center">
  <div class="row justify-content-md-center">
  </div>
  <div class="row search">
    <div class="col col-lg-4">
      1 of 3
    </div>
    <div class="col col-lg-4">
    <select className='form-select' key={country} value={country} onChange={handleOnchange}>
                <option value="">Choisir pays...</option>
                {
                    countries.map((val) =>(
                        <option value={val.name.common} key={val.name.common} >{val.name.common}</option>
                    ))
                }
            </select>
    </div>
    <div class="col col-lg-2">
    <button className='btn btn-success button' onClick={show}>Save</button>
    </div>
  </div>
</div>
    );
    }
  
 
export default Search