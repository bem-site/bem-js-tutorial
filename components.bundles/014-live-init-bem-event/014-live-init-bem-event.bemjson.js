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
            block: 'map-marks',
            content: [
                {
                    block: 'menu',
                    js: true,
                    mix: [{ block: 'map-marks', elem: 'menu' }],
                    content: [
                        {
                            elem: 'item',
                            elemMods: { 'state' : 'current' },
                            js: {
                                address: 'Herengracht 256, Amsterdam'
                            },
                            content: {
                                block: 'link',
                                js: true,
                                mods : { 'pseudo' : 'yes' },
                                mix: [{ block: 'menu', elem: 'item-selector'}],
                                content: 'Home'
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
                {
                    elem: 'map'
                }
            ]
        },
        { elem: 'js', url: '_014-live-init-bem-event.js' }
    ]
})
