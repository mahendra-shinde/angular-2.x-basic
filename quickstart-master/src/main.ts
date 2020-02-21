//import { class, interface } from 'module-name'
// in typescript a "module" is TS file !!!!
/// IMPORT a third-party module (begins with '@')
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// IMPORT a user-defined module (begins with ' ./' )
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
