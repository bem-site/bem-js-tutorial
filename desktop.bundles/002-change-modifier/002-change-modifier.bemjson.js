({
    block: 'page',
    title: 'Changing modifier after click',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_002-change-modifier.css', ie: false },
        { elem: 'css', url: '_002-change-modifier', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
        {
            block: 'square',
            js: true,
            content: 'Click on me to apply fancy theme'
        },
        { elem: 'js', url: '_002-change-modifier.js' }
    ]
})
