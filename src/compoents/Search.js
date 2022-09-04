import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import UserList from "./UserList";
import Pagination from "./Pagination";

const Search = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(7);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/search/users?q=location:madagascar")
      .then((response) => response.data.items)
      .then((data) => {
        //   data.map((val) =>
        //   axios
        //   .get(val.url)
        //   .then((res) => data.push(res.data.name) )
        //   );
        // console.log(data);
        setUsers(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/")
      .then((response) => response.data.data)
      .then((data) => setCountries(data));
  }, []);

  const handleOnchange = (event) => {
    setCountry(event.target.value);
  };
  const show = () => {
    console.log(country);
  };

  //get current user
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  
  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container text-center">
      <div className="row justify-content-md-center">
        <div className="row search mb-4">
          <div className="col col-lg-4">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="entrer un utilisateur"
              />
            </div>
          </div>
          <div className="col col-lg-4">
            <select
              className="form-select"
              key={country}
              value={country}
              onChange={handleOnchange}
            >
              <option value="">Choisir pays...</option>
              {countries.map((val) => (
                <option value={val.country} key={val.cities[1]}>
                  {val.country}
                </option>
              ))}
            </select>
          </div>
          <div className="col col-lg-2">
            <button className="btn btn-success button" onClick={show}>
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <UserList
          users={currentUsers}
          // avatar_url={val.avatar_url}
          // id={val.id}
          // name={val.name}
          // login={val.login}
        />
      </div>

      <div className="row mt-2">
        <div className="col mr-auto ml-auto">
          <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
        </div>
      </div>
    </div>
  );
};

export default Search;
