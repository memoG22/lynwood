import axios from "axios";

const getSocialMedia = (onSuccess, onError) => {
  const config = {
    method: "GET",
    url:
      "https://api.instagram.com/v1/users/self/media/recent/?access_token=7588672827.5e6f522.4e993c4514e548af9dc753e0c06f422f",
    xhrFields: {
      withCredentials: true
    },
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onSuccess)
    .catch(onError);
};

export default { getSocialMedia };
