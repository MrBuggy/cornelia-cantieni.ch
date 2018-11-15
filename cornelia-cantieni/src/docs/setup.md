# Setup

## Clone repository

Clone the [project repository](https://github.com/MrBuggy/cornelia-cantieni.ch) to your local machine.

## Install node

Before using, you need of course [node](https://nodejs.org/) installed.

## Run

Change directory to `cornelia-cantieni`:

```
npm install
```

## Develompent server

For a dev server run:

```
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/) or run `ng serve` with the flag `--open` to open automatically a new tab in your browser:

```
ng serve --open
```

The app will automatically reload if you change any of the source files.

## Components

To generate a new component run:

```
ng generate component component-name
```

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|` module. For further information about `code scaffolding` check out [./code-scaffolding.md](./code-scaffolding.md)

## Build

To build the project run:

```
ng build
```

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build:

```
ng build --prod
```

## Running unit tests

To execute the unit tests via [Karma](https://karma-runner.github.io) run:

```
ng test
```

## Running end-to-end tests

To execute the end-to-end tests via [Protractor](http://www.protractortest.org/) run:

```
ng e2e
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
