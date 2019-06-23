export interface INamedAPIResource<T = string> {
  name: T;
  url: string;
}

export interface IName {
  name: string;
  language: INamedAPIResource;
}

export interface INamedAPIResourceList<T = INamedAPIResource> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
