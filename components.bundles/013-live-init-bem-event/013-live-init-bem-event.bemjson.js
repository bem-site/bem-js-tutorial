({
    block: 'page',
    title: 'Live (lazy) initialization on BEM events',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_013-live-init-bem-event.css', ie: false },
        { elem: 'css', url: '_013-live-init-bem-event', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
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
        { elem: 'js', url: '//yandex.st/jquery/1.10.2/jquery.min.js' },
        { elem: 'js', url: 'http://jqueryrotate.googlecode.com/svn/trunk/jQueryRotate.js' },
        { elem: 'js', url: '_013-live-init-bem-event.js' }
    ]
})
