export interface INamedAPIResource {
  name: string;
  url: string;
}

export interface INamedAPIResourceList<T = INamedAPIResource> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
