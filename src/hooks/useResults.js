import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const serachApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "vancouver",
        },
      });

      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    serachApi("pasta");
  }, []);

  return [serachApi, results, errorMessage];
};
