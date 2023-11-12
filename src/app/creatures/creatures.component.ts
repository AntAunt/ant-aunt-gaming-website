import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Creature } from '../creature'
import { CreatureComponent } from '../creature/creature.component';
import data from '../../assets/creatures.json';
import { CreatureService } from '../creature.service';

@Component({
    selector: 'app-creatures',
    standalone: true,
    templateUrl: './creatures.component.html',
    styleUrl: './creatures.component.css',
    imports: [CommonModule, CreatureComponent]
})
export class CreaturesComponent {
  creatureArray: Creature[] = [];
  creatureService: CreatureService = inject(CreatureService);

  constructor() {
    this.creatureArray = this.creatureService.getAllCreatures();
  }
}
