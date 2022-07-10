const API = "http://localhost:3333";

const endpoint = (path: string): string => API + path;

const get = async (path: string): Promise<any> => {
  return fetch(endpoint(path)).then((res) => res.json());
};

const update = async (path: string, body: {}): Promise<any> => {
  return fetch(endpoint(path), {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
};

const remove = async (path: string): Promise<any> => {
  return fetch(endpoint(path), {
    method: "DELETE",
  });
};

export const getVehicles = async () => {
  return get("/vehicles");
};

export const updateVehicles = async (id: number, body: {}) => {
  return update(`/vehicles/${id}`, body);
};

export const deleteVehicles = async (id: number) => {
  return remove(`/vehicles/${id}`);
};
