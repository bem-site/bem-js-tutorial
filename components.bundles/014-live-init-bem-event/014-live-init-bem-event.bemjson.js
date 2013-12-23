({
    block: 'page',
    title: 'Live (lazy) initialization on initializing inner block',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_014-live-init-bem-event.css', ie: false },
        { elem: 'css', url: '_014-live-init-bem-event', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
    ],
    content:[
        {
            block: 'menu',
            js: true,
            content: [
                {
                    elem: 'item',
                    elemMods: { 'state' : 'current' },
                    content: {
                        block: 'link',
                        js: true,
                        mods : { 'pseudo' : 'yes' },
                        mix: [{ block: 'menu', elem: 'item-selector'}],
                        content: 'First point'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'link',
                        mods : { 'pseudo' : 'yes'},
                        mix: [{ block: 'menu', elem: 'item-selector'}],
                        content: 'Second point'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'link',
                        mods : { 'pseudo' : 'yes'},
                        mix: [{ block: 'menu', elem: 'item-selector'}],
                        content: 'Third point'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'link',
                        mods : { 'pseudo' : 'yes'},
                        mix: [{ block: 'menu', elem: 'item-selector'}],
                        content: 'Forth point'
                    }
                }
            ]
        },
        { elem: 'js', url: '_014-live-init-bem-event.js' }
    ]
})
