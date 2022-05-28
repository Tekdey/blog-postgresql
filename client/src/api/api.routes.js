import * as constants from "../constants/apiRoutes";

export const getAllPost = async () => {
  const data = await fetch(constants.getAllPost, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
  return data;
};
export const deletePost = async (id, refetch) => {
  await fetch(constants.deletePost + id, {
    method: "DELETE",
  });
  refetch();
};
