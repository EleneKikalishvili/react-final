import axios from "axios";

axios.defaults.baseURL = "https://api.thecatapi.com/v1/";
const token = "fa57b4fe-e907-413b-843a-3f0045cc29a4";

export const getBreeds = async () => {
  try {
    const response = await axios.get("breeds", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getDetailedInfo = async (id) => {
  try {
    const response = await axios.get(`images/search?breed_id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getSearchedImages = async (limit, number) => {
  try {
    const response = await axios.get(
      `images/search?limit=${limit}&page=${number}&order=Desc`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
