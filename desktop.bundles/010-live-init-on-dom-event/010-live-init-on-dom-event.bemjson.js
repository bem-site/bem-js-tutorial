(function() {

    var buttons = [];
    for(var i=0;i<100;i++) {
        buttons.push({ block: 'button' });
    }

    return {
        block: 'page',
        title: 'Removing a modifier from an element',
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
