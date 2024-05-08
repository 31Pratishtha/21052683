import axios from "axios";

const URL = "http://20.244.56.144/test";

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
