import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CharacterService } from '../../character.service';
import { Character } from '../../character';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.css'
})
export class CharacterPageComponent{
  route: ActivatedRoute = inject(ActivatedRoute);
  characterService = inject(CharacterService);
  character: Character | undefined;
  summaryHtml : any;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
    ) {
    const name = String(this.route.snapshot.params['id'])
    this.character = this.characterService.getCharacterByName(name);
    if (this.character){
      this.summaryHtml = this.http.get(this.character.summaryHtmlLink, { responseType: 'text' }).subscribe(
        data => this.summaryHtml = data);
    }
  }
}
