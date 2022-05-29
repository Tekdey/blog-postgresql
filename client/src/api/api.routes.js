import * as constants from "../constants/apiRoutes";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getAllPost = async () =>
  await api.get(constants.getAllPost).then((response) => response);

export const deletePost = async (id, refetch) => {
  await api.delete(constants.deletePost + id);
  refetch();
};

export const createPost = async (formData, refetch) => {
  await api.post(constants.createPost, formData);
  refetch();
};
