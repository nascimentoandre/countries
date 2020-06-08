import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useData } from "../contexts/Data";
import { useTheme } from "../contexts/Themes";

export default function Home() {
    // load data from useData hook
    const {countries, loading} = useData();

    // load themes from useTheme hook
    const { theme } = useTheme();

    // def state variables
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState(true);
    
    // allows to search a country
    const filteredCountries = countries.filter(country => {
        return country.name.toLowerCase().includes(search.toLowerCase());
      });

    const handleFilter = () => {
      setFilter(!filter);
      if (filter) {
        document.querySelector(".region-links").style.display = "block";
      }
      else {
        document.querySelector(".region-links").style.display = "none";
      }
    }

    return (
        <div>
            {loading ? 
            <p>...loading</p> : 
            (<div className="home" style={{background: theme.colors.background}}>
              <div className="filter-bars">
                <input type="text" placeholder="Search for a country..." onChange={e => setSearch(e.target.value)} style={{background: theme.colors.elements, color: theme.colors.text}}/>
                <button style={{background: theme.colors.elements, color: theme.colors.text}} onClick={handleFilter}>
                  <span style={{marginLeft: "-0.2rem"}}>Filter by Region</span><i className="fas fa-chevron-down"></i>
                </button>
                <div className="region-links" style={{background: theme.colors.elements}}>
                  <ul>
                    <li><Link to={"/region/Africa"} style={{textDecoration: "none"}}><span style={{color: theme.colors.text}}>Africa</span></Link></li>
                    <li><Link to={"/region/Americas"} style={{textDecoration: "none"}}><span style={{color: theme.colors.text}}>America</span></Link></li>
                    <li><Link to={"/region/Asia"} style={{textDecoration: "none"}}><span style={{color: theme.colors.text}}>Asia</span></Link></li>
                    <li><Link to={"/region/Europe"} style={{textDecoration: "none"}}><span style={{color: theme.colors.text}}>Europe</span></Link></li>
                    <li><Link to={"/region/Oceania"} style={{textDecoration: "none"}}><span style={{color: theme.colors.text}}>Oceania</span></Link></li>
                  </ul>
                </div>
              </div>
              <div className="cards-container">
                {filteredCountries.map((country, index) => (
                  <div key={index} className="card" style={{background: theme.colors.elements}}>
                    <Link to={`/details/${country.alpha3Code}`}>
                      <img className="flag-img" src={country.flag} alt={country.name} />
                    </Link>
                    <div className="card-description" style={{color: theme.colors.text}}>
                      <h3>{country.name}</h3>
                      <p><span>Population: </span>{country.population.toLocaleString()}</p>
                      <p><span>Region: </span>{country.region}</p>
                      <p><span>Capital: </span>{country.capital}</p>
                   </div>
                 </div>
                ))}
              </div>
            </div>)}
        </div>
    );
}