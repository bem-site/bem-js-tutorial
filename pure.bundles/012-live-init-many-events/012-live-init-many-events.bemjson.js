({
    block: 'page',
    title: 'Live (lazy) initialization on several DOM events',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_012-live-init-many-events.css' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
    ],
    scripts: [
        { elem: 'js', url: '_012-live-init-many-events.js' }
    ],
    content:[
        {
            block: 'checkbox',
            checkboxAttrs: {
                id: 'remember1'
            }
        },
        {
            block: 'checkbox',
            mods: { checked: true },
            checkboxAttrs: {
                id: 'remember2'
            }
        }
    ]
})
