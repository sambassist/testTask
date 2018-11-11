let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.stylus('src/styl/main.styl', 'menu/css', {
        use: [
            require('rupture')()
        ]
    }).sourceMaps();

// mix.copy('resources/assets/favicon/*', 'public/favicon/');
// mix.copy('resources/assets/packages/', 'public/packages/');

// mix.browserSync({
//     proxy: process.env.MIX_WATCH_PROXY
// });