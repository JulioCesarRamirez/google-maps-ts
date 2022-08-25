export interface Mappable {
  getLocation: {
    lat: string;
    lng: string;
  };

  marketTitle(address: () => string): string;
}

export interface SearchOptions {
  input: HTMLInputElement;
  searchButton: HTMLButtonElement;
}
