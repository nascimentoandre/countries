import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../contexts/Data";
import { useTheme } from "../contexts/Themes";
import BorderButtons, { getCurrencies, getLanguages } from "./DisplayInfo";

export default function Details({ match }) {
    // load data and themes from contexts
    const { countries, loading } = useData();
    const { theme } = useTheme();

    let country = countries.filter(c => {
        return c.alpha3Code === match.params.country;
    });
    
    // destructuring
    country = country[0];

    return (
        <div>
            {loading ?
            (<p>...loading</p>) :
            (<div className="details-container" style={{background: theme.colors.background}}>
                <div>
                  <Link to={"/"}>
                    <button className="back-btn" style={{background: theme.colors.elements, color: theme.colors.text}}><i className="fas fa-arrow-left" /> Back</button>
                  </Link>
                </div>
                <div className="details-main-content">
                    <div>
                      <img className="details-flag" src={country.flag} alt={country.alpha3} />
                    </div>
                    <div className="details-info" style={{color: theme.colors.text}}>
                      <h2>{country.name}</h2>
                      <div className="details-main-info">
                        <div>
                          <p><span>Native Name:</span> {country.nativeName}</p>
                          <p><span>Population:</span> {country.population.toLocaleString()}</p>
                          <p><span>Region:</span> {country.region}</p>
                          <p><span>Sub Region:</span> {country.subregion}</p>
                          <p><span>Capital:</span> {country.capital}</p>
                        </div>
                        <div>
                        <p><span>Top Level Domain:</span> {country.topLevelDomain[0]}</p>
                        <p><span>Currencies: </span> {getCurrencies(country)}</p>
                        <p><span>Languages:</span> {getLanguages(country)}</p>
                        </div>
                      </div>
                      <div className="details-borders">
                          <span>Border Countries: </span>
                          {BorderButtons(country, theme.colors.background, theme.colors.text)}
                      </div>
                    </div>
                </div>
            </div>)}
        </div>
    );
}