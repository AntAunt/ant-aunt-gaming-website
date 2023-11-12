import { Routes } from '@angular/router';
import { CreaturesComponent } from './creatures/creatures.component';
import { CreatureLoreComponent } from './creature-lore/creature-lore.component';
import { NewsComponent } from './news/news.component';
import { CharactersComponent } from './characters/characters.component';
import { LocationsComponent } from './locations/locations.component';
import { ItemsComponent } from './items/items.component';
import { AboutComponent } from './about/about.component';

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