import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../contexts/Data";

// def functions to display info properly
export function getCurrencies(country) {
    let currencies = "";
    let currList = country.currencies;
    for (let i = 0; i < currList.length; i++) {
        currencies += currList[i].name + ", ";
    }
    return currencies.slice(0, currencies.length - 2);
}

export function getLanguages(country) {
    let languages = "";
    let langList = country.languages;
    for (let i = 0; i < langList.length; i++) {
        languages += langList[i].name + ", ";
    }
    return languages.slice(0, languages.length - 2);
}

export default function BorderButtons(country, bg, txt) {
    const { countries } = useData();

    return (
        <div>
            {country.borders.map(border => {
                let c = countries.filter(e => {
                    return e.alpha3Code === border;
                });
                return <Link to={`/details/${border}`} key={border}>
                  <button className="border-btn" style={{background: bg, color: txt}}>
                    {c[0].name}
                  </button>
                </Link>
            })}
        </div>
    )
}