({
    block: 'page',
    title: 'Changing modifier after click',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_002-change-modifier.css' },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    scripts: [
        { elem: 'js', url: '_002-change-modifier.js' }
    ],
    content:[
        {
            block: 'call-button',
            js: true,
            content: 'Phone Call'
        }
    ]
})
