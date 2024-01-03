import { Injectable } from '@angular/core';
import { Creature } from './creature';
import data from '../assets/creatures.json';

@Injectable({
    providedIn: 'root'
})

export class CreatureService {

    readonly creatureArray: Array<Creature> = data as Creature[];

    constructor() {
        this.creatureArray = this.creatureArray.map(creature => {
            if (!creature.name) creature.name = "Unknown";
            if (!creature.description) creature.description = "Research pending";
            return creature;
        }).sort((n1, n2) => n1.number.localeCompare(n2.number));
    }

    getCreatureById(id: string) : Creature {
        var creature = this.creatureArray.find(creature => creature.number === id);
        if (!creature) throw new Error("No creature found with id: " + id);
        return creature;
    }

    getAllCreatures(): Creature[] {
        return this.creatureArray
    }

    getPreviousCreature(id: string) : Creature | undefined {
        var creature = this.creatureArray.find(creature => creature.number === id);
        if (!creature) return;
        var index = this.creatureArray.indexOf(creature);
        if (index == 0) return;
        return this.creatureArray[index - 1];
    }

    getNextCreature(id: string) : Creature | undefined { 
        var creature = this.creatureArray.find(creature => creature.number === id);
        if (!creature) return;
        var index = this.creatureArray.indexOf(creature);
        if (index == this.creatureArray.length - 1) return;
        return this.creatureArray[index + 1];
    }

    getCreatureFamily(id: string) : Creature[] {
        var creature = this.creatureArray.find(creature => creature.number === id);
        if (!creature) return [];
        var family = this.creatureArray.filter(other => creature?.family === other.family);
        if (!family) return [];
        return family;
    }

    getPreviousEvolution(id: string) : Creature | undefined {
        var creature = this.creatureArray.find(creature => creature.number === id);
        if (!creature) return;
        var family = this.getCreatureFamily(creature.number);
        var previousEvo = family.find(other => other.evolvesInto.includes(id));
        if (!previousEvo) return;
        return previousEvo;
    }

    getNextEvolutions(id: string) : Creature[] {
        var creature = this.creatureArray.find(creature => creature.number === id);
        if (!creature) return [];
        var family = this.getCreatureFamily(creature.number);
        var returnArray = family.filter(other => creature?.evolvesInto.includes(other.number));
        return returnArray;
    }

    getRelatedCreatures(id: string) : Creature[] {
        var creature = this.creatureArray.find(creature => creature.number === id);
        if (!creature) return [];
        var family = this.getCreatureFamily(creature.number);
        var returnArray = family.filter(other => 
            other.number !== creature?.number &&
            !other.evolvesInto.includes(id) &&
            !creature?.evolvesInto.includes(other.number)
            );
        return returnArray;
    }

}