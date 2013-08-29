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
            block: 'accordion-menu',
            items: [
                {
                    title: 'My files',
                    items: [
                        {
                            title: 'Dropbox',
                            url: '#',
                            number: 42
                        },
                        {
                            title: 'Skydrive',
                            url: '#',
                            number: 87
                        },
                        {
                            title: 'FTP Server',
                            url: '#',
                            number: 366
                        }
                    ]
                },
                {
                    title: 'Mail',
                    items: [
                        {
                            title: 'Hotmail',
                            url: '#',
                            number: 9
                        },
                        {
                            title: 'Yahoo',
                            url: '#',
                            number: '14'
                        },
                        {
                            title: 'Gmail',
                            url: '#',
                            number: 3
                        }
                    ]
                },
                {
                    title: 'Cloud',
                    items: [
                        {
                            title: 'Connect',
                            url: '#',
                            number: 12
                        },
                        {
                            title: 'Profiles',
                            url: '#',
                            number: 19
                        },
                        {
                            title: 'Options',
                            url: '#',
                            number: 27
                        }
                    ]
                },
                {
                    title: 'Sign Out',
                    items: [
                        {
                            title: 'Log Out',
                            url: '#'
                        },
                        {
                            title: 'Delete Account',
                            url: '#'
                        },
                        {
                            title: 'Freeze Account',
                            url: '#'
                        }
                    ]
                }
            ]
        },
        { elem: 'js', url: '_006-before-set-mod.js' }
    ]
})
