// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'FB_API_KEY',
    authDomain: 'FB_AUTH_DOMAIN',
    databaseURL: 'FB_DATABASE_URL',
    projectId: 'FB_PROJECT_ID',
    storageBucket: 'FB_STORAGE_BUCKET',
    messagingSenderId: 'FB_MESSAGING_SENDER_ID',
    appId: 'FB_APP_ID',
    measurementId: 'FB_MEASUREMENT_ID'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
