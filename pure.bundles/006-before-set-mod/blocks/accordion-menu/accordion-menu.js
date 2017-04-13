modules.define('accordion-menu', ['i-bem-dom', 'jquery'], function(provide, bemDom, $) {

provide(bemDom.decl(this.name, {
    beforeElemSetMod: {
        'item' : {
            'current' : {
                'true' : function(elem) {
                    return !this.hasMod(elem, 'disabled');
                }
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
    },
    onElemSetMod: {
        'item' : {
            'current' : {
                'true' : function(elem) {
                    this.delMod(this._current, 'current');
                    this._current = elem;
                }
            }
        }
    }
}));

});
