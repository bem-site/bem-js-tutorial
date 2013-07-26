({
    block: 'page',
    title: 'Setting modifier on an element',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_003-element-modifier.css', ie: false },
        { elem: 'css', url: '_003-element-modifier', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
        {
            block: 'traffic-light'
        },
        { elem: 'js', url: '_003-element-modifier.js' }
    ]
})
