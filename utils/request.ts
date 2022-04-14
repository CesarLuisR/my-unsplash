export const request = async <ResponseType>(url: string, config?: {}) => {
  return await fetch(url, config)
    .then((res) => res.json())
    .then((data) => data as ResponseType)
    .catch((err) => err);
};
