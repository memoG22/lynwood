import axios from "axios";

const jobsGetAll = (pageIndex, pageSize, onSuccess, onError) => {
  const config = {
    method: "GET",
    url: "/api/getall/" + pageIndex + "/" + pageSize,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onSuccess)
    .catch(onError);
};

const addJob = (payload, onSuccess, onError) => {
  const config = {
    url: "/api/postjob",
    method: "POST",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onSuccess)
    .catch(onError);
};

const getJobById = (payload, onSuccess, onError) => {
  const config = {
    url: "/api/getjobbyid/" + payload,
    method: "GET",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onSuccess)
    .catch(onError);
};

const editJob = (payload, onSuccess, onError) => {
  const config = {
    url: "/api/editjob/" + payload.Id,
    method: "PUT",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onSuccess)
    .catch(onError);
};
const deleteJob = (payload, onSuccess, onError) => {
  const config = {
    url: "/api/delete/" + payload,
    method: "DELETE",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onSuccess)
    .catch(onError);
};
export default { jobsGetAll, addJob, getJobById, editJob, deleteJob };
