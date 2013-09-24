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
        {
            block: 'text',
            content: [
                {
                    block: 'sign',
                    content: 'the reset button'
                },
                'Turn on the sound when checking this example. :-)'
            ]
        },
        { elem: 'js', url: '_003-element-modifier.js' }
    ]
})
