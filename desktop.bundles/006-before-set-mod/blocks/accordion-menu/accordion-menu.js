modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {


DOM.decl('accordion-menu', {
    beforeElemSetMod: {
        'item' : {
            'current' : function() {
                console.log(333);
            }
        }
    },
    onSetMod: {
        'js' : {
            'inited' : function() {
                this._current = this.findElem('item', 'current', true);
                this.bindTo('item', 'click', function(e) {
                    this.setMod($(e.currentTarget), 'current', true);
                });
            }
        }
    }
});

provide(DOM);

});
