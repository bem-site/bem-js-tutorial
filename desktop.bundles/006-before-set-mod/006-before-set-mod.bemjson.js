({
    block: 'page',
    title: 'beforeSetMod helper',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_006-before-set-mod.css', ie: false },
        { elem: 'css', url: '_006-before-set-mod', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        '<link href="http://fonts.googleapis.com/css?family=Droid+Sans:400,700" rel="stylesheet" type="text/css">'
    ],
    content:[
        {
            block: 'button',
            mods: { theme: 'yellow' },
            text: 'Add to cart',
            price: '$9,99'
        },
        {
            block: 'button',
            mods: { theme: 'yellow', disabled: true },
            text: 'Bring it home',
            price: '$10,99'
        },
        {
            block: 'experiment',
            content: 'Try to focus button by button'
        },
        { elem: 'js', url: '_006-before-set-mod.js' }
    ]
})
