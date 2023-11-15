import { Routes } from '@angular/router';
import { CreaturesComponent } from './components/creatures/creatures.component';
import { CreatureLoreComponent } from './components/creature-lore/creature-lore.component';
import { NewsComponent } from './components/news/news.component';
import { CharactersComponent } from './components/characters/characters.component';
import { LocationsComponent } from './components/locations/locations.component';
import { ItemsComponent } from './components/items/items.component';
import { AboutComponent } from './components/about/about.component';

const routeConfig: Routes = [
    {
        path: '',
        component: NewsComponent,
        title: 'News page'
    },
    {
        path: 'characters',
        component: CharactersComponent,
        title: 'Characters page'
    },
    {
        path: 'creatures',
        component: CreaturesComponent,
        title: 'Creatures page'
    },
    {
        path: 'creatures/:id',
        component: CreatureLoreComponent,
        title: 'Creature details'
    },
    {
        path: 'locations',
        component: LocationsComponent,
        title: 'Locations page'
    },
    {
        path: 'items',
        component: ItemsComponent,
        title: 'Items page'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About page'
    }
  ];
  
  export default routeConfig;