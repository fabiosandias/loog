import instance from "services/Interceptores";

const post = async (url: string, data: object = {}, config: object = {}) =>
  instance.post(url, data, config);

const get = (url: string, data: object = {}) => instance.get(url, data);

const put = async (url: string, data: object = {}, config = {}) =>
  instance.put(url, data, config);

const patch = (url: string, data: object = {}, config = {}) =>
  instance.patch(url, data, config);

const deleteRequest = async (url: string, config = {}) =>
  instance.delete(url, config);

export const Source = {
  post,
  get,
  put,
  patch,
  deleteRequest,
  instance,
};
