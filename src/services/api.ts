import type { ApiResponse } from "../types/api.types";
import type { BrainRotType, StatsBrainRotType } from "../types/brainrot.type";

const urlApi = "https://tralalero-api.vercel.app/api/";

function validateResponse<T>(response: Response){
  if(!response.ok){
    throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
  }
  return response.json() as T;
}


export async function getBrainRots(){
  const url = `${urlApi}personajes`;
  return  fetch(url)
  .then((response) => validateResponse<ApiResponse<BrainRotType[]>>(response))
  .then(data=> data);
}

export async function getBrainRotsById(id: string){
  const url = `${urlApi}personajes/${id}`;
  return  fetch(url)
  .then((response) => validateResponse<ApiResponse<BrainRotType>>(response))
  .then(data=> data);
 
}

export async function getBrainRotsByName(brainrotName: string){
  const url = `${urlApi}personajes/search/${brainrotName}`;
  return fetch(url)
  .then((response) => validateResponse<ApiResponse<BrainRotType[]>>(response))
  .then(data=> data).catch(() => null);
}

export async function getBrainRotsByPopularity(level: string){
  const url = `${urlApi}personajes/popularidad/${level}`;
  return fetch(url)
  .then((response) => validateResponse<ApiResponse<BrainRotType[]>>(response))
  .then(data=> data);
}
export async function getStats(){
  const url = `${urlApi}stats`;
  return fetch(url)
  .then((response) => validateResponse<ApiResponse<StatsBrainRotType>>(response))
  .then(data=> data);
}