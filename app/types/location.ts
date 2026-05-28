export interface Location {
  id: number;
  Name: string;
  Address: string;
  Manager: string;
  Phone: string;
  Email: string;
  Distance?: string;
  Latitude: number;
  Longitude: number;
}

export interface MappedLocation {
  id: number;
  name: string;
  address: string;
  manager: string;
  phone: string;
  email: string;
  distance: string;
  lat: number;
  lng: number;
}

export interface NominatimResult {
  lat: string;
  lon: string;
}

export interface LocationResponse {
  data?: Location[];
}
