import { Injectable } from '@angular/core';
import { Creature } from './creature';
import data from '../assets/creatures.json';

@Injectable({
    providedIn: 'root'
})

export class CreatureService {

    readonly creatureArray: Array<Creature> = data as Creature[];

    getAllCreatures(): Creature[] {
        return this.creatureArray
    }

    getCreatureById(id: string) : Creature | undefined {
        return this.creatureArray.find(creature => creature.number === id)
    }

}