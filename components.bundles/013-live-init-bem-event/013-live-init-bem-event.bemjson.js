({
    block: 'page',
    title: 'Live (lazy) initialization on BEM events',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_013-live-init-bem-event.css', ie: false },
        { elem: 'css', url: '_013-live-init-bem-event', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
    ],
    content:[
        {
            block: 'dj',
            js: true,
            content: [
                {
                    block : 'checkbox',
                    name : 'r1',
                    val : 2,
                    icon: {
                        elem: 'icon'
                    }
                },
                {
                    block: 'vinyl',
                    mods: { theme: 'red' },
                    mix: [{
                        block: 'dj',
                        elem: 'disk'
                    }]
                },
                {
                    block: 'vinyl',
                    mods: { theme: 'yellow' },
                    mix: [{
                        block: 'dj',
                        elem: 'disk'
                    }]
                }
            ]
        },
        { elem: 'js', url: '_013-live-init-bem-event.js' }
    ]
})
