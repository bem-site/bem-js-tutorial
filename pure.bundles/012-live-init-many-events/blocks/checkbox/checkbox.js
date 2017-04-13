modules.define('checkbox', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'focused' : {
            'true' : function() {
                this._elem('control').focus();
            },
            '' : function() {
                this._elem('control').blur();
            }
        },
        'checked' : function(modName, modVal) {
            this._elem('control').attr('checked', modVal ? 'checked' : false);
        }
    },
    _onClick : function() {
        this.setMod('focused', true);
    },
    _onChange : function(e) {
        this.setMod('checked', e.target.checked);
    }
},{
    live: function() {
        this.liveBindTo('label', 'click', function() {
            this._onClick();
        });

        this.liveBindTo('control', 'change', function(e){
            this._onChange(e);
        });

        this.liveBindTo('control', 'focusin focusout', function(e){
            this.setMod('focused', e.type == 'focusin');
        })
    }
}));

});
