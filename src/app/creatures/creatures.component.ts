import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Creature } from '../creature'
import { CreatureComponent } from '../creature/creature.component'; 

@Component({
    selector: 'app-creatures',
    standalone: true,
    templateUrl: './creatures.component.html',
    styleUrl: './creatures.component.css',
    imports: [CommonModule, CreatureComponent]
})
export class CreaturesComponent {
  readonly baseUrl = "./assets/CreatureImages";

  creature: Creature = {
    id: 10,
    name: "Eggy",
    image: `${this.baseUrl}/0010.png`,
    description: "Hello!"
  }
}
