# Global styling

The global stylings are located in the [shared](../shared) folder.

## Base

| Description | Path |
|:---|:---|
| Basic document styles for html, body and general element styling | [../shared/base/document/css/document.scss](../shared/base/document/css/document.scss) |
| [normalize.css](github.com/necolas/normalize.css) | [../shared/base/reset/css/reset.scss](../shared/base/document/css/document.scss) |
| Webfont import with font-face | [../shared/base/webfonts/css/webfonts.scss](../shared/base/document/css/document.scss) |

- The [basic document styles](../shared/base/document/css/document.scss) and the [webfonts](../shared/base/webfonts/css/webfonts.scss) are imported in the global [styles.scss](../styles.scss)
- The [reset.scss](../shared/base/reset/css/reset.scss) is importing the [normalize.css](../shared/base/reset/css/normalize/normalize.css)

## Utils

| Description | Path |
|:---|:---|
| animations | [../shared/utils/animations/css/animations.scss](../shared/utils/animations/css/animations.scss) |
| box-shadows | [../shared/utils/box-shadows/css/box-shadows.scss](../shared/utils/box-shadows/css/box-shadows.scss) |
| breakpoints | [../shared/utils/breakpoints/css/breakpoints.scss](../shared/utils/breakpoints/css/breakpoints.scss) |
| clearfix | [../shared/utils/clearfix/css/clearfix.scss](../shared/utils/clearfix/css/clearfix.scss) |
| colors | [../shared/utils/colors/css/colors.scss](../shared/utils/colors/css/colors.scss) |
| gradients | [../shared/utils/gradients/css/gradients.scss](../shared/utils/gradients/css/gradients.scss) |
| layout classes | [../shared/utils/layout/css/layout.scss](../shared/utils/layout/css/layout.scss) |
| links | [../shared/utils/laylinksout/css/links.scss](../shared/utils/links/css/links.scss) |
| lists | [../shared/utils/lists/css/lists.scss](../shared/utils/lists/css/lists.scss) |
| outline | [../shared/outline/outline/css/outline.scss](../shared/utils/outline/css/outline.scss) |
| spacings | [../shared/utils/spacings/css/spacings.scss](../shared/utils/spacings/css/spacings.scss) |
| typo | [../shared/utils/typo/css/typo.scss](../shared/utils/typo/css/typo.scss) |
| webfonts | [../shared/utils/webfonts/css/webfonts.scss](../shared/utils/webfonts/css/webfonts.scss) |
| z-index | [../shared/utils/z-index/css/z-index.scss](../shared/utils/z-index/css/z-index.scss) |

The `.scss` files within the utils have to be imported in the `.scss` of the `components`, if they are required.
