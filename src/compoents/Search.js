import React, { useState, useEffect, Children } from 'react';
import Select from 'react-select';
import axios from 'axios';
import UserList from './UserList';


  
const Search = () => {

const [countries, setCountries] = useState([]);
const [country, setCountry] = useState('');



useEffect(() => {
    axios
        .get("https://countriesnow.space/api/v0.1/countries/")
        .then((response) => response.data.data)
        .then((data) => setCountries(data));
}, [])



      const handleOnchange = (event) => {
        setCountry(event.target.value);
    }
    const show = () => {
        console.log(country);
    }

    return(
        <div className="container text-center">
        <div className="row justify-content-md-center">
        <div className="row search">
            <div className="col col-lg-4">
            1 of 3
            </div>
            <div className="col col-lg-4">
            <select className='form-select' key={country} value={country} onChange={handleOnchange}>
                        <option value="">Choisir pays...</option>
                        {
                            countries.map((val) =>(
                                <option value={val.country} key={val.country} >{val.country}</option>
                            ))
                        }
                    </select>
            </div>
            <div className="col col-lg-2">
            <button className='btn btn-success button' onClick={show}>Search</button>
            </div>
        </div>
        </div>
        <UserList/>
        </div>
    );
    }
  
 
export default Search