import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.common["x-api-key"] = process.env.API_KEY;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

interface ISettings {
  limit?: number;
  page?: number;
  order?: string;
  breed_ids?: string[];
}
export const defaultParams: ISettings = {
    limit: 10,
    page: 0,
    order: 'DESC'
}

const get = async (path: string, params: ISettings = defaultParams) => {
  try {
    const response = await axios.get(path, {
        params: {...defaultParams, ...params, breed_ids: params.breed_ids?.join(",")}
    });
    return await response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export { get, ISettings };
