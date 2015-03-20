({
    block: 'page',
    title: 'Toggling a modifiers on a block and an element',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_004-toggle-mod.css' },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    scripts: [
        { elem: 'js', url: '_004-toggle-mod.js' }
    ],
    content:[
        {
            block: 'switch',
            name: 'my-switch'
        }
    ]
})
