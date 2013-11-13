({
    block: 'page',
    title: 'Live (lazy) initialization on initializing inner block',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_014-live-init-bem-event.css', ie: false },
        { elem: 'css', url: '_014-live-init-bem-event', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
    ],
    content:[
        'Какой-то текст   ',
        {
            block: 'attach',
            mods: { size: 's' },
            content: [
                {
                    block: 'button',
                    mods: { size: 's' },
                    mix: [{ block: 'attach', elem: 'button' }],
                    tabindex: 1,
                    id: 'bla',
                    content: 'xxxx'
                },
                {
                    elem: 'holder',
                    content: 'yyy'
                }
            ]
        },
        { elem: 'js', url: '_014-live-init-bem-event.js' }
    ]
})
