# Code convention

This document describes the general code conventions for `HTML`, `CSS/SCSS` and `JavaScript/TypeScript`.

## HTML

| Convention | Description |
|:---|:---|
| Filename convention | lowercase e.g. `navigation-list.html`  |
| Semantic markup | Use semantic markup for your elements. [More infos and examples](https://html.com/semantic-markup/) |
| Use classes | Use always classes for elements based on [BEM Naming](http://getbem.com/naming/). If class has to be triggered by `JavaScript` use prefix `js-` e.g. `js-button` |
| Basic Accessibility | Write accessible code. [Good basics for accessible markup](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML) |
| Don't repeat yourself | Reuse code and use templating with Angular e.g. for lists |
| lowercase | Write always in lowercase |

## CSS/SCSS

#### Filename convention

Lowercase e.g. `navigation-list.scss`

#### Class naming convention

Based on [BEM Naming](http://getbem.com/naming/)

#### Style element by tag name

Never style directly on tags. Use classes. **Only exception** are `richtext` elements:

```scss
/* never style directly on tags */
div {
    background-color: lightcoral;
}

/* Exception are richtext */
.m-richtext {
    p {
        color: lightcoral;
    }
}
```

### Naming convention SCSS mixin, function and variables

Lowercase with hyphen separated and ordered alphabetic:

```scss
/* variables */
$header-height: 200px;
$header-padding: 50px;
$header-widht: 450px;

@mixin typo-bold() {...}

@function calcRem() {}
```

#### Order @imports

All `@imports` on top of the file and in alphabetic order:

```scss
@import "../shared/utils/breakpoints/css/breakpoints.scss";
@import "../shared/utils/colors/css/colors.scss";
@import "../shared/utils/spacings/css/spacings.scss";
@import "../shared/utils/typo/css/typo.scss";
```

#### Order of elements

Order based on ordner in `.html` file:

```html
<div class="wrapper">
    <span class="wrapper__text">Hello World!</span>
    <button class="wrapper__button">Click me!</button>
</div>
```

```scss
.wrapper {...}

.wrapper__text {...}

.wrapper__button {...}
```

#### Order of CSS properties

1. All `@includes` first and **alphabetic**
2. All CSS properties after the `@includes` in **alphabetic** order
3. `pseudo-classes` alphabetic before `pseudo-elements` alphabetic
4. `@media queries` last order by width smallest first

```scss
.wrapper {
    @include font-size(22px);
    @include typo-bold();
    background-color: lightcoral;
    color: red;
    height: 100px;
    padding: 10px 15px;
    width: 200px;

    &:active,
    &:focus,
    &:hover {...}

    &::after {...}

    &::before {...}

    @media (min-width: 753px) {...}

    @media (min-width: 1138px) {...}
}
```

### CSS `outline` property

Always style the `outline` property. **Never use `outline: none;`**:

```scss
/* never set outline to none */
.wrapper {
    outline: none;
}
```

### Nesting with SCSS

Don't nest elements in `.scss` file. **Only exception** are `modifier` files, `pseudo-class`, `pseudo-elements` and `@media queries`. [More infos and examples why not nesting in SCSS](https://www.sitepoint.com/beware-selector-nesting-sass/):

```html
<div class="wrapper">
    <span class="wrapper__text">Hello World!</span>
    <button class="wrapper__button">Click me!</button>
</div>
```

```scss
/* like this */
.wrapper {
    @include typo-bold();
    color: red;

    &::after {...}

    &:hover {...}

    @media (min-width: 1200px) {...}
}

.wrapper__text {...}

.wrapper__button {...}

/* NOT like this */
.wrapper {
    @include typo-bold();
    color: red;

    &:hover {...}
    
    &::after {...}

    .wrapper__text {...}

    .wrapper__button {...}
}

@media (min-width: 1200px) {...}
```

### Never use `@extend` and !important

Don't use `@extend` [More infos and examples](https://webinista.com/updates/dont-use-extend-sass/). Also never use `!important`.

## JavaScript / TypeScript

### Filename convention

Lowercase e.g. `navigation-list.js`

### import

Place all `imports` on top of the file:

```js
import { Component } from "@angular/core";
```

### Description in header

Write a short description after the imports:

```js
import { Component } from "@angular/core";

/**
 * component header
 * @author Srdan Turudic
 */
```


### selecotrs, states and events

Write all selectors, stateClasses and events global in the file (alphabetic):

```js
import { Component } from "@angular/core";

/**
 * component header
 * @author Srdan Turudic
 */

const selectors = {
    close: '.js-button__close',
    open: '.js-button__open',
};
const stateClasses = {
    elementClosed: 'state-element--closed',
    elementOpen: 'state-element--open'
};
const eventNames = {
    emitting: {
        toggleNavMeta: 'button.element-toggle',
    },
    listening: {
        toggle: 'element.button-toggle',
    },
};
```
### Naming convention function and variables

Camelcase e.g. `elementClosed` or `handleScrolling()`.

### Code documentation

Comment your `variables`, `functions` and `general code` if needed and helpful.
