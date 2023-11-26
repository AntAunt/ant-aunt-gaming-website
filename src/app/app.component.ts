import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './components/news/news.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreaturesComponent } from './components/creatures/creatures.component';
import { CreatureLoreComponent } from './components/creature-lore/creature-lore.component';
import { BlogComponent } from './components/blog/blog.component';
import { CharacterPageComponent } from './components/character-page/character-page.component';
import { CharacterComponent } from './components/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    RouterModule,
    HttpClientModule,
    NewsComponent,
    BlogComponent,
    CharactersComponent,
    CharacterPageComponent,
    CreaturesComponent,
    CreatureLoreComponent,
    BannerComponent,
    NavbarComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
