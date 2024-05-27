import axios from "axios";
const YELP_API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
});

// https://api.yelp.com/v3/businesses/{business_id_or_alias}
