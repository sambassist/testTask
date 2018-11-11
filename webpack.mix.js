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

mix.stylus('src/styl/main.styl', 'public/css', {
        use: [
            require('rupture')()
        ]
    }).sourceMaps();

mix.copy('src/img/*', 'public/img/');
mix.copyDirectory('src/fonts/', 'public/fonts/');

mix.browserSync({
    proxy: process.env.MIX_WATCH_PROXY
});