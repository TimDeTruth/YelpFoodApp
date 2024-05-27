import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen({}) {
  const [term, setTerm] = useState("");
  const [serachApi, results, errorMessage] = useResults();

  // console.log(results);

  const filterResultsByPrice = (price) => {
    // price === '$' || "$$" || "$$$"

    return results.filter((results) => {
      return results.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => serachApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found: {results.length} {term}</Text> */}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title={"Cost Effective "}
        />

        <ResultsList
          results={filterResultsByPrice("$$")}
          title={"Bit Pricier"}
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title={"Big Spender"}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
