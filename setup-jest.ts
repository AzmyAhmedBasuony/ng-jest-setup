// import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

// setupZoneTestEnv();
import { setupZonelessTestEnv } from 'jest-preset-angular/setup-env/zoneless';

setupZonelessTestEnv({
  errorOnUnknownElements: true,
  errorOnUnknownProperties: true,
});
