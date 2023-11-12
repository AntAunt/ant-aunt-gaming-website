import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Creature } from '../creature';
import { CreatureService } from '../creature.service'; 

@Component({
  selector: 'app-creature-lore',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './creature-lore.component.html',
  styleUrl: './creature-lore.component.css'
})
export class CreatureLoreComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  creatureService = inject(CreatureService);
  creature: Creature | undefined;
  constructor() {
    const creatureNumber = String(this.route.snapshot.params['id'])
    this.creature = this.creatureService.getCreatureById(creatureNumber);
  }
}
