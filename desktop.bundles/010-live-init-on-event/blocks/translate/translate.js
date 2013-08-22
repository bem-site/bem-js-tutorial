modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('translate', {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this.setMod(this.elem('prompt'), 'visible', true);
            }
        }
    },
    onElemSetMod: {
        'prompt': {
            'visible': function(elem) {
                elem.text(this.params['prompt']);
            }
        }
    }
},{
    live: function() {
        this.liveInitOnEvent('click');
    }
});

provide(DOM);

});
