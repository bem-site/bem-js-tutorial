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
            block: 'input',
            name: 'password',
            mods: { size: 's' },
            content: { elem: 'control' }
        },
        { elem: 'js', url: '_013-live-init-bem-event.js' }
    ]
})
