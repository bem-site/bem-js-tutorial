// TODO: fixme
modules.define('menu', ['i-bem-dom', 'jquery'], function(provide, bemDom, $) {

var Item = bemDom.declElem('menu', 'item', {
    beforeSetMod : {
        'state': {
            'current' : function(modName, modVal, oldModVal) {
                return oldModVal != 'disabled';
            }
        }
    },

    onSetMod : {
        'state': {
            'current' : function() {
                var menu = this._block(),
                    prev = menu._elem({ elem : Item, modName : 'state', modVal : 'current' });

                prev && prev !== this && prev.delMod('state');
                menu._emit('current', {
                    prev    : prev,
                    current : this
                });
            }
        }
    }
});

provide(bemDom.declBlock(this.name, {
    onItemSelectorClick : function(e) {

        this._getItemByEvent(e).setMod('state', 'current');

    },

    _getItemByEvent : function(e) {
        return $(e.currentTarget).closest(Item._buildSelector()).bem(Item);
    }

}, {

    lazyInit : true,

    onInit : function() {
        this._domEvents('item-selector').on('click', this.prototype.onItemSelectorClick);
    }

}));

});
