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

export const ACCESS_TOKEN =
  "FeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTQ4OTU3LCJpYXQiOjE3MTUxNDg2NTcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjNiOTViNGE2LWIzN2EtNDkyMS1hODdhLWQzODg1ZmE4ZDhkMSIsInN1YiI6IjIxMDUyNjgzQGtpaXQuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjNiOTViNGE2LWIzN2EtNDkyMS1hODdhLWQzODg1ZmE4ZDhkMSIsImNsaWVudFNlY3JldCI6InJUTVlQUVZSaHdOR2x5RVAiLCJvd25lck5hbWUiOiJQcmF0aXNodGhhIiwib3duZXJFbWFpbCI6IjIxMDUyNjgzQGtpaXQuYWMuaW4iLCJyb2xsTm8iOiIyMTA1MjY4MyJ9.flFNuG94MgX-_S9N7uEq3amQo6F8MVAjHqRb-Ieqy-Q";

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
      `${BASE_URL}/companies/:${companyName}/categories/:${category}/products`,
      {
        params: {
          top: top,
          minPrice: minPrice,
          maxPrice: maxPrice,
        },
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
