# Code scaffolding

The components are based on [atomic design by Brad Frost](http://bradfrost.com/blog/post/atomic-web-design/)

## Generate components

Change directory to the folder, depending on the component distinc level `atom|molecule|organism|pages`:

- [../app/components/atoms](../app/components/atoms)
- [../app/components/molecules](../app/components/molecules)
- [../app/components/organisms](../app/components/organisms)
- [../app/components/pages](../app/components/pages)

To generate a new component run:

```
ng generate component component-name
```

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module

## Design

The design of the website and components was made with [Affinity Designer](https://affinity.serif.com/en-gb/designer/desktop/). The designs are stored in a [Dropbox folder](https://www.dropbox.com/home/Web%20Projects/Design/Cantieni).

## Component naming convention

There are a few rules for component names:

- Lowercase
- Meaningful name
- Separate multiple words with hyphens e.g. `sticky-header`
- Page mit prefix `page` e.g. `page-contact-information`

## Documentation

### Readme

Every component contains a `readme.md` with a description about:

- Short description component
- Important links
- Modifier
- States
- Known Issues
- Testing

### Schema

Every component contains a `schema.json` with the description of all properties.

## Testing

Testing with `unit tests` not needed for every component in this project.

## Pattern Library

Every component has to be linked to the `pattern library`.


