import { get, ISettings } from "Services/request";
import { Cat, Breed } from "Models/Cat";

export const getCats = (params: ISettings): Promise<Cat[]> => {
//   return get(`/images/search?limit=10`);
   return getImages(params)
};

export const getCat = (id: string): Promise<Cat> => {
  return get(`/images/${id}`);
};

export const getBreeds = (params: ISettings): Promise<Breed[]> => {
  return get(`/breeds`, params);
};

export const getCatsByBreed = (
  id: string,
  params: ISettings
): Promise<Cat[]> => {
   const newParams: ISettings = {
    ...params,
    breed_ids: [id]
   }
   return getImages(newParams)
};

const getImages = (params: ISettings): Promise<Cat[]> => {
  return get(`/images/search`, params);
};
