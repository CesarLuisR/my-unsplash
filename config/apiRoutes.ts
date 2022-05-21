const API = "https://my-unsplash-cesarluisrc.herokuapp.com/api/photos";

export const apiRoutes = {
  photo: {
    getAll: `${API}/get-photos`,
    add: `${API}/add-photo`,
    delete: (id: string) => `${API}/delete-photo/${id}`,
  },
};
