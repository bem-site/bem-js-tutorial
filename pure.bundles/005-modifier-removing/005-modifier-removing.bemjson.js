({
    block: 'page',
    title: 'Removing a modifier from an element',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_005-modifier-removing.css', ie: false },
        { elem: 'css', url: '_005-modifier-removing', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        '<link  href="http://fonts.googleapis.com/css?family=Reenie+Beanie:regular" rel="stylesheet" type="text/css">'
    ],
    content:[
        {
            tag: 'h1',
            content: 'All for today'
        },
        {
            block: 'todo',
            content: [
                {
                    elem: 'task',
                    title: 'Lean more about BEM',
                    text: 'Visit bem.info to learn more.'
                },
                {
                    elem: 'task',
                    title: 'Favorite repositories',
                    text: 'Select 3 the most cool repositiries on BEM and favorite them.'
                },
                {
                    elem: 'task',
                    title: 'Tweet friends',
                    text: 'Tweet with #b_ hashtag to all the friends.'
                },
                {
                    elem: 'task',
                    title: 'Run a pet project',
                    text: 'Run my first pet BEM project with project-stub.'
                },
                {
                    elem: 'task',
                    title: 'JavaScript it',
                    text: 'Follow the JavaScript on BEM tutorial.'
                },
                {
                    elem: 'task',
                    title: 'Learn BEMHTML',
                    text: 'Pick up some BEMHTML and code templates.'
                }
            ]
        },
        { elem: 'js', url: '_005-modifier-removing.js' }
    ]
})
