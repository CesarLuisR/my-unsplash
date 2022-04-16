const baseApi = process.env.API || "http://localhost:5000/api/photos";

export const apiRoutes = {
  photo: {
    getAll: `${baseApi}/get-photos`,
    add: `${baseApi}/add-photos`,
    delete: (id: string) => `${baseApi}/delete-photos/${id}`,
  },
};
