# PaceportFinal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2. 
1. Leaflet js to create map outline and used OpenStreetMap (http://www.openstreetmap.org/copyright) as tile to display map.
2. Bootstrap 4.0 to create styling.
3. world-capitals.geojson file used to create markers on the map.
4. https://www.trackcorona.live/api/countries/{country-code} API is used to get the country-code specific data for confirmed, recovered, deceased cases. Active cases are calculated using the response returned by the API.
5. Google chart's 3D Piechart is used to visualize the data for confirmed, recovered, deceased and active cases.


P.S added a video demo to the repo.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
