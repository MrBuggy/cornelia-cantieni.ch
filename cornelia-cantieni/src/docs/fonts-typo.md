# Fonts and typo

The fonts are stored in the [../assets/fonts](../assets/fonts). Each font has it's subfolder e.g. `Montserrat`. The font files **must be in the assets folder**.

## Fonts in use

The fonts were downloaded from `Google Fonts`:

- [Montserrat](https://fonts.google.com/specimen/Montserrat)

## Font matching

| affinity family | css font-family | scss mixin | scss variable |
|:---|:---|:---|:---|
| Montserrat Bold | 'Montserrat Bold' | `typo-bold()` | `$montserrat-bold` |
| Montserrat Italic | 'Montserrat Italic' | `typo-italic()` | `$montserrat-italic` |
| Montserrat Light | 'Montserrat Light' | `typo-light()` | `$montserrat-light` |
| Montserrat Regular | 'Montserrat Regular' | `typo-regular()` | `$montserrat-regular` |
| Montserrat Semi-Bold | 'Montserrat Semi-Bold' | `typo-semibold()` | `$montserrat-semibold` |
| Montserrat Semi-Bold Italic | 'Montserrat Semi-Bold Italic' | `typo-semibold-italic()` | `$montserrat-semibold-italic` |
| Montserrat Thin | 'Montserrat Thin' | `typo-thin()` | `$montserrat-thin` |

### Links

- [affinity family](https://www.dropbox.com/home/Web%20Projects/Design/Cantieni)
- [css font-family](../shared/base/webfonts/css/webfonts.scss)
- [scss mixin](../shared/utils/typo/css/typo.scss)
- [scss variable](../shared/utils/webfonts/css/webfonts.scss)

### Fallback Font

| css font-family | scss variable |
|:---|:---|
| Arial, sans-serif | `$font-family-fallback` |

#### Links
- [css font-family and scss variable](../shared/utils/webfonts/css/webfonts.scss)
- [scss mixin](../shared/utils/typo/css/typo.scss)

## Global import

The [fonts](../shared/base/webfonts/css/webfonts.scss) are imported globally in the [styles.scss](../styles.scss) folder.

