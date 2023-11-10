import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { CharactersComponent } from './characters/characters.component';
import { CreaturesComponent } from './creatures/creatures.component';
import { LocationsComponent } from './locations/locations.component';
import { ItemsComponent } from './items/items.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'news', component: NewsComponent },
    { path: 'characters', component: CharactersComponent },
    { path: 'creatures', component: CreaturesComponent },
    { path: 'locations', component: LocationsComponent },
    { path: 'items', component: ItemsComponent }
];
