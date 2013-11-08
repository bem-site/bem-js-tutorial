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
            block: 'call-button',
            js: true,
            content: 'Phone Call'
        },
        { elem: 'js', url: '_002-change-modifier.js' }
    ]
})
