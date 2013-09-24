({
    block: 'page',
    title: 'Toggling a modifiers on a block and an element',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_004-toggle-mod.css', ie: false },
        { elem: 'css', url: '_004-toggle-mod', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
        {
            block: 'switch',
            name: 'my-switch'
        },
        { elem: 'js', url: '_004-toggle-mod.js' }
    ]
})
