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
                                address: 'Moscow, Lva Tolstogo, 16'
                            },
                            content: {
                                block: 'link',
                                js: true,
                                mods : { 'pseudo' : 'yes' },
                                mix: [{ block: 'menu', elem: 'item-selector'}],
                                content: 'Yandex'
                            }
                        },
                        {
                            elem: 'item',
                            js: {
                                address: 'Pennsylvania Ave NW, Washington, DC, United States'
                            },
                            content: {
                                block: 'link',
                                mods : { 'pseudo' : 'yes'},
                                mix: [{ block: 'menu', elem: 'item-selector'}],
                                content: 'White House'
                            }
                        },
                        {
                            elem: 'item',
                            js: {
                                address: '221B Baker Street, London, United Kingdom'
                            },
                            content: {
                                block: 'link',
                                mods : { 'pseudo' : 'yes'},
                                mix: [{ block: 'menu', elem: 'item-selector'}],
                                content: 'Sherlock Holmes'
                            }
                        },
                        {
                            elem: 'item',
                            js: {
                                address: '1 Infinite Loop, Cupertino, CA, United States'
                            },
                            content: {
                                block: 'link',
                                mods : { 'pseudo' : 'yes'},
                                mix: [{ block: 'menu', elem: 'item-selector'}],
                                content: 'Apple'
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
