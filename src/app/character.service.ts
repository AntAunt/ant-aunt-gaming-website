import { Injectable } from '@angular/core';
import { Character } from './character';
import data from '../assets/characters.json';

@Injectable({
    providedIn: 'root'
})

export class CharacterService {

    readonly characterArray: Array<Character> = data as Character[];

    getAllCharacters(): Character[] {
        return this.characterArray
    }

    getCharacterById(id: number) : Character | undefined {
        return this.characterArray.find(character => character.id === id)
    }

}