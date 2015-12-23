// common configuration
require.config({
    'baseUrl': '/js',
    'paths': {
        'jquery': '../vendor/jquery/dist/jquery.min',
        'reveal': '../vendor/reveal.js/js/reveal',
        'bootstrap': '../vendor/bootstrap/dist/js/bootstrap.min',
        'jquery.terminal': '../vendor/jquery.terminal/js/jquery.terminal-min'
    },
    'shim': {
        'jquery': { exports: '$' },
        'bootstrap': { deps: ['jquery'] },
        'jquery.terminal': { deps: ['jquery'] }
    }
});