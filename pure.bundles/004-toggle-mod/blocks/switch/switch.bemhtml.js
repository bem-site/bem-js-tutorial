block('switch')(

    js()(true),

    mix()({ mods: { 'switched' : 'off' }}),

    content()(function() {
        return [
            {
                elem: 'input',
                name: this.ctx.name
            },
            {
                elem: 'label',
                content: '&#xF011;'
            }
        ];
    }),

    elem('input')(
        tag()('input'),
        attrs()(function() {
            return {
                type: 'checkbox',
                name: this.ctx.name
            };
        })
    ),

    elem('label')(
        tag()('label')
    )

);
