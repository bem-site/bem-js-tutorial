({
    block: 'page',
    title: 'Live (lazy) initialization on initializing inner block',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_013-live-init-bem-event.css' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
    ],
    scripts: [
        { elem: 'js', url: '_013-live-init-bem-event.js' }
    ],
    content:[
        {
            block: 'dj',
            js: true,
            content: [
                {
                    block : 'checkbox',
                    name : 'r1',
                    val : 2,
                    icon: {
                        elem: 'icon'
                    }
                },
                {
                    block: 'player',
                    mods: { theme: 'red' },
                    mix: [{
                        block: 'dj',
                        elem: 'disk'
                    }]
                },
                {
                    block: 'player',
                    mods: { theme: 'yellow' },
                    mix: [{
                        block: 'dj',
                        elem: 'disk'
                    }]
                }
            ]
        },
        {
            tag: 'p',
            attrs: {
                style: 'text-align: right; margin-top: 2em;'
            },
            content: 'Idea, CSS and images are taken from <a href="http://demo.marcofolio.net/jquery_dj/">demo.marcofolio.net/jquery_dj</a>'
        }
    ]
})
