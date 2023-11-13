import data from '../assets/creatures.json';

export interface Character {
    id: number;
    name: string;
    imageLink: string;
    isLocked: boolean;
}
