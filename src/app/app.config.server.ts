// src/app/app.config.server.ts
import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config'; // your browser config (routes, http, etc.)

export const config: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    ...appConfig.providers, // reuse your browser providers if you split them
  ],
};

