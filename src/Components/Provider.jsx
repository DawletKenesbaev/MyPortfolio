import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";
export const Context = createContext();

export const AppContext = (props) => {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");

    // useEffect(() => {
    //     fetchSelectedCategoryData(selectedCategory);
    // }, [selectedCategory]);

    // const fetchSelectedCategoryData = (query) => {
    //     fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
    //         console.log(contents);
    //         setSearchResults(contents);
    //     });
    // };

    return (
        <Context.Provider
            value={{
                searchResults,
                selectedCategory,
                setSelectedCategory,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
