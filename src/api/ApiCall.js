import axios from "./axios";
import { apiEndPoints } from "./endpoints";
// import { apiEndPoints } from "../config/config";

const productlists = async () => {
  try {
    return axios.get(apiEndPoints.productList).then((response) => {
      if (response) {
        return response;
      } else {
        return [];
      }
    });
  } catch (error) {}
};

export { productlists };
