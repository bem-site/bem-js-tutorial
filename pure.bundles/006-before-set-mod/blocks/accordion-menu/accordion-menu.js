modules.define('accordion-menu', ['i-bem-dom', 'jquery'], function(provide, bemDom, $) {

provide(bemDom.declBlock(this.name, {
    beforeElemSetMod: {
        'item' : {
            'current' : {
                'true' : function(elem) {
                    return !this._elem(elem).hasMod('disabled', true);
                }
            }
        }
    },
    onSetMod: {
        'js' : {
            'inited' : function() {
                this._current = this.findElem('item', 'current', true);
                this.bindTo('item', 'click', function(e) {
                  this._elem($(e.currentTarget)).setMod('current', true);
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
