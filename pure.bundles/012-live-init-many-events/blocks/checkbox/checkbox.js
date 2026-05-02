modules.define('checkbox', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'focused' : {
            'true' : function() {
                this._elem('control').domElem.focus();
            },
            '' : function() {
                this._elem('control').domElem.blur();
            }
        },
        'checked' : function(modName, modVal) {
            this._elem('control').domElem.attr('checked', modVal ? 'checked' : false);
        }
    },
    _onClick : function() {
        this.setMod('focused', true);
    },
    _onChange : function(e) {
        this.setMod('checked', e.target.checked);
    },
    _onFocusChange : function(e) {
        this.setMod('focused', e.type == 'focusin');
    }
},{
    lazyInit: true,

    onInit: function() {
        this._domEvents('label').on('click', this.prototype._onClick);
        this._domEvents('control').on('change', this.prototype._onChange);
        this._domEvents('control').on('focusin focusout', this.prototype._onFocusChange);
    }
}));

});
