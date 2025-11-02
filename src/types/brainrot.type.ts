export interface BrainRotType{
  id: number;
  nombre: string;
  descripcion: string;
  origen: string;
  popularidad: Popularidad;
  imagen: string;
  memes: string[];
}

export interface StatsBrainRotType{
  totalPersonajes: string;
  origenes: string[];
  nivelesPopularidad: string[];
  totalMemes: number;
}

export type Popularidad = "Muy alta" | "Alta" | "Media-Alta" | "Media";
