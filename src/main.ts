import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';

// Point d'entrée de l'application Angular.
bootstrapApplication(App).catch((error) => console.error(error));
