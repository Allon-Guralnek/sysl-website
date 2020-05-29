# Sysl Website

Sysl website https://sysl.io is built using [Docusaurus 2](https://v2.docusaurus.io/).


## Contributing

### Project structure

```
sysl-website
├── blog                       // all the blogs
├── docs                       // all the docs
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js            // homepage
├── static                      // website assets
│   └── img
├── docusaurus.config.js        // configuration
├── sidebars.js                 // sidebar management
├── package.json
├── README.md
└── yarn.lock
```

### Contribute to Docs

#### Edit Existing Doc File

All the documentation files are under `docs` which are Markdown-formatted. [Markdown](https://daringfireball.net/projects/markdown/syntax) is a syntax that enables you to write formatted content in a readable syntax. Also, you can do [more than just parsing Markdown](https://v2.docusaurus.io/docs/markdown-features) by using Docusaurus 2.


#### Add New Doc File

1. Create a new Markdown file in `docs` with [header](https://v2.docusaurus.io/docs/markdown-features#markdown-headers)
2. Add it to `sidebars.js`


### Contribute to Blog

All the blog files are under `blog` which are Markdown-formatted. Following [the instruction](https://v2.docusaurus.io/docs/blog) to contribute to Blog.


### Contribute to Homepage

The homepage code of this website is in `src/pages/index.js` with configuration `docusaurus.config.js`. Following [configuration docs](https://v2.docusaurus.io/docs/configuration) to contribute to Homepage.


## Development

### Requirements

* [Node.js](https://nodejs.org/en/download/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)


### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

TODO
