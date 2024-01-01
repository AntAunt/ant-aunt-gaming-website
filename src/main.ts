import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { AppComponent } from './app/app.component';
import { CustomReuseStrategy } from './app/reuse-strategy';

bootstrapApplication(AppComponent, 
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routeConfig),
      {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
    ]
  })
  .catch((err) => console.error(err));
