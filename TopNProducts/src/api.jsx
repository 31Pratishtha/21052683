import axios from "axios";

const URL = "http://20.244.56.144/test";

//For Initial Registration
export const registerCompany = async (
  companyName,
  ownerName,
  rollNo,
  ownerEmail,
  accessCode
) => {
  try {
    const response = await axios.post(`${URL}/register`, {
      companyName,
      ownerName,
      rollNo,
      ownerEmail,
      accessCode,
    });
    return response.data;
  } catch (error) {
    throw new Error("Registration failed");
  }
};

//For Company Authorization
export const authCompany = async (
  companyName,
  clientID,
  clientSecret,
  ownerName,
  ownerEmail,
  rollNo
) => {
  try {
    const response = await axios.post(`${URL}/auth`, {
      companyName,
      clientID,
      clientSecret,
      ownerName,
      ownerEmail,
      rollNo,
    });
    return response.data;
  } catch (error) {
    throw new Error("Registration failed");
  }
};

export const fetchProducts = async (
  companyName,
  category,
  top,
  minPrice,
  maxPrice,
  accessToken
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/companies/:${companyName}/categories/:${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
      {
        headers: {
          Authorization: `${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch top products");
  }
};
