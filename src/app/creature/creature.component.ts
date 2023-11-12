import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Creature } from '../creature';

@Component({
  selector: 'app-creature',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './creature.component.html',
  styleUrl: './creature.component.css',
})

export class CreatureComponent {

  @Input() creature!: Creature;

}
