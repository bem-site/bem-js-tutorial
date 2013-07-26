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
            block: 'dropdown',
            content: [
                {
                    elem: 'title',
                    content: 'Transport'
                },
                {
                    elem: 'list',
                    content: [
                        {
                            elem: 'list-item',
                            mix: { block: 'ico', elem: 'envelope'},
                            text: 'Classic mail',
                        },
                        {
                            elem: 'list-item',
                            mix: { block: 'ico', elem: 'truk'},
                            text: 'UPS Delivery'
                        }
                    ]
                }
            ]
        },
        { elem: 'js', url: '_003-element-modifier.js' }
    ]
})
