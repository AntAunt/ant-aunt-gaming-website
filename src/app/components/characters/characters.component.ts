import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from '../character/character.component';
import { Character } from '../../character';
import { CharacterService } from '../../character.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, CharacterComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
  characterArray: Character[] = [];
  characterService: CharacterService = inject(CharacterService);

  constructor() {
    this.characterArray = this.characterService.getAllCharacters();
  }
}
