# Tsushima

A template for small websites.

## Environment setup

### Requirements

- [NodeJS](https://nodejs.org/en/download/)

### How to use

How do I use Tsushima? First thing first, clone this repo:

```bash
git clone https://github.com/AlexzanDev/Tsushima
```

When you are in the root folder, open your favorite CLI program and run this command:

```bash
npm run install
```

What does this command do? It installs all the NodeJS dependencies needed for Tsushima to run and then runs Gulp.

To run Gulp after the setup, you have two options:

```bash
# Runs Gulp directly.
gulp

# Runs Gulp through NodeJS.
npm run dev
```

### Gulp tasks

At the moment there are four Gulp tasks: `scssTask` converts SCSS to CSS, `browserSyncServe` and `browserSyncReload` initialize [Browser Sync](https://browsersync.io/) and reload the browser on every file change respectively, and `watchTask` manages the entire thing.

And that's it. For now.

## History

Why does Tsushima exists? Check out [my Twitter thread about it](https://twitter.com/alexzan__/status/1518314564424716288).