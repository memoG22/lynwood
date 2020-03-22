import axios from "axios";

const adminLogIn = (payload, onSuccess, onError) => {
  const config = {
    method: "POST",
    url: "/api/login",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onSuccess)
    .catch(onError);
};

const currentUser = () => {
  const config = {
    method: "GET",
    url: "/api/current",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(response => {
      console.log(response);
    })
    .catch(() => {
      console.log("error");
    });
};

const logout = () => {
  const config = {
    method: "POST",
    url: "/api/logout",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(response => {
      console.log(response);
    })
    .catch(() => {
      console.log("error");
    });
};

export default { adminLogIn, currentUser, logout };
