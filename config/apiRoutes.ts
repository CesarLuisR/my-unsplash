const baseApi = process.env.API || "http://localhost:5000/api/photos";

export const apiRoutes = {
  photo: {
    getAll: `${baseApi}/get-photos`,
    add: `${baseApi}/add-photo`,
    delete: (id: string) => `${baseApi}/delete-photo/${id}`,
  },
};
