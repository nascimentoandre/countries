import React, {useEffect, useState, createContext, useContext} from "react";

// in this context we create a hook to import the data within several child elements

const DataContext = createContext();

export default function DataProvider({children}) {
    // def state variables
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    // fetch data from API
    const fetchItems = async () => {
        let res = await fetch("https://restcountries.eu/rest/v2/all");
        res
        .json()
        .then(res => setCountries(res))
        .then(() => setLoading(false));
    }

    useEffect(() => {
        fetchItems();
    }, [])

    return (
        <DataContext.Provider value={{countries, loading}}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    const context = useContext(DataContext);
    if (!context) throw new Error("useData must be used within a DataProvider");
    const {countries, loading} = context;
    return {countries, loading};
}