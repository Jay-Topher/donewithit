import client from "./client";

const endpoint = "/auth";
const registrationEndpoint = "/users";
const login = (email, password) => client.post(endpoint, { email, password });

const register = (userInfo) => client.post(registrationEndpoint, userInfo);

export default {
  login,
  register,
};
