import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const route = useRoute();
  const { id } = route.params;

  // console.log("the photos: ", result);

  console.log("the photos: ");
  // console.log(result.coordinates);

  //   console.log(result.photos);

  const getResult = async () => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <Text>Phone: {result.display_phone}</Text>
      <Text>Adress: {result.location.address1}</Text>
      <Text>Rating: {result.rating}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={(item) => {
          return <Image style={styles.photoStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  photoStyle: {
    width: 300,
    height: 200,
  },
});
