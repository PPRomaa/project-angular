export interface IEpisode{
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters:string[];
  url: string;
  created: string;
}

export interface Info{
  count:number;
  next:string;
  pages:number;
  prev:null;
}
export interface IData{
  info:Info;
  results:IEpisode[];
}
