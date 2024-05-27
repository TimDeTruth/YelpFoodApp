import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.searchBackground}>
      <Feather name="search" size={30} style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        autoCapitalize="none"
        autoCorrect={false}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBackground: {
    marginTop: 10,
    backgroundColor: "gray",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },

  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 5,
  },

  inputStyle: {
    flex: 1,
    fontSize: 18,

    // borderColor: "black",
    // borderWidth: 2,
  },
});
