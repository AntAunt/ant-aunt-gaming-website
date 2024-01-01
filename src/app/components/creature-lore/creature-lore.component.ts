import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Creature } from '../../creature';
import { CreatureService } from '../../creature.service'; 
import { CreatureComponent } from '../creature/creature.component';

@Component({
  selector: 'app-creature-lore',
  standalone: true,
  imports: [CommonModule, CreatureComponent],
  templateUrl: './creature-lore.component.html',
  styleUrl: './creature-lore.component.css'
})
export class CreatureLoreComponent {
  id: any;

  route: ActivatedRoute = inject(ActivatedRoute);
  creatureService = inject(CreatureService);
  creature: Creature | undefined;
  creaturePrevious: Creature | undefined;
  creatureNext: Creature | undefined;
  creaturePreviousEvo: Creature | undefined;
  creatureNextEvo: Creature[] = [];
  creatureRelated: Creature[] = [];

  constructor(private router: Router) {
    const creatureNumber = String(this.route.snapshot.params['id'])
    this.creature = this.creatureService.getCreatureById(creatureNumber);

    this.creaturePrevious = this.creatureService.getPreviousCreature(creatureNumber);
    this.creatureNext = this.creatureService.getNextCreature(creatureNumber);
    this.creaturePreviousEvo = this.creatureService.getPreviousEvolution(creatureNumber);
    this.creatureNextEvo = this.creatureService.getNextEvolutions(creatureNumber)
    this.creatureRelated = this.creatureService.getRelatedCreatures(creatureNumber);
  }
}
