# [AppBaza.com](https://appbaza.com/)

## How to name branches?

- `docs/{project}-{abc123}` - for documentation updates
- `blog/{blog-item-slug}` - for blog updates
- `website/{change}` - for website changes (menus, links, etc)
- `conf/{change}` - for configuration changes

## How change version?

Update the following files with the new version:

- `package.json` - modify `version` field
- `docusaurus.config.js` - search for `/changelog`
- `src/pages/changelog.md` - add a new version with the change log

## How to start, build and deploy the website?

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
