/* jshint node:true */
/* global MAKE */

//process.env.YENV = 'production';
//process.env.XJST_ASYNCIFY = 'yes';

require('bem-environ/lib/nodes');

MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks/,
    bundlesLevelsRegexp: /^.+?\.bundles$/,

    libraries: [
        'bem-core @ b1f2677e5ecc2fa078627d9dae24157436a769d9',
        'bem-components @ 1fd459ae2713f6bfa814a477ab0e42c5f806ea36'
    ]

});


MAKE.decl('BundleNode', {

    getTechs: function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'browser.js+bemhtml',
            'css',
            'ie.css',
            'ie7.css',
            'ie8.css',
            'ie9.css',
            'html'
        ];

    },

    'create-browser.js+bemhtml-optimizer-node': function(tech, sourceNode, bundleNode) {
        sourceNode.getFiles().forEach(function(f) {
            this['create-js-optimizer-node'](tech, this.ctx.arch.getNode(f), bundleNode);
        }, this);
    }

});
