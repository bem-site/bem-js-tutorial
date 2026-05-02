modules.define('accordion-menu', ['i-bem-dom', 'jquery'], function(provide, bemDom, $) {

var Item = bemDom.declElem('accordion-menu', 'item', {
    beforeSetMod: {
        'current' : {
            'true' : function() {
                return !this.hasMod('disabled');
            }
        }
    },
    onSetMod: {
        'current' : {
            'true' : function() {
                this._block().setCurrentItem(this);
            }
        }
    }
});

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                this._current = this._elem({ elem : Item, modName : 'current', modVal : true });
                this._domEvents('item').on('click', function(e) {
                    $(e.currentTarget).bem(Item).setMod('current', true);
                });
            }
        }
    },
    setCurrentItem: function(item) {
        this._current && this._current !== item && this._current.delMod('current');
        this._current = item;
    }
}));

});
