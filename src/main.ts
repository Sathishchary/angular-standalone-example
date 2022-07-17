import './polyfills';

import { enableProdMode, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { routes } from './app/app-routing';
import { HomeComponent } from './app/home/home.component';
import { ChildComponent } from './app/child/child.component';

const routes: Routes = [
  { path: '', redirectTo: 'first-component', pathMatch: 'full' },
  { path: 'first-component', component: HomeComponent },
  { path: 'second-component', component: ChildComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes),
      BrowserAnimationsModule,
      HttpClientModule
    ),
  ],
})
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
