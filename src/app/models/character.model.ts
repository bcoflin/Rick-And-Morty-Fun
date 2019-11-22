import { Timestamp } from 'rxjs';

export interface Character {
createdAt: Timestamp<string>;
gender: string;
id: number;
location: rmLocation;
name: string;
origin: rmOrigin;
species: string;
status: string
type: string | undefined;
updatedAt: Timestamp<string>;
url: string
}

export interface rmLocation extends Character {
name: string;
url: string
}
export interface rmOrigin extends Character {
name: string;
url: string;
}
