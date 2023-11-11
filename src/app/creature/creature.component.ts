import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Creature } from '../creature';

@Component({
  selector: 'app-creature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './creature.component.html',
  styleUrl: './creature.component.css',
})

export class CreatureComponent {

  @Input() creature!: Creature;

}
