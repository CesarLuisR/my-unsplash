const baseApi = process.env.API || "http://localhost:5000/api/images";

export const apiRoutes = {
  image: {
    get: `${baseApi}/get-images`,
    add: `${baseApi}/add-image`,
    delete: (id: string) => `${baseApi}/delete-image/${id}`,
  },
};
