const API = process.env.API || "http://localhost:5000/api/photos";

console.log(API);

export const apiRoutes = {
  photo: {
    getAll: `${API}/get-photos`,
    add: `${API}/add-photo`,
    delete: (id: string) => `${API}/delete-photo/${id}`,
  },
};
