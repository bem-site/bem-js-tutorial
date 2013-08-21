({
    block: 'page',
    title: 'Live (lazy) initialization on DOM event',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_010-live-init-on-event.css', ie: false },
        { elem: 'css', url: '_010-live-init-on-event', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
    ],
    content:[
        {
            block: 'text',
            content: [
                {
                    elem: 'h1',
                    mix: {
                        block: 'translate',
                        js: { prompt: 'хорошо доехал' }
                    },
                    content: 'Goed aangekomen'
                },
                {
                    elem: 'p',
                    content: [
                        {
                            block: 'translate',
                            content: 'Een man gaat een postkantor binnen',
                            prompt: 'один мужчина заходит на почту;'
                        }
                    ]
                }
            ]
        },
        { elem: 'js', url: '_010-live-init-on-event.js' }
    ]
})
