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
                                <option value={val.name.common} key={val.name.common} >{val.name.common}</option>
                            ))
                        }
                    </select>
            </div>
            <div className="col col-lg-2">
            <button className='btn btn-success button' onClick={show}>Save</button>
            </div>
        </div>
        </div>
        <div className='datas'>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
        </div>
    );
    }
  
 
export default Search