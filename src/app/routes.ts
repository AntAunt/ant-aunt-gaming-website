import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { CreaturesComponent } from './components/creatures/creatures.component';
import { CreatureLoreComponent } from './components/creature-lore/creature-lore.component';
import { NewsComponent } from './components/news/news.component';
import { CharactersComponent } from './components/characters/characters.component';
import { LocationsComponent } from './components/locations/locations.component';
import { ItemsComponent } from './components/items/items.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { CreatureService } from './creature.service';
import { BlogService } from './blog.service';
import { CharacterPageComponent } from './components/character-page/character-page.component';
import { CharacterService } from './character.service';

export const customBlogTitleResolver: ResolveFn<string> = 
    (route: ActivatedRouteSnapshot) => {
    return inject(BlogService).getBlogById( + route.paramMap.get('id')!)?.title ?? 'Unknown Blog';
};

export const CustomCreatureTitleResolver: ResolveFn<string> = 
    (route: ActivatedRouteSnapshot) => {
    const creature = inject(CreatureService).getCreatureById(route.paramMap.get('id')!);
    return creature ? creature.number + " - " + creature.name : 'Unknown Creature';
};

export const customCharacterTitleResolver: ResolveFn<string> = 
    (route: ActivatedRouteSnapshot) => {
    return inject(CharacterService).getCharacterByName(route.paramMap.get('id')!)?.name ?? 'Unknown Character';
};

const routeConfig: Routes = [
    {
        path: '',
        component: NewsComponent,
        title: 'Home of Ant Aunt Gamer'
    },
    {
        path: 'news/:id',
        component: BlogComponent,
        title: customBlogTitleResolver
    },
    {
        path: 'characters',
        component: CharactersComponent,
        title: 'Characters of Ant Aunt Gamer'
    },
    {
        path: 'characters/:id',
        component: CharacterPageComponent,
        title: customCharacterTitleResolver
    },
    {
        path: 'creatures',
        component: CreaturesComponent,
        title: 'Creatures of Ant Aunt Gamer'
    },
    {
        path: 'creatures/:id',
        component: CreatureLoreComponent,
        title: CustomCreatureTitleResolver
    },
    {
        path: 'locations',
        component: LocationsComponent,
        title: 'Locations of Ant Aunt Gamer'
    },
    {
        path: 'items',
        component: ItemsComponent,
        title: 'Items of Ant Aunt Gamer'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Ant Aunt Gaming'
    }
  ];
  NgModule({
    imports: [RouterModule.forRoot(routeConfig)],
    exports: [RouterModule]
  })
  
  export default routeConfig;