(function() {

    var buttons = [],
        colors = ['orange', 'blue', 'green', 'grey'],
        shape = ['round', 'oval', 'brackets', 'skew', 'back', 'knife', 'shield', 'drop', 'morph'];
    for(var i=0;i<100;i++) {
        buttons.push({
            block: 'button',
            mods: {
                color: colors[Math.floor((Math.random()*(colors.length-1)))],
                shape: shape[Math.floor((Math.random()*(shape.length-1)))]
            },
            content: 'Button #' + i
        });
    }

    return {
        block: 'page',
        title: 'Live (lazy) initialization on DOM event',
        favicon: '/favicon.ico',
        head: [
            { elem: 'css', url: '_010-live-init-on-dom-event.css', ie: false },
            { elem: 'css', url: '_010-live-init-on-dom-event', ie: true },
            { elem: 'meta', attrs: { name: 'description', content: '' }},
        ],
        content:[
            buttons,
            { elem: 'js', url: '_010-live-init-on-dom-event.js' }
        ]
    }
}())
