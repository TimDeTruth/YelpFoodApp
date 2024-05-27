import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ResultsDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: result.image_url,
        }}
      />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 8,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: "bold",
  },
});
