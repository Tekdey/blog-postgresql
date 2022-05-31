import * as constants from "../constants/apiRoutes";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getAllPost = async () =>
  await api.get(constants.getAllPost).then((response) => response);

export const getPostByAuthor = async (author) =>
  await api.get("/posts/?author=" + author).then((response) => response);

export const getPostById = async (id) =>
  await api.get("/posts/?id=" + id).then((response) => response);

export const deletePost = async (id, refetch) => {
  await api.delete(constants.deletePost + id);
  refetch();
};
export const createPost = async (formData, refetch) => {
  await api.post(constants.createPost, formData);
  refetch();
};
export const updatePost = async (id, form) =>
  await api.put(constants.updatePost + id, form).then((res) => res.data);
