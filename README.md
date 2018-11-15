# cornelia-cantieni.ch
Website Relaunch 2018 [cornelia-cantieni.ch](http://www.cornelia-cantieni.ch/#/home). This website was developed back in 2013/2014 and now a redesign is required.

## Install and setup

### Clone repository

Clone the [project repository](https://github.com/MrBuggy/cornelia-cantieni.ch) to your local machine.

### Install node

Before using, you need of course [node](https://nodejs.org/) installed.

### Run

Change directory to `cornelia-cantieni`:

```
npm install
```

### Develompent server

For a dev server run:

```
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/) or run `ng serve` with the flag `--open` to open automatically a new tab in your browser:

```
ng serve --open
```

The app will automatically reload if you change any of the source files.

### Build

To build the project run:

```
ng build
```

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build:

```
ng build --prod
```

### Running unit tests

To execute the unit tests via [Karma](https://karma-runner.github.io) run:

```
ng test
```

### Running end-to-end tests

To execute the end-to-end tests via [Protractor](http://www.protractortest.org/) run:

```
ng e2e
```

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Technology

- Angular (with CLI generator)
- HTML
- CSS/SCSS
- JavaScript/TypeScript

## Patterns

- [BEM Naming](http://getbem.com/naming/)
- [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)

## Browser and device support matrix

### Browser support level matrix

Support level matrix for based on [Browser support level matrix](https://medium.com/planet4/how-to-define-a-browser-support-level-matrix-54624d3b5250):

#### Grading description

| Grading | Description |
|:---|:---|
| A | Fully supported browser. All functional and visual bugs should be fixed. |
| B | Partially supported browser. Functionality needs to be tested and given but visual appearance can differ slightly |
| C | Rudimentary supported browser. Functionality should be ensured, although only core-features need to work. Visual bugs can appear. |
| D | Not supported browser. |

#### Browser grading matrix

| Browser | Grading |
|:---|:---|
| Google Chrome | A |
| Mozilla Firefox | A |
| Safari on iOS | A |
| Edge | B |
| Safari on OSX | B |
| Internet Explorer 11 | C |

### Device matrix

#### Supported devices

- iPhone 7 and newer
- Samsung Galaxy
- Tablets iOS and Android
- Windows laptops and desktop machines
- Macbook and iMac
