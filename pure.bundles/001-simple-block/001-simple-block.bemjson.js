({
    block: 'page',
    title: 'A simple JavaSscript empowered BEM block',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_001-simple-block.css' },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    scripts: [
        { elem: 'js', url: '_001-simple-block.js' }
    ],
    content:[
        {
            block: 'my-block',
            js: true
        }
    ]
})
