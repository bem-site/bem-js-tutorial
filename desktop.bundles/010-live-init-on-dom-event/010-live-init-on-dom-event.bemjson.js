(function() {

    var buttons = [],
        colors = ['orange', 'blue', 'green', 'grey', 'pink'],
        shape = ['round', 'oval', 'brackets', 'skew', 'back', 'knife', 'shield', 'drop', 'morph'];
    for(var i=0;i<100;i++) {
        buttons.push([{
            block: 'button',
            mods: {
                color: colors[Math.round((Math.random()*(colors.length-1)))],
                shape: shape[Math.round((Math.random()*(shape.length-1)))]
            },
            content: 'Button #' + (i+1)
        }, '<br/>']);
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
            {
                block: 'description',
                content: 'Famous BonBon CSS3 buttons by Simurai (http://archive.simurai.com/lab/buttons/) illustrate lazy initialization in BEM'
            },
            buttons,
            { elem: 'js', url: '_010-live-init-on-dom-event.js' }
        ]
    }
}())
