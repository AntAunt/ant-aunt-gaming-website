import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CreaturesComponent } from './creatures/creatures.component';
import { CreatureLoreComponent } from './creature-lore/creature-lore.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    RouterModule,
    NewsComponent,
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
